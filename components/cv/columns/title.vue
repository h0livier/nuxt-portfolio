<script setup lang="ts">
const props = defineProps<{
    value: string
}>()
</script>
<template>
    <h3 class="font-bold uppercase tracking-wide border-b border-slate-400 pb-0.5">{{ props.value }}</h3>
</template>