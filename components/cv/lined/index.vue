<script setup lang="ts">
import type { ListOption, Place, WorkPlace } from '~/types'

interface CVProps{
    educations: Place[]
    experiences: WorkPlace[]
    contacts: ListOption[]
    languages: ListOption[]
}
const props = defineProps<CVProps>()

const educations = props.educations
const experiences = props.experiences
const contacts = props.contacts
const skills = ["C#", ".Net Core", "EF Core", "XUnit/NUnit", "Blazor", "TypeScript", "Nuxt", "Vue.js", "React.js", "HTML5/CSS3", "PostgreSQL", "SQL Server", "Cosmos DB", "Docker", "Git", "Github", "CI/CD", "Powershell", "Azure", "Linux"]
</script>
<template>
    <div class="hidden print:block bg-white text-black min-h-[100dvh]">
        <div class="print:bg-slate-800 text-white p-5 w-[100vw] rounded-md">
            <div class="flex">
                <p class=" me-7">
                    <img src="../../../assets/picture_squared.jpg" alt="Olivier Hayot's Picture" class="rounded-lg max-w-[150px]" />
                </p>
                <div>
                    <h1 class="text-4xl">Olivier Hayot</h1>
                    <h2 class="text-3xl py-2">.NET Analyst Developer</h2>
                    <p class="text-md">
                        <span v-for="(item, index) in contacts">
                            <span class="mx-1" v-if="index !== 0"> | </span>
                            {{ item.value }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        
        <cv-lined-section title="About Me">
            <p class="pt-3 text-sm">IT enthusiast passionate about programming and the world of DevOps. My curiosity has led me to explore various programming languages as well as automation and infrastructure management tools. I particularly enjoy technical challenges and finding efficient solutions to optimize development processes.</p>
        </cv-lined-section>

        <cv-lined-section title="Work Experience">
            <cv-lined-experience
                v-for="(experience, index) in experiences"
                :key="index"
                :title="experience.title"
                :place="experience.name"
                :date="experience.date"
                :description="experience.description" />
        </cv-lined-section>
        
        <cv-lined-section title="Education">
            <cv-lined-experience
                v-for="(education, index) in educations"
                :key="index"
                :place="education.name"
                :date="education.date"
                :description="education.description" />
        </cv-lined-section>

        <cv-lined-section title="Skills">
            <div className="grid grid-cols-5 grid-rows-4 gap-4">
                <div v-for="item in skills" class="flex justify-start items-center">
                    <span class="text-sm font-semibold">{{ item }}</span>
                </div>
            </div>
        </cv-lined-section>

        <cv-lined-section title="Languages">
            <div v-for="item in languages" className="flex justify-between">
                <span>{{ item.name }}</span>
                <span class="font-bold">{{ item.value }}</span>
            </div>
        </cv-lined-section>
    </div>
</template>