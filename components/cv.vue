<script setup lang="ts">
import type { CVPrintVariant, Certification, ListOption, Place, WorkPlace } from '~/types'
import { computed } from 'vue'

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
const variant = computed<CVPrintVariant>(() => {
    return props.variant === 'ats' || props.variant === 'lined' || props.variant === 'squared'
        ? props.variant
        : 'squared'
})
</script>
<template>
    <cv-ats
        v-if="variant === 'ats'"
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
        v-else-if="variant === 'lined'"
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