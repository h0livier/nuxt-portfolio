<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="mt-5 first:mt-0">
    <h3 class="border-b border-black pb-1 text-base font-bold uppercase tracking-wide">
      {{ title }}
    </h3>
    <div class="mt-2">
      <slot />
    </div>
  </section>
</template>
