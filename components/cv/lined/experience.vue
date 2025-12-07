<script setup lang="ts">
import { pluralize } from '~/helpers/string';
import type { Mission } from '~/types';

const props = defineProps<{
    title?: string
    place: string
    date: string
    description: string
    missions?: Mission[]
}>()
</script>
<template>
    <div class="flex my-3">
        <div class="flex-2">
            <p class=" italic text-sm">{{ props.date }}</p>
        </div>
        <div class="flex-8 pl-5">
            <h4 class="font-bold">{{ props.place }} <span v-if="props.title !== undefined">| {{ props.title }}</span></h4>
            <p class="pt-1 text-sm">{{ props.description }}</p>
            <div v-if="props.missions && props.missions.length > 0" class="mt-2">
                <h4 class="font-semibold mb-1">{{ pluralize($t("mission"), props.missions.length) }} : </h4>
                <div v-for="mission in props.missions" :key="mission.date" class="ml-3 text-sm">
                    <span class="font-semibold">{{ mission.enterprise}} |</span>
                    {{ mission.title}} <span class="font-semibold"> | </span>
                    <span class="italic">{{ mission.date }}</span>
                    <span class="block">{{ mission.description }} </span>
                </div>
            </div>
        </div>
    </div>
</template>