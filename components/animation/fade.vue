<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

interface Props {
  duration?: number
}

withDefaults(defineProps<Props>(), {
  duration: 0.8
})

const container: Ref<HTMLElement | null> = ref(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!container.value) return

  observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer?.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2
  })

  observer.observe(container.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <div ref="container" class="fade-in" :style="{ '--duration': `${duration}s` }">
    <slot />
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity var(--duration) ease, transform var(--duration) ease;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}
</style>