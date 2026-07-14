import { useI18n } from 'vue-i18n'
import type { Certification, ListOption, Mission, Place, WorkPlace } from '~/types'

export const useProfileData = () => {
  const { t } = useI18n()

  const oresMission: Mission = {
    title: t('experiences.wavenet.missions.0.title'),
    enterprise: t('experiences.wavenet.missions.0.enterprise'),
    date: t('experiences.wavenet.missions.0.date'),
    description: t('experiences.wavenet.missions.0.description'),
    skills: ['C#', 'ASP.NET Core', 'Blazor', 'SQL Server', 'Cosmos DB']
  }

  const experiences: WorkPlace[] = [
    { 
      name: 'Wavenet',
      description: t('experiences.wavenet.description'),
      date: t('experiences.wavenet.date'),
      title: t('experiences.wavenet.title'),
      skills: ['C#', 'ASP.NET Core', 'Blazor', 'Typescript', 'Vue.js', 'SQL Server', 'Cosmos DB', 'Terraform', 'Azure', 'Github Actions'],
      missions: [ oresMission ]
    },
    { 
      name: 'Easi',
      description: t('experiences.easi.description'),
      date: t('experiences.easi.date'),
      title: t('experiences.easi.title'),
      skills: ['C#', '.NET Core', 'SQL Server', 'WPF', 'Powershell', 'Windows Server']
    },/*
    { 
      name: t('experiences.ulb.name'),
      description: t('experiences.ulb.description'),
      date: t('experiences.ulb.date'),
      title: t('experiences.ulb.title'),
      skills: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Javascript', 'JQuery'],
      internship: true
    }*/
  ]

  const educations: Place[] = [
    { 
      name: 'Haute école en Hainaut',
      description: t('educations.heh.description'),
      date: t('educations.heh.date')
    }
  ]

  const certifications: Certification[] = [
    {
      name: t('certifications.gh200.name'),
      issuer: t('certifications.gh200.issuer'),
      description: t('certifications.gh200.description'),
      date: t('certifications.gh200.date'),
      link: 'https://learn.microsoft.com/api/credentials/share/fr-fr/OlivierHayot-3879/959D372E9B54FE26?sharingId=F6F8F4EC39C38103',
      validUntil: t('certifications.gh200.validUntil'),
      logo: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1911118423/0215972a-0912-4638-8cb0-8c655b8eaf0f2016309413550254902.png"
    },
    {
      name: t('certifications.terraform.name'),
      issuer: t('certifications.terraform.issuer'),
      description: t('certifications.terraform.description'),
      date: t('certifications.terraform.date'),
      link: 'https://www.credly.com/badges/19129d90-2993-4fe8-a301-1460a0c7f5b4/public_url',
      validUntil: t('certifications.terraform.validUntil'),
      logo: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1256144051/d0da6cb2-8edb-438f-b6b2-abaf0acf6f0b11682161235118687450.png"
    },
    {
      name: t('certifications.gh300.name'),
      issuer: t('certifications.gh300.issuer'),
      description: t('certifications.gh300.description'),
      date: t('certifications.gh300.date'),
      link: 'https://learn.microsoft.com/api/credentials/share/fr-fr/OlivierHayot-3879/959D372E9B54FE26?sharingId=F6F8F4EC39C38103',
      validUntil: t('certifications.gh300.validUntil'),
      logo: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1999319323/9a132d12-47a7-4c8e-8954-27fe0e5f0a1d12569602178324077995.png"
    },
  ]

  const contacts: ListOption[] = [
    { name: t('contacts.phone'), value: '+32 471 64 60 15' },
    { name: t('contacts.mail'), value: 'olivier.hayot.dev@gmail.com' },
    { name: t('contacts.website'), value: 'https://cv.olivierhayot.be' }
  ]

  const languages: ListOption[] = [
    { name: t('languages.french'), value: 'C2' },
    { name: t('languages.english'), value: 'B2' }
  ]

    const skills: ListOption[] = [
      {name: t('skill.languages'), value: 'C#, Typescript, SQL'},
      {name: t('skill.webBackend'), value: '.Net 8/10, ASP.NET Core, CQRS, EF Core, XUnit/NUnit/BUnit'},
      {name: t('skill.webFrontend'), value: 'Vue.js,, Blazor(WASM/Server), HTML5/CSS3/SASS'},
      {name: t('skill.databases'), value: 'PostgreSQL, SQL Server, Cosmos DB, SQLite'},
      {name: t('skill.devOps'), value: 'Microsoft Azure, Docker, Terraform, Git, Github, CI/CD (Github Actions)'},
      {name: t('skill.soft'), value: `${t('skill.analytic')}, ${t('skill.team')}, ${t('skill.communication')}, ${t('skill.adaptive')}`}
    ]

  return { experiences, educations, certifications, contacts, languages, skills }
}
