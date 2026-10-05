<script setup lang="ts">
import type { CVPrintVariant } from '~/types'
import { reactive, ref } from 'vue'
import { useProfileData } from '~/services/useProfileData'
import Fade from '~/components/animation/fade.vue'
import Defiling from '~/components/animation/defiling.vue'
const {fullName, experiences, educations, certifications, contacts, languages, skills, transverseSkills, skillsWithImages, skillsWithImagesReverse} = useProfileData()
const years = new Date().getFullYear() - new Date(2022, 9, 22).getFullYear()
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
        <!-- Top bar -->
        <div class="flex justify-end items-center px-4 py-2 bg-base-100 border-b border-base-300">
            <LanguageSwitch />
        </div>

        <div class="max-w-5xl mx-auto px-3 py-6 space-y-4">

            <!-- Profile card (LinkedIn banner + avatar + headline) -->
            <Fade>
                <div class="card bg-base-100 shadow overflow-hidden">
                    <!-- Banner -->
                    <div class="h-28 bg-gradient-to-r from-primary/40 to-secondary/40"></div>
                    <div class="px-5 pb-5">
                        <!-- Avatar overlapping the banner -->
                        <div class="-mt-14 mb-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                            <img
                                src="../assets/picture.jpg"
                                alt="Développeur web full stack Olivier Hayot spécialisé Next.js .NET"
                                class="w-28 h-28 rounded-full border-4 border-base-100 object-cover shadow-lg"
                            />
                            <div class="flex gap-2 flex-wrap">
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
                            </div>
                        </div>
                        <h1 class="text-2xl font-bold leading-tight">{{ fullName }}</h1>
                        <p class="text-base-content/70 mt-0.5">{{ $t('cvHeader.title') }}</p>
                        <div class="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-base-content/60">
                            <template v-for="contact in contacts" :key="contact.name">
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
                        <div class="mt-3 flex gap-3">
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

            <!-- Main 2-column grid -->
            <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">

                <!-- Left column -->
                <div class="space-y-4">

                    <!-- About -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-2">
                                <h2 class="card-title text-lg">{{ $t('aboutMe') }}</h2>
                                <p class="text-sm text-base-content/80 leading-relaxed">
                                    {{ $t('presentation_1').replace('%YEARS%', years.toString()) }}
                                </p>
                                <p class="text-sm text-base-content/80 leading-relaxed mt-1">{{ $t('presentation_2') }}</p>
                            </div>
                        </div>
                    </Fade>

                    <!-- Contact info -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-2">
                                <h2 class="card-title text-lg">{{ $t('contactTitle') }}</h2>
                                <div v-for="contact in contacts" :key="contact.name" class="text-sm">
                                    <p class="font-semibold text-base-content/60 text-xs uppercase tracking-wide">{{ contact.name }}</p>
                                    <template v-if="contactHref(contact.value)">
                                        <a
                                            :href="contactHref(contact.value)"
                                            :target="contact.value.startsWith('http') ? '_blank' : undefined"
                                            rel="noopener noreferrer"
                                            class="text-base-content hover:text-primary transition-colors"
                                        >{{ contact.value }}</a>
                                    </template>
                                    <span v-else class="text-base-content">{{ contact.value }}</span>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <!-- Languages -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-2">
                                <h2 class="card-title text-lg">{{ $t('languagesTitle') }}</h2>
                                <div v-for="language in languages" :key="language.name" class="flex justify-between items-center text-sm">
                                    <span>{{ language.name }}</span>
                                    <span class="badge badge-primary badge-soft badge-sm">{{ language.value }}</span>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <!-- Technical Skills -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-2">
                                <h2 class="card-title text-lg">{{ $t('skills') }}</h2>
                                <div v-for="skill in skills" :key="skill.name" class="text-sm">
                                    <p class="font-semibold">{{ skill.name }}</p>
                                    <p class="text-base-content/70 text-xs">{{ skill.value }}</p>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <!-- Transverse Skills -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-2">
                                <h2 class="card-title text-lg">{{ $t('transverseSkillsTitle') }}</h2>
                                <div v-for="(skill, index) in transverseSkills" :key="skill.name" class="text-sm">
                                    <p class="font-semibold">
                                        <span class="text-primary italic text-xs">0{{ index + 1 }}</span>
                                        {{ skill.name }}
                                    </p>
                                    <p class="text-base-content/70 text-xs leading-relaxed">{{ skill.description }}</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

                <!-- Right / main column -->
                <div class="space-y-4">

                    <!-- Experience -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-3">
                                <h2 class="card-title text-lg">{{ $t('workExperience') }}</h2>
                                <Timeline :experiences="experiences" :educations="[]" />
                            </div>
                        </div>
                    </Fade>

                    <!-- Education -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-3">
                                <h2 class="card-title text-lg">{{ $t('education') }}</h2>
                                <Timeline :experiences="[]" :educations="educations" />
                            </div>
                        </div>
                    </Fade>

                    <!-- Certifications -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-3">
                                <h2 class="card-title text-lg">{{ $t('certificationsTitle') }}</h2>
                                <div class="space-y-3">
                                    <a
                                        v-for="cert in certifications"
                                        :key="cert.name"
                                        :href="cert.link || undefined"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex items-center gap-4 p-3 rounded-lg bg-base-200 hover:bg-base-300 transition-colors cursor-pointer"
                                    >
                                        <img v-if="cert.logo" :src="cert.logo" :alt="cert.name" class="w-14 h-14 shrink-0 object-contain" />
                                        <div>
                                            <p class="font-bold text-sm">{{ cert.name }}</p>
                                            <p class="text-xs text-base-content/60">{{ cert.issuer }}</p>
                                            <p class="text-xs text-base-content/50 mt-0.5">{{ cert.date }} &mdash; {{ $t('validUntil') }} {{ cert.validUntil }}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <!-- Skills carousel -->
                    <Fade>
                        <div class="card bg-base-100 shadow overflow-hidden">
                            <div class="card-body gap-2">
                                <h2 class="card-title text-lg">{{ $t('technologiesTitle') }}</h2>
                                <Defiling :items="skillsWithImages" :speed="30" :reverse="false" :gap="2" />
                                <Defiling :items="skillsWithImagesReverse" :speed="30" :reverse="true" :gap="2" />
                            </div>
                        </div>
                    </Fade>

                    <!-- Contact form -->
                    <Fade>
                        <div class="card bg-base-100 shadow">
                            <div class="card-body gap-2">
                                <h2 class="card-title text-lg">{{ $t('getInTouchTitle') }}</h2>
                                <p class="text-sm text-base-content/70">{{ $t('getInTouchText') }}</p>
                                <ContactForm class="w-full mt-2" />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
</template>