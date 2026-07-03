<script setup lang="ts">
interface Title{
    text: string
}
const props = defineProps<Title>()
</script>
<template>
    <h2 class="mt-3 mb-2 text-2xl font-bold">{{ props.text }}</h2>
</template>