<script setup lang="ts">
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({ config: {
  connectionString: 'InstrumentationKey=aac73a8b-510f-4525-843a-e54cbbbe14eb;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/;ApplicationId=7af01294-4236-42da-ac72-6850cb146164'
}});

appInsights.loadAppInsights();
appInsights.startTrackPage('HomePage');
appInsights.trackPageView({ name: 'HomePage', uri: '/' });
appInsights.trackTrace({ message: 'Application has started successfully.' });

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
  <NuxtPage />
</template>
