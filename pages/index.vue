<script setup lang="ts">
import type { CVPrintVariant } from '~/types'
import LinkedinMain from '~/components/linkedin/Main.vue'
import { reactive, ref } from 'vue'
import { useProfileData } from '~/services/useProfileData'
const {fullName, experiences, educations, certifications, contacts, contactHeader, languages, skills, transverseSkills, skillsWithImages, skillsWithImagesReverse} = useProfileData()
const cvVariant = ref<CVPrintVariant>('squared')
const cvPrintOptions = reactive({
    showMissions: true,
    showCertifications: true,
    showAbout: true,
})

function contactHref(value: string): string | undefined {
    if (value.includes('@')) return `mailto:${value}`
    if (value.startsWith('+')) return `tel:${value}`
    if (value.startsWith('http')) return value
    return undefined
}
</script>
<template>
    <Cv :full-name="fullName" :experiences="experiences" :educations="educations" :certifications="certifications" :contacts="contacts" :languages="languages" :skills="skills" :variant="cvVariant" :show-missions="cvPrintOptions.showMissions" :show-certifications="cvPrintOptions.showCertifications" :show-about="cvPrintOptions.showAbout" />

    <div data-theme="default" class="min-h-screen bg-base-200 print:hidden" id="main-content">
        <div class="max-w-5xl mx-auto px-3 pt-[12.5vh] md:pt-[17.5vh] lg:pt-[25vh] pb-6">
            <!-- Profile card (LinkedIn banner + avatar + headline) -->
            <Fade>
                <div class="card bg-base-100 shadow overflow-hidden">
                    <!-- Banner -->
                    <div class="h-40 bg-gradient-to-r from-primary/40 to-secondary/40"></div>
                    <div class="px-5 pb-5">
                        <!-- Avatar overlapping the banner -->
                        <div class="-mt-26 mb-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                            <img
                                src="../assets/picture.jpg"
                                alt="Développeur web full stack Olivier Hayot spécialisé Next.js .NET"
                                class="w-50 h-50 rounded-full border-4 border-base-100 object-cover shadow-lg"
                            />
                            <div class="flex gap-2 flex-wrap justify-end">
                                <LanguageSwitch />
                            </div>
                        </div>
                        <h1 class="text-2xl font-bold leading-tight">{{ fullName }}</h1>
                        <p class="text-base-content/70 mt-0.5">{{ $t('cvHeader.title') }}</p>
                        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-base-content/60">
                            <template v-for="contact in contactHeader" :key="contact.name">
                                <a
                                    v-if="contactHref(contact.value)"
                                    :href="contactHref(contact.value)"
                                    :target="contact.value.startsWith('http') ? '_blank' : undefined"
                                    rel="noopener noreferrer"
                                    class="hover:text-primary transition-colors"
                                >{{ contact.value }}</a>
                                <span v-else>{{ contact.value }}</span>
                            </template>
                        </div>
                        <div class="mt-3 flex gap-3 items-center">
                            <PrintButton
                                :variant="cvVariant"
                                :show-missions="cvPrintOptions.showMissions"
                                :show-certifications="cvPrintOptions.showCertifications"
                                :show-about="cvPrintOptions.showAbout"
                                @update:variant="cvVariant = $event"
                                @update:showMissions="cvPrintOptions.showMissions = $event"
                                @update:showCertifications="cvPrintOptions.showCertifications = $event"
                                @update:showAbout="cvPrintOptions.showAbout = $event"
                            />
                            <NuxtLink href="https://github.com/h0livier" target="_blank" rel="noopener noreferrer">
                                <i class="devicon-github-plain text-2xl hover:text-primary transition-colors"></i>
                            </NuxtLink>
                            <NuxtLink href="https://www.linkedin.com/in/olivier-hayot/" target="_blank" rel="noopener noreferrer">
                                <i class="devicon-linkedin-plain text-2xl hover:text-primary transition-colors"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </Fade>

            <LinkedinMain />
        </div>
        
    </div>
</template>