<script setup lang="ts">
import type { CVPrintVariant } from '~/types'
import { reactive, ref } from 'vue'
import { useProfileData } from '~/services/useProfileData'
import Fade from '~/components/animation/fade.vue'
import Defiling from '~/components/animation/defiling.vue'
const {experiences, educations, certifications, contacts, languages, skills, transverseSkills, skillsWithImages, skillsWithImagesReverse} = useProfileData()
const years = new Date().getFullYear() - new Date(2022, 9, 22).getFullYear()
const cvVariant = ref<CVPrintVariant>('squared')
const cvPrintOptions = reactive({
    showMissions: true,
    showCertifications: true,
    showAbout: true,
})
</script>
<template >
    <Cv :experiences="experiences" :educations="educations" :certifications="certifications" :contacts="contacts" :languages="languages" :skills="skills" :variant="cvVariant" :show-missions="cvPrintOptions.showMissions" :show-certifications="cvPrintOptions.showCertifications" :show-about="cvPrintOptions.showAbout" />
    <div data-theme="default" class="flex justify-center bg-base-100">
        <div class="min-h-screen print:hidden max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[50vw] xxl:max-w-[40vw]  2xl:max-w-[35vw]">
            <div class="flex justify-between mt-10 lg:mt-20 mb-10">
                <p><a href="mailto:olivier.hayot.dev@gmail.com">olivier.hayot.dev@gmail.com</a></p>
                <LanguageSwitch />
            </div>
            <Fade>
                <div class="hero min-h-[80vh]">
                    <div class="hero-content lg:place-self-start lg:self-center flex-col lg:flex-row">
                        <img src="../assets/picture.jpg"
                            alt="Développeur web full stack Olivier Hayot spécialisé Next.js .NET"
                            class="max-w-50 lg:max-w-68.75 rounded-lg shadow-2xl lg:me-10" />
                        <div class="max-w-md">
                            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
                                {{ $t('welcome') }}
                                <span class="text-rotate duration-10000">
                                    <span>
                                        <span><b>Olivier 👋</b></span>
                                        <span><b>FullStack Developer</b></span>
                                        <span><b>DevOps Enthusiast</b></span>
                                    </span> 
                                </span>
                            </h1>
                            <div class="py-6 text-justify">
                                {{ $t("presentation_1").replace("%YEARS%", years.toString()) }}
                                <br /> <span class="mt-4">{{ $t("presentation_2") }}</span>
                            </div>
                            <PrintButton :variant="cvVariant" :show-missions="cvPrintOptions.showMissions" :show-certifications="cvPrintOptions.showCertifications" :show-about="cvPrintOptions.showAbout" @update:variant="cvVariant = $event" @update:showMissions="cvPrintOptions.showMissions = $event" @update:showCertifications="cvPrintOptions.showCertifications = $event" @update:showAbout="cvPrintOptions.showAbout = $event"></PrintButton>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade>
                <div class="mt-[10vh] md:my-16">
                    <h2 class="text-2xl mb-5">{{ $t("transverseSkillsTitle") }}</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4">
                        <div v-for="(skill, index) in transverseSkills" :key="skill.name" class="grow card bg-base-300 shadow-md">
                            <div class="card-body">
                                <p class="text-xl">
                                    <span class="text-primary italic text-sm">0{{ index + 1 }}</span>
                                    <br />
                                    <b>{{ skill.name }}</b>
                                </p>
                                <p>{{ skill.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade>
                <Timeline :experiences="experiences" :educations="educations" />
            </Fade>
            <Fade>
                <div class="mt-[10vh] md:my-16">
                    <h2 class="text-2xl mb-5">{{ $t("certificationsTitle") }}</h2>
                    <div class="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-8">
                        <a v-for="cert in certifications" :key="cert.name"
                            :href="cert.link || undefined"
                            target="_blank" rel="noopener noreferrer"
                            class="grow card bg-base-300 transition-all cursor-pointer">
                            <div class="card-body">
                                <div class="flex flex-col-reverse items-center gap-4 md:flex-row md:items-center">
                                    <img v-if="cert.logo" :src="cert.logo" :alt="cert.name" class="w-30 h-30" />
                                    <div>
                                        <p class="text-xl font-bold">{{ cert.name }}</p>
                                        <p class="text-sm text-base-content/60 py-2">{{ cert.date }} &mdash; {{ $t("validUntil") }} {{ cert.validUntil }}</p>
                                        <p>{{ cert.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </Fade>
            <Fade>
                <div class="mt-[10vh]">
                    <h2 class="text-2xl">{{ $t("skills") }}</h2>
                    <Defiling :items="skillsWithImages" :speed="30" :reverse="false" :gap="2" />
                    <Defiling :items="skillsWithImagesReverse" :speed="30" :reverse="true" :gap="2" />
                </div>
            </Fade>
            <Fade>
                <div class="flex flex-col items-center mt-[10vh] mb-10 rounded-lg px-0 lg:px-5 py-15">
                    <h2 class="text-5xl text-center">{{ $t("getInTouchTitle") }}</h2>
                    <p class="text-center text-lg py-5">{{ $t("getInTouchText") }}</p>
                    <p class="flex gap-4">
                        <NuxtLink class="text-xl font-semibold hover:underline" href="https://github.com/h0livier"><i class="devicon-github-plain text-4xl"></i></NuxtLink>
                        <NuxtLink class="text-xl font-semibold hover:underline" href="https://www.linkedin.com/in/olivier-hayot/"><i class="devicon-linkedin-plain text-4xl"></i></NuxtLink>
                    </p>
                    <ContactForm class="w-full mt-4" />
                </div>
            </Fade>
        </div>
    </div>
</template>