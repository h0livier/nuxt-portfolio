<script setup lang="ts">
import type { Place, WorkPlace } from '~/types'

const experiences: WorkPlace[] = [
    { name: 'Wavenet', description: "Building and maintaining robust web applications with .NET Core, TypeScript (React/Next.js), and Azure. Focusing on scalability, performance, and clean code.", date: "Since march 2022", title: '.NET Analyst Developer' },
    { name: 'Easi', description: "Development and maintenance of tools aimed at improving and simplifying the management of Adfinity's SaaS cloud. Built tailored web and desktop applications to meet specific business needs.", date: "September 2022 - March 2024", title: 'Software Developer | DevOps' },
    { name: 'Free University of Brusells', description: "Focused on web technologies to enhance intranet, extranet, databases, and internal tools supporting the management and promotion of research activities within the University.", date: "February 2022 - May 2022", title: 'Web Developer Intern' },
]
const educations: Place[] = [
    { name: 'Haute école en Hainaut', description: "Bachelor’s Degree in Computer Science and Systems, specializing in Telecommunications and Networks", date: "2019 - 2022" }
]

</script>
<template>
    <Cv :experiences="experiences" :educations="educations" />
    <div class="flex justify-center">
        <div class="min-h-screen print:hidden max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[50vw]">
            <p class="mt-10 lg:mt-20 mb-10"><a href="mailto:olivier.hayot.dev@gmail.com">olivier.hayot.dev@gmail.com</a></p>
            <div class="hero min-h-[80vh]">
                <div class="hero-content lg:place-self-start lg:self-center flex-col lg:flex-row">
                    <img src="../assets/picture.jpg"
                        alt="Développeur web full stack Olivier Hayot spécialisé Next.js .NET"
                        class="max-w-[200px] lg:max-w-[275px] rounded-lg shadow-2xl lg:me-10" />
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Hi, I'm Olivier 👋</h1>
                        <div class="py-6 text-justify">
                            I'm a Software Developer with hands-on experience in full-stack web development for over  {{ new Date().getFullYear() - new Date(2022, 9, 22).getFullYear() }} years
                            My current stack includes <div class="badge badge-soft badge-primary">TypeScript</div> with Next.js or Nuxt on the front end, and <div class="badge badge-soft badge-primary">.NET Core</div> on the back end.
                            <br />In my free time, I enjoy socializing with friends over a drink and tinkering with my home automation setup.
                        </div>
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
            <div class="flex flex-col items-center gap-5 my-20">
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