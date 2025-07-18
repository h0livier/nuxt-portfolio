<script setup lang="ts">
import type { ListOption, Place, WorkPlace } from '~/types'

interface CVProps{
    educations: Place[]
    experiences: WorkPlace[]
}
const props = defineProps<CVProps>()

const educations = props.educations
const experiences = props.experiences
const contacts = ref<ListOption[]>([
    { name: 'Phone number', value: '+32471646015' },
    { name: 'Mail', value: 'olivier.hayot.dev@gmail.com' },
    { name: 'Website', value: 'https://olivier.hayot.cloud' },
])
const languages = ref<ListOption[]>([
    { name: "French", value: 'C2' },
    { name: "English", value: 'B2' },
])
</script>
<template>
    <div class="hidden print:block">
        <div class="flex">
            <div>
                <h3 class="text-xl">Contacts</h3>
                <div v-for="contact in contacts">
                    <p class="font-bold">{{ contact.name }}</p>
                    <p>{{ contact.value }}</p>
                </div>
                <h3>Education</h3>
                <div v-for="education in educations">
                    <p>{{ education.date }}</p>
                    <p>{{ education.name }}</p>
                    <p>{{ education.description }}</p>
                </div>
                <h3>Langues</h3>
                <div v-for="language in languages">
                    <p>{{ language.name }}</p>
                    <p>{{ language.value }}</p>
                </div>
            </div>
            <div>
                <h1>Olivier Hayot</h1>
                <h2>.NET Analyst Developer</h2>
                <p>IT enthusiast passionate about programming and the world of DevOps. My curiosity has led me to explore various programming languages as well as automation and infrastructure management tools. I particularly enjoy technical challenges and finding efficient solutions to optimize development processes.</p>
                <div>
                    <h3>Expériences</h3>
                    <div v-for="experience in experiences">
                        <p>{{ experience.date }}</p>
                        <p>{{ experience.name }}</p>
                        <p>{{ experience.title }}</p>
                        <p>{{ experience.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>