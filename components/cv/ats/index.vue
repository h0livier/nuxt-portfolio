<script setup lang="ts">
import { pluralize } from '~/helpers/string'
import type { Certification, ListOption, Place, WorkPlace } from '~/types'

interface CVProps {
  fullName: string
  educations: Place[]
  experiences: WorkPlace[]
  certifications: Certification[]
  contacts: ListOption[]
  languages: ListOption[]
  skills: ListOption[]
  showMissions?: boolean
  showCertifications?: boolean
  showAbout?: boolean
}

const props = defineProps<CVProps>()
</script>

<template>
  <div class="hidden print:block bg-white px-6 py-5 text-[11px] leading-snug text-black">
    <header>
      <h1 class="text-3xl font-bold">{{ props.fullName }}</h1>
      <h2 class="mt-1 text-lg font-semibold">{{ $t('cvHeader.title') }}</h2>
      <p class="mt-2 break-words">
        <span v-for="(contact, index) in props.contacts" :key="`${contact.name}-${contact.value}`">
          <span v-if="index > 0"> | </span>
          {{ contact.value }}
        </span>
      </p>
      <p class="mt-1">
        <span v-for="(language, index) in props.languages" :key="`${language.name}-${language.value}`">
          <span v-if="index > 0"> | </span>
          {{ language.name }}: {{ language.value }}
        </span>
      </p>
    </header>

    <cv-ats-section v-if="props.showAbout !== false" :title="$t('aboutMe')">
      <p>{{ $t('cvHeader.description') }}</p>
    </cv-ats-section>

    <cv-ats-section :title="$t('workExperience')">
      <article v-for="experience in props.experiences" :key="`${experience.name}-${experience.date}-${experience.title}`" class="mt-4 first:mt-0 break-inside-avoid">
        <div class="flex items-baseline justify-between gap-3">
          <h4 class="font-bold">{{ experience.title }}</h4>
          <p class="text-right italic">{{ experience.date }}</p>
        </div>
        <p class="font-semibold">{{ experience.name }}</p>
        <p class="mt-1">{{ experience.description }}</p>
        <p v-if="experience.skills?.length" class="mt-1">
          <span class="font-semibold">{{ $t('skills') }}:</span>
          {{ experience.skills.join(', ') }}
        </p>

        <div v-if="props.showMissions !== false && experience.missions?.length" class="mt-2">
          <p class="font-semibold">{{ pluralize($t('mission'), experience.missions.length) }}:</p>
          <div v-for="mission in experience.missions" :key="`${experience.name}-${mission.date}`" class="mt-2 pl-3">
            <div class="flex items-baseline justify-between gap-3">
              <p class="font-semibold">{{ mission.enterprise }} | {{ mission.title }}</p>
              <p class="text-right italic">{{ mission.date }}</p>
            </div>
            <p>{{ mission.description }}</p>
            <p v-if="mission.skills?.length" class="mt-1">
              <span class="font-semibold">{{ $t('skills') }}:</span>
              {{ mission.skills.join(', ') }}
            </p>
          </div>
        </div>
      </article>
    </cv-ats-section>

    <cv-ats-section v-if="props.showCertifications !== false" :title="$t('certificationsTitle')">
      <article v-for="certification in props.certifications" :key="`${certification.name}-${certification.date}`" class="mt-3 first:mt-0 break-inside-avoid">
        <div class="flex items-baseline justify-between gap-3">
          <h4 class="font-bold">{{ certification.name }}</h4>
          <p class="text-right italic">{{ certification.date }}</p>
        </div>
        <p>{{ certification.issuer }}</p>
        <p v-if="certification.validUntil">
          <span class="font-semibold">{{ $t('validUntil') }}:</span>
          {{ certification.validUntil }}
        </p>
        <p v-if="certification.link" class="break-all">{{ certification.link }}</p>
      </article>
    </cv-ats-section>

    <cv-ats-section :title="$t('education')">
      <article v-for="education in props.educations" :key="`${education.name}-${education.date}`" class="mt-3 first:mt-0 break-inside-avoid">
        <div class="flex items-baseline justify-between gap-3">
          <h4 class="font-bold">{{ education.name }}</h4>
          <p class="text-right italic">{{ education.date }}</p>
        </div>
        <p>{{ education.description }}</p>
      </article>
    </cv-ats-section>

    <cv-ats-section :title="$t('skills')">
      <div v-for="skill in props.skills" :key="skill.name" class="mt-2 first:mt-0 break-inside-avoid">
        <p>
          <span class="font-semibold">{{ skill.name }}:</span>
          {{ skill.value }}
        </p>
      </div>
    </cv-ats-section>
  </div>
</template>
