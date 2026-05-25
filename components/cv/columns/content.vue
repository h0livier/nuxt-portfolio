<script setup lang="ts">
import type { Certification, Place, WorkPlace } from '~/types'
import { pluralize } from '~/helpers/string';

interface ContentProps {
  educations: Place[]
  experiences: WorkPlace[]
  certifications: Certification[]
  showMissions?: boolean
  showCertifications?: boolean
  showAbout?: boolean
}

defineProps<ContentProps>()
</script>

<template>
  <main class="w-[66%] px-5 pt-4">

    <cv-columns-section v-if="showAbout !== false" :title="$t('aboutMe')">
      <p class="mt-2 leading-snug">{{ $t('cvHeader.description') }}</p>
    </cv-columns-section>

    <cv-columns-section :title="$t('workExperience')">
      <div v-for="(experience, index) in experiences" :key="index" class="mt-4 break-inside-avoid">
        <div class="flex items-baseline justify-between gap-2">
          <h4 class="font-semibold">{{ experience.name }} | {{ experience.title }}</h4>
          <p class="italic text-right">{{ experience.date }}</p>
        </div>
        <p class="mt-1 leading-snug">{{ experience.description }}</p>
        <div v-if="showMissions !== false && experience.missions && experience.missions.length > 0">
          <p class="font-semibold mt-2 text-sm">{{ pluralize($t("mission"), experience.missions.length) }} : </p>
          <div v-for="mission in experience.missions" :key="mission.date" class="ml-3 mt-2 text-sm">
            <div class="flex items-baseline justify-between">
              <p>
                <span class="font-semibold">{{ mission.enterprise}} |</span> {{ mission.title}} 
              </p>
              <p><span class="italic">{{ mission.date }}</span></p>
            </div>
            <span class="block">{{ mission.description }} </span>
          </div>
        </div>
      </div>
    </cv-columns-section>

    <cv-columns-section v-if="showCertifications !== false" :title="$t('certificationsTitle')">
      <div v-for="(certification, index) in certifications" :key="index" class="mt-3 break-inside-avoid">
        <div class="flex items-baseline justify-between gap-2">
          <p class="font-semibold">{{ certification.name }}</p>
          <p class="italic text-right">{{ certification.date }}</p>
        </div>
        <p class="mt-1 leading-snug">{{ certification.description }}</p>
      </div>
    </cv-columns-section>

    <cv-columns-section :title="$t('education')">
      <div v-for="(education, index) in educations" :key="index" class="mt-3 break-inside-avoid">
        <div class="flex items-baseline justify-between gap-2">
          <p class="font-semibold">{{ education.name }}</p>
          <p class="italic text-right">{{ education.date }}</p>
        </div>
        <p class="mt-1 leading-snug">{{ education.description }}</p>
      </div>
    </cv-columns-section>
    
  </main>
</template>
