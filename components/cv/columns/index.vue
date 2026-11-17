<script setup lang="ts">
import type { Certification, ListOption, Place, WorkPlace } from '~/types'
import { toRefs } from 'vue'

interface CVProps {
	educations: Place[]
	experiences: WorkPlace[]
	certifications: Certification[]
	contacts: ListOption[]
	languages: ListOption[]
	skills: ListOption[]
	showMissions?: boolean
	showCertifications?: boolean
	showAbout?: boolean
}

const props = defineProps<CVProps>()

const { educations, experiences, certifications, contacts, languages, skills } = toRefs(props)
</script>

<template>
	<div class="hidden print:block flex-col bg-white text-black mx-auto overflow-hidden text-[12px] leading-tight">
		<cv-columns-header />
		<div class="flex">
			<cv-columns-sidebar
				:contacts="contacts"
				:languages="languages"
				:skills="skills" />
			<cv-columns-content
				:educations="educations"
				:experiences="experiences"
				:certifications="certifications"
				:show-missions="props.showMissions"
				:show-certifications="props.showCertifications"
				:show-about="props.showAbout" />
		</div>
	</div>
</template>
