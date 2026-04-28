<script setup lang="ts">
import type { ListOption } from '~/types'

interface SidebarProps {
  contacts: ListOption[]
  languages: ListOption[]
  skills: ListOption[]
}

defineProps<SidebarProps>()
</script>

<template>
  <aside class="w-[34%] border-r border-slate-300 px-4 py-4">
    <cv-columns-section title="Contact">
      <div v-for="(contact, index) in contacts" :key="index" class="mt-2 break-words">
        <p class="font-semibold text-black">{{ contact.name }}</p>
        <p>{{ contact.value }}</p>
      </div>
    </cv-columns-section>

    <cv-columns-section :title="$t('languagesTitle')">
      <div v-for="(language, index) in languages" :key="index" class="mt-2 flex items-center justify-between">
        <p>{{ language.name }}</p>
        <p class="font-semibold">{{ language.value }}</p>
      </div>
    </cv-columns-section>

    <cv-columns-section :title="$t('skills')">
      <div v-for="(skill, index) in skills" :key="index" class="mt-2">
        <p class="font-semibold mb-1">{{ skill.name }}</p>
        <p>{{ skill.value }}</p>
      </div>
    </cv-columns-section>
  </aside>
</template>
