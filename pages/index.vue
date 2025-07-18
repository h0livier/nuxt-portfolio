<script setup lang="ts">
import type { Place, WorkPlace } from '~/types'

const experiences: WorkPlace[] = [
    { name: 'Wavenet', description: "Développement et maintenance d'applications Web.", date: "Depuis mars 2022", title: 'Analyste développeur .NET' },
    { name: 'Easi', description: "Développement et maintenance d'outils visant à améliorer et simplifier la gestion du cloud SaaS d'Adfinity. Création d'applications spécifiques web et desktop", date: "Septembre 2022 - Mars 2024", title: 'Software Developer | DevOps' },
    { name: 'Université Libre de Bruxelles', description: "Développements orientés technologies Web, améliorations d'intranet, extranet, bases de données, outils existants concernant la gestion et la valorisation de la Recherche menée au sein de l'Université.", date: "Février 2022 - Mai 2022", title: 'Développeur Web Stagiaire' },
]
const educations: Place[] = [
    { name: 'Haute école en Hainaut', description: "Bachelier en Informatique et Systèmes orientation télécommunications et réseaux", date: "2019 - 2022" }
]

</script>
<template>
    <div class="flex justify-center">
        <Cv :experiences="experiences" :educations="educations" />
        <div class="min-h-screen print:hidden max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[50vw]">
            <p class="mt-20"><a href="mailto:olivier.hayot.dev@gmail.com">olivier.hayot.dev@gmail.com</a></p>
            <div class="hero min-h-[80vh]">
                <div class="hero-content lg:place-self-start lg:self-center flex-col lg:flex-row">
                    <img src="../assets/picture.jpg"
                    alt="Développeur web full stack Olivier Hayot spécialisé Next.js .NET"
                    class="max-w-[275px] rounded-lg shadow-2xl lg:me-10" />
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Hi, I'm Olivier 👋</h1>
                        <p class="py-6">
                            Full Stack Web Developer with {{ new Date().getFullYear() - new Date(2022, 9, 22).getFullYear() }} years of web experience. 
                        </p>
                        <PrintButton></PrintButton>
                    </div>
                </div>
            </div>
            <div class="my-2">
                <h2 class="text-2xl mb-5">What drives me</h2>
                <div class="flex flex-col gap-4 lg:flex-row lg:gap-8">
                    <div class="grow card bg-base-300">
                        <div class="card-body">
                            <p class="text-xl"><b>Solving Problems</b></p>
                            <p>I enjoy building user-friendly and efficient web applications that solve real problems.</p>
                        </div>
                    </div>
                    <div class="grow card bg-base-300">
                        <div class="card-body">
                            <p  class="text-xl"><b>Automation & Creating Tools</b></p>
                            <p>Turning small ideas into practical solutions is what keeps me curious and motivated.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Timeline :experiences="experiences" :educations="educations" />
            <div class="flex flex-col items-center gap-5 my-16">
                <h2 class="text-3xl">Want to get in touch ?</h2>
                <p class=" text-xl">Reach out via the social links below.</p>
                <p class="flex gap-4">
                    <NuxtLink href="https://github.com/h0livier">github</NuxtLink>
                    <NuxtLink href="https://www.linkedin.com/in/olivier-hayot/">linkedin</NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>