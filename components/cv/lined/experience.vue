<script setup lang="ts">
import { pluralize } from '~/helpers/string';
import type { Mission } from '~/types';

const props = defineProps<{
    title?: string
    place: string
    date: string
    description: string
    missions?: Mission[]
    showMission?: boolean
}>()
</script>
<template>
    <div class="flex break-inside-avoid">
        <div class="flex-2">
            <p class="italic">{{ props.date }}</p>
        </div>
        <div class="flex-8 pl-4">
            <h4 class="font-bold">{{ props.place }} <span v-if="props.title !== undefined">| {{ props.title }}</span></h4>
            <p class="pt-0.5">{{ props.description }}</p>
            <div v-if="props.missions && props.missions.length > 0 && props.showMission" class="mt-1">
                <h4 class="font-semibold mb-0.5 text-xs">{{ pluralize($t("mission"), props.missions.length) }} : </h4>
                <div v-for="mission in props.missions" :key="mission.date" class="ml-3 text-xs">
                    <span class="font-semibold">{{ mission.enterprise}} |</span>
                    {{ mission.title}} <span class="font-semibold"> | </span>
                    <span class="italic">{{ mission.date }}</span>
                    <span class="block">{{ mission.description }} </span>
                </div>
            </div>
        </div>
    </div>
</template>