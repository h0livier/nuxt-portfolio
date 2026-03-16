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
    <cv-lined
        :educations="educations"
        :experiences="experiences"
        :contacts="contacts"
        :languages="languages"
        :skills="skills" />
</template>