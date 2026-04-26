<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>
<template>
    <div class="my-3">
        <cv-lined-title :value="props.title" />
        <slot />    
    </div>
</template>