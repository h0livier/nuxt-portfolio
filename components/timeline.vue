<script setup lang="ts">
import type { WorkPlace, Place } from '~/types';

interface TimeLineProps {
    educations: Place[]
    experiences: WorkPlace[]
}

const props = defineProps<TimeLineProps>()

const educations = ref(props.educations)
const experiences = ref(props.experiences)
</script>
<template>
    <h3>My Journey</h3>
    <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
        <li v-for="experience in experiences">
            <hr class="bg-blue-500" />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="timeline-end md:mb-10">
                <time class="font-mono italic">{{ experience.date }}</time>
                <div class="text-lg font-black">{{ experience.name }}</div>
                <div class="text-sm italic mb-1">{{ experience.title }}</div>
                {{ experience.description }}
            </div>
            <hr class="bg-blue-500" />
        </li>
        <li v-for="education in educations">
            <hr class="bg-blue-500" />
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="timeline-end md:mb-10">
                <time class="font-mono italic">{{ education.date }}</time>
                <div class="text-lg font-black">{{ education.name }}</div>
                {{ education.description }}
            </div>
            <hr class="bg-blue-500" />
        </li>
    </ul>
</template>