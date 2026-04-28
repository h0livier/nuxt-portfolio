<script setup lang="ts">
import type { Certification, ListOption, Place, WorkPlace } from '~/types'

interface CVProps {
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
const languages = props.languages
const skills = props.skills
</script>

<template>
	<div class="hidden print:block flex-col bg-white text-black mx-auto overflow-hidden text-[14px] leading-tight">
		<cv-columns-header />
		<div class="flex">
			<cv-columns-sidebar
				:contacts="contacts"
				:languages="languages"
				:skills="skills" />
			<cv-columns-content
				:educations="educations"
				:experiences="experiences"
				:certifications="certifications" />
		</div>
	</div>
</template>
