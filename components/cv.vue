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
</script>
<template>
    <cv-ats
        v-if="props.variant === 'ats'"
        :full-name="props.fullName"
        :educations="props.educations"
        :experiences="props.experiences"
        :certifications="props.certifications"
        :contacts="props.contacts"
        :languages="props.languages"
        :skills="props.skills"
        :show-missions="props.showMissions"
        :show-certifications="props.showCertifications"
        :show-about="props.showAbout" />
    <cv-lined
        v-else-if="props.variant === 'lined'"
        :educations="props.educations"
        :experiences="props.experiences"
        :certifications="props.certifications"
        :contacts="props.contacts"
        :languages="props.languages"
        :skills="props.skills"
        :show-missions="props.showMissions"
        :show-certifications="props.showCertifications"
        :show-about="props.showAbout" />
    <cv-columns
        v-else-if="props.variant === 'squared'"
        :educations="props.educations"
        :experiences="props.experiences"
        :certifications="props.certifications"
        :contacts="props.contacts"
        :languages="props.languages"
        :skills="props.skills"
        :show-missions="props.showMissions"
        :show-certifications="props.showCertifications"
        :show-about="props.showAbout" />
    <cv-columns
        v-else
        :educations="props.educations"
        :experiences="props.experiences"
        :certifications="props.certifications"
        :contacts="props.contacts"
        :languages="props.languages"
        :skills="props.skills"
        :show-missions="props.showMissions"
        :show-certifications="props.showCertifications"
        :show-about="props.showAbout" />
</template>