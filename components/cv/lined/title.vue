<script setup lang="ts">
const props = defineProps<{
    value: string
}>()
</script>
<template>
    <h4 class="flex justify-center items-center mb-2">
        <hr class="flex-1" />
        <span class="tex-3xl font-bold mx-4">{{ props.value }}</span>
        <hr class="flex-8"/>
    </h4>
</template>