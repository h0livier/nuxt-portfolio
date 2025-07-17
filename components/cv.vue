<script setup lang="ts">
interface ListOption {
    name: string
    value: string
}
interface Place {
    name: string
    description: string
    date: string
}
interface WorkPlace extends Place {
    title: string
}

const contacts = ref<ListOption[]>([
    { name: 'Téléphone', value: '+32471646015' },
    { name: 'Email', value: 'olivier.hayot.dev@gmail.com' },
    { name: 'Site Web', value: 'https://olivier.hayot.cloud' },
])
const educations = ref<Place[]>([
    { name: 'Haute école en Hainaut', description: "Bachelier en Informatique et Systèmes orientation télécommunications et réseaux", date: "2019 - 2020" }
])
const languages = ref<ListOption[]>([
    { name: "Français", value: 'C2' },
    { name: "Anglais", value: 'B2' },
])
const experiences = ref<WorkPlace[]>([
    { name: 'Wavenet', description: "Développement et maintenance d'applications Web.", date: "Depuis mars 2022", title: 'Analyste développeur .NET' },
    { name: 'Easi', description: "Développement et maintenance d'outils visant à améliorer et simplifier la gestion du cloud SaaS d'Adfinity. Création d'applications spécifiques web et desktop", date: "Septembre 2022 - Mars 2024", title: 'Software Developer | DevOps' },
    { name: 'Université Libre de Bruxelles', description: "Développements orientés technologies Web, améliorations d'intranet, extranet, bases de données, outils existants concernant la gestion et la valorisation de la Recherche menée au sein de l'Université.", date: "Février 2022 - Mai 2022", title: 'Développeur Web Stagiaire' },
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