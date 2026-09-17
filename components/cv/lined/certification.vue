<script setup lang="ts">
import type { Certification } from '~/types'

const props = defineProps<{
  certification: Certification
}>()
</script>

<template>
  <div class="flex my-1.5 break-inside-avoid">
    <div class="flex-2">
      <p class="italic text-xs">{{ props.certification.date }}</p>
    </div>
    <div class="flex-8 pl-4">
      <h4 class="font-bold">{{ props.certification.name }}</h4>
      <p class="pt-0.5 text-xs">
        {{ props.certification.description }}
        <span class="font-semibold">{{ $t('validUntil') }}: </span>
        <span>{{ props.certification.validUntil }}</span>
      </p>
    </div>
  </div>
</template>
