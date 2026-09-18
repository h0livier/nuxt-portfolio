<script setup lang="ts">
const props = defineProps<{
    title?: string
}>()
</script>
<template>
    <div>
        <cv-lined-title v-if="props.title && props.title.length > 0" :value="props.title" />
        <div class="gap-2 flex flex-col">
            <slot />
        </div>
    </div>
</template>