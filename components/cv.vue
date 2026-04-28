<script setup lang="ts">
import type { CVPrintVariant, Certification, ListOption, Place, WorkPlace } from '~/types'

interface CVProps{
    educations: Place[]
    experiences: WorkPlace[]
    certifications: Certification[]
    contacts: ListOption[]
    languages: ListOption[]
    skills: ListOption[]
    variant?: CVPrintVariant
}
const props = defineProps<CVProps>()

const educations = props.educations
const experiences = props.experiences
const certifications = props.certifications
const contacts = props.contacts
const languages = props.languages
const skills = props.skills
</script>
<template>
    <cv-lined
        v-if="props.variant === 'lined'"
        :educations="educations"
        :experiences="experiences"
        :certifications="certifications"
        :contacts="contacts"
        :languages="languages"
        :skills="skills" />
    <cv-columns
        v-else
        :educations="educations"
        :experiences="experiences"
        :certifications="certifications"
        :contacts="contacts"
        :languages="languages"
        :skills="skills" />
</template>