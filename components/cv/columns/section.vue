<script setup lang="ts">
const props = defineProps<{
    title?: string
}>()
</script>
<template>
    <div class="my-2.5">
        <cv-columns-title v-if="props.title && props.title.length > 0" :value="props.title" />
        <slot />
    </div>
</template>