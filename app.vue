<script setup lang="ts">
import { useAppInsights } from './helpers/appinsight'

const appInsights = useAppInsights();
appInsights.trackPageView('HomePage', '/');
appInsights.trackTrace('Application has started successfully.');

const article = {
  title: 'Olivier Hayot - Full Stack .NET Developer',
  description: 'Portfolio of Olivier Hayot, a full stack .NET developer specializing in ASP.NET Core, Vue.js, and Blazor. Based in Soignies, Belgium.',
  image: 'http://www.olivierhayot.be/assets/assets/picture.jpg',
  author: 'Olivier Hayot'
}

useHead({
  title: article.title,
  meta: [
    { name: 'description', content: article.description },
    { name: 'keywords', content: '.NET, C#, Vue.js, Blazor, ASP.NET Core, Full Stack Developer, TypeScript, Azure, DevOps, Terraform, Soignies' }
  ],
  link: [
    { rel: 'canonical', href: 'https://olivier.hayot.cloud'},
    { rel: 'canonical', href: 'https://cv.olivierhayot.be'},
    { rel: 'canonical', href: 'https://www.olivierhayot.be'},
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' }
  ]
})

useSeoMeta({
  // SEO classique
  title: article.title,
  description: article.description,
  applicationName: 'Olivier Hayot Portfolio',
  author: article.author,
  creator: article.author,
  publisher: article.author,
  generator: 'Nuxt 4',
  robots: 'index, follow, max-snippet:-1',
  referrer: 'strict-origin-when-cross-origin',

  // Open Graph
  ogTitle: article.title,
  ogDescription: article.description,
  ogImage: article.image,
  ogType: 'website',
  ogSiteName: 'Olivier Hayot',
  ogUrl: 'https://olivier.hayot.cloud',
})
</script>
<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
