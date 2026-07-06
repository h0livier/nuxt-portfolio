<script setup lang="ts">
import { z } from 'zod'
import { useAppInsights } from '~/helpers/appinsight'

const { t } = useI18n()
const config = useRuntimeConfig()
const appInsights = useAppInsights()

const contactSchema = computed(() => z.object({
    name: z.string().min(2, t('contact.errors.nameMin')),
    email: z.string().email(t('contact.errors.emailInvalid')),
    phone: z.string().regex(/^\+?[\d\s\-().]{7,20}$/, t('contact.errors.phoneInvalid')).or(z.literal('')).optional(),
    subject: z.string().min(1, t('contact.errors.subjectRequired')),
    message: z.string().min(10, t('contact.errors.messageMin')),
}))

const subjectOptions = computed(() => [
    { label: t('contact.subjects.jobOffer'), value: 'job_offer' },
    { label: t('contact.subjects.freelance'), value: 'freelance' },
    { label: t('contact.subjects.project'), value: 'project' },
    { label: t('contact.subjects.other'), value: 'other' },
])

const form = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
})

const errors = reactive<Record<string, string>>({})
const loading = ref(false)
const success = ref(false)
const error = ref(false)

function validate(): boolean {
    const result = contactSchema.value.safeParse(form)
    Object.keys(errors).forEach(key => delete errors[key])
    if (!result.success) {
        for (const issue of result.error.issues) {
            const field = issue.path[0] as string
            if (!errors[field]) {
                errors[field] = issue.message
            }
        }
        return false
    }
    return true
}

async function handleSubmit() {
    loading.value = true
    error.value = false
    success.value = false
    if (!validate()) {
        loading.value = false
        return
    }

    try{
        const result = await fetch(config.public.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        })

        if(result.ok) {
            success.value = true
            Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '' })
            Object.keys(errors).forEach(key => delete errors[key])
            appInsights.trackEvent('ContactFormSubmitted')
        } else {
            error.value = true
            const errorData = await result.json()
            if (errorData.errors) {
                Object.assign(errors, errorData.errors)
            }
        }
    } catch (e) {
        error.value = true
        appInsights.trackException(e as Error)
    } finally {
        loading.value = false
    }
}
</script>
<template>
    <div class="card w-full">
        <div class="card-body">
            <div v-if="success" role="alert" class="alert alert-success mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ $t('contact.successMessage') }}</span>
            </div>
            <div v-if="error" role="alert" class="alert alert-error mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ $t('contact.errorMessage') }}</span>
            </div>
            <form @submit.prevent="handleSubmit" novalidate>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <FormTextField
                        v-model="form.name"
                        :label="$t('contact.fields.name')"
                        :placeholder="$t('contact.placeholders.name')"
                        :error="errors.name"
                        required
                    />
                    <FormTextField
                        v-model="form.email"
                        :label="$t('contact.fields.email')"
                        :placeholder="$t('contact.placeholders.email')"
                        type="email"
                        :error="errors.email"
                        required
                    />
                    <FormTextField
                        v-model="form.phone"
                        :label="$t('contact.fields.phone')"
                        :placeholder="$t('contact.placeholders.phone')"
                        type="tel"
                        :error="errors.phone"
                    />
                    <FormSelectField
                        v-model="form.subject"
                        :label="$t('contact.fields.subject')"
                        :placeholder="$t('contact.placeholders.subject')"
                        :options="subjectOptions"
                        :error="errors.subject"
                        required
                    />
                </div>
                <FormTextareaField
                    v-model="form.message"
                    :label="$t('contact.fields.message')"
                    :placeholder="$t('contact.placeholders.message')"
                    :rows="5"
                    :error="errors.message"
                    required
                />
                <div class="card-actions justify-end mt-4">
                    <div class="aura aura-dual aura-xs duration-10000">
                        <button :disabled="loading" type="submit" class="btn btn-primary bg-blue-500 border-0 shadow-blue-300 text-white">
                            <span v-if="loading" class="loading loading-spinner loading-md"></span>
                            <span v-else>{{ $t('contact.submit') }}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
