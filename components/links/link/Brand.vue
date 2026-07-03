<script setup lang="ts">
interface BrandLink{
    image: 'linkedin' | 'github'
    text: string
    link: string
}
const props = defineProps<BrandLink>()
</script>
<template>
    <div :class="['mb-3',  'p-2', 'rounded-md', props.image=='linkedin' ? 'bg-[#0A66C2]' : 'bg-[#24292F]']">
        <NuxtLink :href="props.link">
            <div class="flex justify-center items-center">
                <img v-if="props.image == 'github'" src="../../../assets/github.png" class="w-10"/>
                <img v-if="props.image == 'linkedin'" src="../../../assets/linkedin.png" class="w-10"/>
                <p class="grow ms-4 text-white">{{ props.text }}</p>
            </div>
        </NuxtLink>  
    </div>
</template>