<script setup lang="ts">
function print(){
    window.print()
}
</script>
<template>
    <button class="btn btn-primary bg-blue-500 border-0 shadow-blue-300" @click="print()">Get my CV</button>
</template>