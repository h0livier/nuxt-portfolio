<script setup lang="ts">
interface Props {
    title: string
    description?: string
}
const props = defineProps<Props>()
</script>
<template>
    <div class="my-10 mx-[5vw] md:mx-[10vw] lg:mx-[15vw]">
        <h2 class="text-3xl font-bold mb-5 mt-[10vh]">{{ props.title }}</h2>
        <p v-if="props.description" class="mb-20">{{ props.description }}</p>
        <slot/>
    </div>
</template>