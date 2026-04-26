<script setup lang="ts">
interface TextFieldProps {
    label: string
    placeholder?: string
    type?: 'text' | 'email' | 'password' | 'url' | 'tel'
    required?: boolean
    error?: string
}

withDefaults(defineProps<TextFieldProps>(), {
    type: 'text',
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
        <input
            v-model="model"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            class="input w-full"
            :class="{ 'input-error': error }"
        />
        <p v-if="error" class="fieldset-label text-error">{{ error }}</p>
    </fieldset>
</template>
