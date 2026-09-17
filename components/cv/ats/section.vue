<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="mt-2.5 first:mt-0">
    <h3 class="border-b border-black pb-0.5 text-xs font-bold uppercase tracking-wide">
      {{ title }}
    </h3>
    <div class="mt-1">
      <slot />
    </div>
  </section>
</template>
