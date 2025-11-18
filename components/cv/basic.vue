<script setup lang="ts">
import type { ListOption, Place, WorkPlace } from '~/types'

interface CVProps{
    educations: Place[]
    experiences: WorkPlace[]
    contacts: ListOption[]
    languages: ListOption[]
    skills: ListOption[]
}
const props = defineProps<CVProps>()

const educations = props.educations
const experiences = props.experiences
const contacts = props.contacts
const languages = props.languages
const skills = props.skills
</script>
<template>
    <div class="hidden print:block bg-white text-black min-h-[100vh]">
        <div class="flex gap-5">
            <div class="grow-2">
                <p><img src="../../assets/picture.jpg" alt="picture" class=" rounded-lg" /></p>
                <div class="mt-5 p-2">
                    <h3 class="text-2xl border-b-1 ">Contact</h3>
                    <div v-for="contact in contacts" class="pt-1">
                        <p class="font-bold">{{ contact.name }}</p>
                        <p>{{ contact.value }}</p>
                    </div>
                    <h3 class="text-2xl pt-3 border-b-1">Education</h3>
                    <div v-for="education in educations" class="pt-1">
                        <p class="text-sm italic">{{ education.date }}</p>
                        <p class="font-bold">{{ education.name }}</p>
                        <p class="text-xs">{{ education.description }}</p>
                    </div>
                    <h3 class="text-2xl pt-3 border-b-1">Languages</h3>
                    <div v-for="language in languages" class="pt-1 flex justify-between">
                        <p>{{ language.name }}</p>
                        <p>{{ language.value }}</p>
                    </div>
                </div>
            </div>
            <div class="grow-3 ps-5">
                <h1 class="text-5xl">Olivier Hayot</h1>
                <h2 class="text-3xl pt-2">.NET Analyst Developer</h2>
                <p class="pt-3 text-sm">IT enthusiast passionate about programming and the world of DevOps. My curiosity has led me to explore various programming languages as well as automation and infrastructure management tools. I particularly enjoy technical challenges and finding efficient solutions to optimize development processes.</p>
                <div class="pt-5">
                    <h3 class="text-2xl border-b-1">Experiences</h3>
                    <div class="pt-4" v-for="experience in experiences">
                        <p class="text-sm font-bold">{{ experience.date }}</p>
                        <p class="italic">{{ experience.name }}</p>
                        <p class="font-bold pt-1 pb-1">{{ experience.title }}</p>
                        <p class="text-sm">{{ experience.description }}</p>
                    </div>
                </div>
                <div class="pt-5">
                    <h3 class="text-2xl border-b-1">Skills</h3>
                    <div class="pt-2" v-for="skill in skills">
                        <p class="font-bold">{{ skill.name }}</p>
                        <p>{{ skill.value }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>