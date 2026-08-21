<script lang="ts" setup>
export interface ScrollingSkill{
    name: string
    image: string
}

interface Props {
  items: ScrollingSkill[]
  speed?: number
  reverse?: boolean
}

withDefaults(defineProps<Props>(), {
  speed: 20,
  reverse: false,
})
</script>

<template>
  <div class="scrolling-container">
    <div class="scrolling-content" :class="{ reverse }" :style="{ '--duration': `${speed}s` }">
      <div v-for="(item, index) in items" :key="index" class="card card-border border-2 scrolling-item mt-4 sm:mt-8 md:mt-12 lg:mt-15">
        <div class="card-body flex flex-col items-center justify-center min-w-24 sm:min-w-32 md:min-w-40 lg:min-w-37.5 px-2 sm:px-3 md:px-4 py-2 sm:py-3">
            <i :class="[item.image, 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl']"></i>
            <p class="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{{ item.name }}</p>
        </div>
      </div>
      <!-- Duplicate items for seamless loop -->
      <div v-for="(item, index) in items" :key="`duplicate-${index}`" class="card card-border border-2 scrolling-item mt-4 sm:mt-8 md:mt-12 lg:mt-15">
        <div class="card-body flex flex-col items-center justify-center min-w-24 sm:min-w-32 md:min-w-40 lg:min-w-37.5 px-2 sm:px-3 md:px-4 py-2 sm:py-3">
            <i :class="[item.image, 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl']"></i>
            <p class="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrolling-container {
  overflow: hidden;
  width: 100%;
  background: transparent;
}

.scrolling-content {
  display: flex;
  gap: clamp(0.5rem, 2vw, 2rem);
  animation: scroll-right var(--duration) linear infinite;
}

.scrolling-content.reverse {
  animation: scroll-left var(--duration) linear infinite;
}

.scrolling-item {
  flex-shrink: 0;
  white-space: nowrap;
  padding: 0.5rem 1rem;
}

@keyframes scroll-right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>