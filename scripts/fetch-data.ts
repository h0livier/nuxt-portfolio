import { writeFile } from 'fs/promises';
import * as dotenv from 'dotenv'

dotenv.config()

const API_URL = process.env.STRAPI_URL || '';
const Bearer = process.env.STRAPI_TOKEN || ''

async function fetchData<T>(collection: string) : Promise<T[]> {
  try {
    const response = await fetch((API_URL + collection + '?populate=*'), {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${Bearer}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error while fetching '+collection+' :', (error as Error).message);
  }
  return new Array<T>()
}

async function storeCollection<T>(name: string, collection: T[]){
  try {
    await writeFile('./scripts/generated/'+name+'.json', JSON.stringify(collection, null, 2), 'utf-8');
    console.log('Collection file '+name+' created successfully');
  } catch (err) {
    console.error('Error when writing file '+name+' :', err);
  }
}

(async () => {
  const users = await fetchData('users');
  await storeCollection('users', users)
})();