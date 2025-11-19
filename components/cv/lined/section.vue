<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>
<template>
    <div class="my-4">
        <cv-lined-title :value="props.title" />
        <slot />    
    </div>
</template>