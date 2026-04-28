<script setup lang="ts">
import type { CVPrintVariant } from '~/types'
import { ref } from 'vue'
import { useProfileData } from '~/services/useProfileData'
const {experiences, educations, certifications, contacts, languages, skills} = useProfileData()
const years = new Date().getFullYear() - new Date(2022, 9, 22).getFullYear()
const cvVariant = ref<CVPrintVariant>('squared')
</script>
<template>
    <Cv :experiences="experiences" :educations="educations" :certifications="certifications" :contacts="contacts" :languages="languages" :skills="skills" :variant="cvVariant" />
    <div class="flex justify-center">
        <div class="min-h-screen print:hidden max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[50vw]">
            <div class="flex justify-between mt-10 lg:mt-20 mb-10">
                <p><a href="mailto:olivier.hayot.dev@gmail.com">olivier.hayot.dev@gmail.com</a></p>
                <LanguageSwitch />
            </div>
            <div class="hero min-h-[80vh]">
                <div class="hero-content lg:place-self-start lg:self-center flex-col lg:flex-row">
                    <img src="../assets/picture.jpg"
                        alt="Développeur web full stack Olivier Hayot spécialisé Next.js .NET"
                        class="max-w-[200px] lg:max-w-[275px] rounded-lg shadow-2xl lg:me-10" />
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">{{ $t('welcome') }}<b>Olivier</b>👋</h1>
                        <div class="py-6 text-justify">
                            {{ $t("presentation_1").replace("%YEARS%", years.toString()) }}
                            {{ $t("presentation_2") }}
                            <br />{{ $t("presentation_3") }}
                        </div>
                        <PrintButton :variant="cvVariant" @update:variant="cvVariant = $event"></PrintButton>
                    </div>
                </div>
            </div>
            <div class="mt-[10vh] md:my-2">
                <h2 class="text-2xl mb-5">{{ $t("drivesMe") }}</h2>
                <div class="flex flex-col gap-4 lg:flex-row lg:gap-8">
                    <div class="grow card bg-base-200 shadow-md">
                        <div class="card-body">
                            <p class="text-xl"><b>{{ $t("firstMotivationTitle") }}</b></p>
                            <p>{{ $t("firstMotivationText") }}</p>
                        </div>
                    </div>
                    <div class="grow card bg-base-200 shadow-md">
                        <div class="card-body">
                            <p  class="text-xl"><b>{{ $t("secondMotivationTitle") }}</b></p>
                            <p>{{ $t("secondMotivationText") }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Timeline :experiences="experiences" :educations="educations" />
            <div class="mt-[10vh] md:my-16">
                <h2 class="text-2xl mb-5">{{ $t("certificationsTitle") }}</h2>
                <div class="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-8">
                    <a v-for="cert in certifications" :key="cert.name"
                        :href="cert.link || undefined"
                        target="_blank" rel="noopener noreferrer"
                        class="grow card bg-base-100 transition-all hover:bg-base-200 cursor-pointer">
                        <div class="card-body">
                            <div class="flex flex-col-reverse items-center gap-4 md:flex-row md:items-center">
                                <img v-if="cert.logo" :src="cert.logo" :alt="cert.name" class="w-30 h-30 object-contain" />
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
            <div class="flex flex-col items-center gap-5 my-20">
                <h2 class="text-3xl">{{ $t("getInTouchTitle") }}</h2>
                <p class="text-center text-xl">{{ $t("getInTouchText") }}</p>
                <p class="flex gap-4">
                    <NuxtLink href="https://github.com/h0livier">Github</NuxtLink>
                    <NuxtLink href="https://www.linkedin.com/in/olivier-hayot/">Linkedin</NuxtLink>
                </p>
                <!--<ContactForm class="w-full mt-4" />-->
            </div>
        </div>
    </div>
</template>