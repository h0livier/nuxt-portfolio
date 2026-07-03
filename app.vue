<script setup lang="ts">
import { useAppInsights } from './helpers/appinsight'

const appInsights = useAppInsights();
appInsights.trackPageView('HomePage', '/');
appInsights.trackTrace('Application has started successfully.');

useHead({
  title: 'Olivier Hayot - Analyst Developer',
  meta: [
    { name: 'description', content: "Portfolio d'Olivier Hayot, développeur web full stack spécialisé en React.js, .NET Core, Vue.js et outils d'automatisation PowerShell. Olivier Hayot's personnal Portfolio" }
  ],
  link: [
    { rel: 'canonical', href: 'https://olivier.hayot.cloud'}
  ]
})
</script>
<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
