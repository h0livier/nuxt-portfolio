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
    { name: 'Phone number', value: '+32 471 64 60 15' },
    { name: 'Mail', value: 'olivier.hayot.dev@gmail.com' },
    { name: 'Website', value: 'https://cv.olivierhayot.be' },
])
const languages = ref<ListOption[]>([
    { name: "French", value: 'C2' },
    { name: "English", value: 'B2' },
])
const skills = ref<ListOption[]>([
    {name: 'Web Back-end', value: '.Net Core, C#, Node.js, Typescript, Laravel, PHP'},
    {name: 'Web Front-end', value: 'HTML5, CSS3, Sass, React.js, Next.js, Typescript'},
    {name: 'Databases', value: 'MySQL, PostgreSQL, SQL Server, Cosmos DB'},
    {name: 'OS & Scripting', value: 'Windows Serveur, Powershell, Linux, bash'},
    {name: 'DevOps', value: 'Git, CI/CD, Docker, Terraform, Azure'}
])
</script>
<template>
    <cv-lined
        :educations="educations"
        :experiences="experiences"
        :contacts="contacts"
        :languages="languages"
        :skills="skills" />
</template>