<script setup lang="ts">
import { useProfileData } from '~/services/useProfileData'
import type { Place, WorkPlace } from '~/types'

const { locale, locales, setLocale } = useI18n()
const {experiences, educations, contacts, languages} = useProfileData()

const years = new Date().getFullYear() - new Date(2022, 9, 22).getFullYear()

</script>
<template>
    <Cv :experiences="experiences" :educations="educations" :contacts="contacts" :languages="languages" />
    <div class="flex justify-center">
        <div class="min-h-screen print:hidden max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[50vw]">
            <div class="flex justify-between mt-10 lg:mt-20 mb-10">
                <p><a href="mailto:olivier.hayot.dev@gmail.com">olivier.hayot.dev@gmail.com</a></p>
                <div>
                    <button v-for="l in locales" @click="setLocale(l.code)">
                        <span v-if="l.code !== locale" > {{ l.name }}</span>
                    </button>
                </div>
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
                        <PrintButton></PrintButton>
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
            <div class="flex flex-col items-center gap-5 my-20">
                <h2 class="text-3xl">{{ $t("getInTouchTitle") }}</h2>
                <p class=" text-xl">{{ $t("getInTouchText") }}</p>
                <p class="flex gap-4">
                    <NuxtLink href="https://github.com/h0livier">Github</NuxtLink>
                    <NuxtLink href="https://www.linkedin.com/in/olivier-hayot/">Linkedin</NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>