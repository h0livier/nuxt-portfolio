<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
</script>
<template>
    <div>
        <button class="cursor-pointer" v-for="l in locales" @click="setLocale(l.code)">
            <span v-if="l.code !== locale" > {{ l.name }}</span>
        </button>
    </div>
</template>