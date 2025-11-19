<script setup lang="ts">
const props = defineProps<{
    title?: string
    place: string
    date: string
    description: string
}>()
</script>
<template>
    <div class="flex my-3">
        <div class="flex-2">
            <p class=" italic text-sm">{{ props.date }}</p>
        </div>
        <div class="flex-8 pl-5">
            <h4 class="font-bold">{{ props.place }} <span v-if="props.title !== undefined">| {{ props.title }}</span></h4>
            <p class="pt-1 text-sm">{{ props.description }}</p>
        </div>
    </div>
</template>