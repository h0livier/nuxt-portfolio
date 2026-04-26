<script setup lang="ts">
import type { Certification } from '~/types'

const props = defineProps<{
  certification: Certification
}>()
</script>

<template>
  <div class="flex my-3">
    <div class="flex-2">
      <p class="italic text-sm">{{ props.certification.date }}</p>
    </div>
    <div class="flex-8 pl-5">
      <h4 class="font-bold">{{ props.certification.name }}</h4>
      <p class="pt-1 text-sm">
        {{ props.certification.description }}
        <span class="font-semibold">{{ $t('validUntil') }}: </span>
        <span>{{ props.certification.validUntil }}</span>
      </p>
    </div>
  </div>
</template>
