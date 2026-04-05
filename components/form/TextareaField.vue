<script setup lang="ts">
interface TextareaFieldProps {
    label: string
    placeholder?: string
    rows?: number
    required?: boolean
    error?: string
}

withDefaults(defineProps<TextareaFieldProps>(), {
    rows: 4,
    required: false,
})

const model = defineModel<string>({ default: '' })
</script>
<template>
    <fieldset class="fieldset">
        <legend class="fieldset-legend">
            {{ label }}
            <span v-if="required" class="text-error ms-0.5">*</span>
        </legend>
        <textarea
            v-model="model"
            :placeholder="placeholder"
            :rows="rows"
            :required="required"
            class="textarea w-full"
            :class="{ 'textarea-error': error }"
        ></textarea>
        <p v-if="error" class="fieldset-label text-error">{{ error }}</p>
    </fieldset>
</template>
