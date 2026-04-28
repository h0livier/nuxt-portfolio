<script setup lang="ts">
import type { CVPrintVariant } from '~/types'

interface PrintButtonProps {
    variant: CVPrintVariant
    showMissions: boolean
    showCertifications: boolean
    showAbout: boolean
}

const props = defineProps<PrintButtonProps>()
const emit = defineEmits<{
    (e: 'update:variant', value: CVPrintVariant): void
    (e: 'update:showMissions', value: boolean): void
    (e: 'update:showCertifications', value: boolean): void
    (e: 'update:showAbout', value: boolean): void
}>()

const modal = ref<HTMLDialogElement | null>(null)

function openModal() {
    modal.value?.showModal()
}

function updateVariant(value: string) {
    if (value === 'lined' || value === 'squared') {
        emit('update:variant', value)
    }
}

function updateShowMissions(value: boolean) {
    emit('update:showMissions', value)
}

function updateShowCertifications(value: boolean) {
    emit('update:showCertifications', value)
}

function updateShowAbout(value: boolean) {
    emit('update:showAbout', value)
}

function print(){
    window.print()
}
</script>
<template>
    <dialog ref="modal" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <h3 class="text-xl font-bold">{{ $t("printButton") }}</h3>
            <p class="pt-4 py-6">{{ $t("cvPrintLayout") }}</p>
            <select class="select select-bordered w-full mb-4" :value="props.variant" @change="updateVariant(($event.target as HTMLSelectElement).value)">
                <option value="squared">{{ $t("cvPrintLayoutSquared") }}</option>
                <option value="lined">{{ $t("cvPrintLayoutLined") }}</option>
            </select>
            <label class="label cursor-pointer justify-start gap-3 mb-2">
                <input
                    type="checkbox"
                    class="checkbox checkbox-primary"
                    :checked="props.showMissions"
                    @change="updateShowMissions(($event.target as HTMLInputElement).checked)">
                <span class="label-text">{{ $t("cvPrintShowMissions") }}</span>
            </label>
            <label class="label cursor-pointer justify-start gap-3 mb-2">
                <input
                    type="checkbox"
                    class="checkbox checkbox-primary"
                    :checked="props.showCertifications"
                    @change="updateShowCertifications(($event.target as HTMLInputElement).checked)">
                <span class="label-text">{{ $t("cvPrintShowCertifications") }}</span>
            </label>
            <label class="label cursor-pointer justify-start gap-3 mb-2">
                <input
                    type="checkbox"
                    class="checkbox checkbox-primary"
                    :checked="props.showAbout"
                    @change="updateShowAbout(($event.target as HTMLInputElement).checked)">
                <span class="label-text">{{ $t("cvPrintShowAbout") }}</span>
            </label>
            <div class="modal-action">
                <form method="dialog" class="gap-5">
                    <button class="btn btn-outline hover:bg-gray-700 mr-4">{{$t("cancel")}}</button>
                    <button class="btn btn-primary bg-blue-500" @click="print()">{{$t("print")}}</button>
                </form>
            </div>
        </div>
    </dialog>

    <button class="btn btn-primary lg:btn-lg bg-blue-500 border-0 shadow-blue-300 text-white" @click="openModal()">{{$t("printButton")}}</button>
</template>