<script setup lang="ts">
interface Props {
    badge?: string
    title: string
    message: string
    price: string
    features: string[]
    button: string
}
const props = defineProps<Props>()
</script>
<template>
    <div class="min-h-[30vh] card bg-base-200 shadow-sm">
        <div class="card-body">
            <span v-if="props.badge" class="badge badge-xs badge-warning">{{ props.badge }}</span>
            <div class="flex justify-between">
                <h2 class="text-3xl font-bold">{{ props.title }}</h2>
                <span class="text-xl">{{ props.price }}</span>
            </div>
            <p class="mb-5">{{ props.message }}</p>
            <ul class="flex flex-col gap-2 text-xs">
                <li v-for="(feature, index) in props.features" :key="index" class="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{{ feature }}</span>
                </li>
            </ul>
            <div class="mt-6">
                <button class="btn btn-primary btn-block">{{ props.button }}</button>
            </div>
        </div>
    </div>
</template>