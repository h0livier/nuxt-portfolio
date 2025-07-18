<script setup lang="ts">
import type { ListOption, Place, WorkPlace } from '~/types'

interface CVProps{
    educations: Place[]
    experiences: WorkPlace[]
}
const props = defineProps<CVProps>()

const educations = ref(props.educations)
const experiences = ref(props.experiences)
const contacts = ref<ListOption[]>([
    { name: 'Téléphone', value: '+32471646015' },
    { name: 'Email', value: 'olivier.hayot.dev@gmail.com' },
    { name: 'Site Web', value: 'https://olivier.hayot.cloud' },
])
const languages = ref<ListOption[]>([
    { name: "Français", value: 'C2' },
    { name: "Anglais", value: 'B2' },
])
</script>
<template>
    <div class="hidden print:block">
        <div class="flex">
            <div>
                <h3 class="text-xl">Contacts</h3>
                <div v-for="contact in contacts">
                    <p class="font-bold">{{ contact.name }}</p>
                    <p>{{ contact.value }}</p>
                </div>
                <h3>Education</h3>
                <div v-for="education in educations">
                    <p>{{ education.date }}</p>
                    <p>{{ education.name }}</p>
                    <p>{{ education.description }}</p>
                </div>
                <h3>Langues</h3>
                <div v-for="language in languages">
                    <p>{{ language.name }}</p>
                    <p>{{ language.value }}</p>
                </div>
            </div>
            <div>
                <h1>Olivier Hayot</h1>
                <h2>Analyste Développeur</h2>
                <p>Informaticien passionné par la programmation et l'univers du DevOps. Ma curiosité m'a conduit à
                    explorer divers langages de programmation ainsi que des outils d'automatisation et de gestion des
                    infrastructures. J'apprécie particulièrement les défis techniques et la recherche de solutions
                    efficaces pour optimiser les processus de développement.</p>
                <div>
                    <h3>Expériences</h3>
                    <div v-for="experience in experiences">
                        <p>{{ experience.date }}</p>
                        <p>{{ experience.name }}</p>
                        <p>{{ experience.title }}</p>
                        <p>{{ experience.description }}</p>
                    </div>
                    <h4>Compétences</h4>
                </div>
            </div>
        </div>
    </div>
</template>