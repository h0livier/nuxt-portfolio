<script setup lang="ts">
interface SelectOption {
    label: string
    value: string
}

interface SelectFieldProps {
    label: string
    options: SelectOption[]
    placeholder?: string
    required?: boolean
    error?: string
}

withDefaults(defineProps<SelectFieldProps>(), {
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
        <select
            v-model="model"
            :required="required"
            class="select w-full"
            :class="{ 'select-error': error }"
        >
            <option value="" disabled>{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
        <p v-if="error" class="fieldset-label text-error">{{ error }}</p>
    </fieldset>
</template>
