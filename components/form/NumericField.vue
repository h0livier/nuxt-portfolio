<script setup lang="ts">
interface NumericFieldProps {
    label: string
    placeholder?: string
    min?: number
    max?: number
    step?: number
    required?: boolean
    error?: string
}

withDefaults(defineProps<NumericFieldProps>(), {
    step: 1,
    required: false,
})

const model = defineModel<number | null>({ default: null })
</script>
<template>
    <fieldset class="fieldset">
        <legend class="fieldset-legend">
            {{ label }}
            <span v-if="required" class="text-error ms-0.5">*</span>
        </legend>
        <input
            v-model="model"
            type="number"
            :placeholder="placeholder"
            :min="min"
            :max="max"
            :step="step"
            :required="required"
            class="input w-full"
            :class="{ 'input-error': error }"
        />
        <p v-if="error" class="fieldset-label text-error">{{ error }}</p>
    </fieldset>
</template>
