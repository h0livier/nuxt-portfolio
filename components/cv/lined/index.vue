<script setup lang="ts">
import type { Certification, ListOption, Place, WorkPlace } from '~/types'

interface CVProps{
    educations: Place[]
    experiences: WorkPlace[]
    certifications: Certification[]
    contacts: ListOption[]
    languages: ListOption[]
    skills: ListOption[]
}
const props = defineProps<CVProps>()

const educations = props.educations
const experiences = props.experiences
const certifications = props.certifications
const contacts = props.contacts
const skills = props.skills // ["C#", ".Net Core", "EF Core", "XUnit/NUnit", "Blazor", "TypeScript", "Nuxt", "Vue.js", "React.js", "HTML5/CSS3", "PostgreSQL", "SQL Server", "Cosmos DB", "Docker", "Git", "Github", "CI/CD", "Powershell", "Azure", "Linux"]
</script>
<template>
    <div class="hidden print:block bg-white text-black px-5 py-4 leading-snug text-[14px]">
        <div class="text-black rounded-md">
            <div class="flex items-start">
                <p class="me-6">
                    <img src="../../../assets/picture_squared.jpg" alt="Olivier Hayot's Picture" class="rounded-lg max-w-[120px]" />
                </p>
                <div>
                    <h1 class="text-3xl">Olivier Hayot</h1>
                    <h2 class="text-xl py-1.5 font-semibold">{{ $t("cvHeader.title") }}</h2>
                    <p>
                        <span v-for="(item, index) in contacts">
                            <span class="mx-1" v-if="index !== 0"> | </span>
                            {{ item.value }}
                        </span>
                    </p>
                    <div class="flex flex-wrap gap-x-4 gap-y-1.5 pt-1.5">
                        <div v-for="item in languages">
                            <span>{{ item.name }} | </span>
                            <span class="font-bold">{{ item.value }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <cv-lined-section :title='$t("aboutMe")'>
            <p class="pt-2.5 text-sm">{{ $t("cvHeader.description") }}</p>
        </cv-lined-section>

        <cv-lined-section :title='$t("workExperience")'>
            <cv-lined-experience
                v-for="(experience, index) in experiences"
                :key="index"
                :title="experience.title"
                :place="experience.name"
                :date="experience.date"
                :description="experience.description"
                :missions="experience.missions"
                :showMission="false" />
        </cv-lined-section>
        
        <cv-lined-section :title='$t("education")'>
            <cv-lined-certification
                v-for="(certification, index) in certifications"
                :key="index"
                :certification="certification" />
            <cv-lined-experience
                v-for="(education, index) in educations"
                :key="index"
                :place="education.name"
                :date="education.date"
                :description="education.description" />
        </cv-lined-section>

        <cv-lined-section :title='$t("skills")'>
            
                <cv-lined-skills
                    v-for="(skill, index) in skills"
                    :key="index"
                    :skill="skill" />
            
        </cv-lined-section>
    </div>
</template>