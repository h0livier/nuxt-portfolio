<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

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
  <div ref="container" class="fade-in">
    <slot />
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity .8s ease, transform .8s ease;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}
</style>