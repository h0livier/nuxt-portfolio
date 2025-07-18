<script setup lang="ts">
function print(){
    window.print()
}
</script>
<template>
    <button class="btn btn-primary lg:btn-lg bg-blue-500 border-0 shadow-blue-300" @click="print()">Check out my resume</button>
</template>