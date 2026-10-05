<script setup lang="ts">
interface Props {
    title: string
}
defineProps<Props>()
</script>
<template>
    <div class="card bg-base-100 shadow mt-8">
        <div class="card-body gap-2">
            <h2 class="card-title text-lg">{{ title }}</h2>
            <slot/>
        </div>
    </div>
</template>