<script setup lang="ts">
import type { ListOption, Place, WorkPlace } from '~/types'

interface CVProps{
    fullName?: string
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
    <div class="hidden print:block bg-white text-black p-4 text-[11px] leading-snug">
        <div class="flex gap-5">
            <div class="grow-2">
                <p><img src="../../assets/picture.jpg" alt="picture" class="rounded-lg max-w-[100px]" /></p>
                <div class="mt-3 p-1">
                    <h3 class="text-sm font-bold border-b pb-0.5">{{ $t('contactTitle') }}</h3>
                    <div v-for="contact in contacts" class="pt-1">
                        <p class="font-bold">{{ contact.name }}</p>
                        <p>{{ contact.value }}</p>
                    </div>
                    <h3 class="text-sm font-bold pt-2 border-b pb-0.5">{{ $t('education') }}</h3>
                    <div v-for="education in educations" class="pt-1">
                        <p class="text-xs italic">{{ education.date }}</p>
                        <p class="font-bold">{{ education.name }}</p>
                        <p class="text-[10px]">{{ education.description }}</p>
                    </div>
                    <h3 class="text-sm font-bold pt-2 border-b pb-0.5">{{ $t('languagesTitle') }}</h3>
                    <div v-for="language in languages" class="pt-1 flex justify-between">
                        <p>{{ language.name }}</p>
                        <p>{{ language.value }}</p>
                    </div>
                </div>
            </div>
            <div class="grow-3 ps-5">
                <h1 class="text-3xl font-bold">{{ props.fullName || 'Olivier Hayot' }}</h1>
                <h2 class="text-lg pt-1 font-semibold">{{ $t("cvHeader.title") }}</h2>
                <p class="pt-1.5 text-xs">{{ $t("cvHeader.description") }}</p>
                <div class="pt-3">
                    <h3 class="text-sm font-bold border-b pb-0.5">{{ $t('workExperience') }}</h3>
                    <div class="pt-2" v-for="experience in experiences">
                        <p class="text-xs font-bold">{{ experience.date }}</p>
                        <p class="italic">{{ experience.name }}</p>
                        <p class="font-bold pt-0.5 pb-0.5">{{ experience.title }}</p>
                        <p class="text-xs">{{ experience.description }}</p>
                    </div>
                </div>
                <div class="pt-3">
                    <h3 class="text-sm font-bold border-b pb-0.5">{{ $t('skills') }}</h3>
                    <div class="pt-1.5" v-for="skill in skills">
                        <p class="font-bold">{{ skill.name }}</p>
                        <p class="text-xs">{{ skill.value }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>