<script setup lang="ts">
import { pluralize } from '~/helpers/string';
import type { ListOption } from '~/types';

const props = defineProps<{
    skill: ListOption
}>()
</script>
<template>
    <div class="flex my-0.5 break-inside-avoid">
        <div class="flex-2">
            <p class="italic text-xs">{{ props.skill.name }}</p>
        </div>
        <div class="flex-8 pl-4">
            <p class="pt-0.5 text-xs">{{ props.skill.value }}</p>
        </div>
    </div>
</template>