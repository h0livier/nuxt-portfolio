<script setup lang="ts">
import type { CVPrintVariant, Certification, ListOption, Place, WorkPlace } from '~/types'

interface CVProps{
    fullName: string
    educations: Place[]
    experiences: WorkPlace[]
    certifications: Certification[]
    contacts: ListOption[]
    languages: ListOption[]
    skills: ListOption[]
    variant?: CVPrintVariant
    showMissions?: boolean
    showCertifications?: boolean
    showAbout?: boolean
}
const props = defineProps<CVProps>()

const educations = props.educations
const experiences = props.experiences
const certifications = props.certifications
const contacts = props.contacts
const languages = props.languages
const skills = props.skills
const fullName = props.fullName
</script>
<template>
    <cv-ats
        v-if="props.variant === 'ats'"
        :full-name="fullName"
        :educations="educations"
        :experiences="experiences"
        :certifications="certifications"
        :contacts="contacts"
        :languages="languages"
        :skills="skills"
        :show-missions="props.showMissions"
        :show-certifications="props.showCertifications"
        :show-about="props.showAbout" />
    <cv-lined
        v-else-if="props.variant === 'lined'"
        :educations="educations"
        :experiences="experiences"
        :certifications="certifications"
        :contacts="contacts"
        :languages="languages"
        :skills="skills"
        :show-missions="props.showMissions"
        :show-certifications="props.showCertifications"
        :show-about="props.showAbout" />
    <cv-columns
        v-else
        :educations="educations"
        :experiences="experiences"
        :certifications="certifications"
        :contacts="contacts"
        :languages="languages"
        :skills="skills"
        :show-missions="props.showMissions"
        :show-certifications="props.showCertifications"
        :show-about="props.showAbout" />
</template>