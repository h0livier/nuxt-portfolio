<script setup lang="ts">
import Section from '~/components/links/Section.vue'
import Title from '~/components/links/Title.vue'
import LinkBrand from '~/components/links/link/Brand.vue'
import LinkBasic from '~/components/links/link/basic.vue'

const { locale } = useI18n()
const url = locale.value === 'fr' ? '/' : `/${locale.value}`
</script>
<template>
    <main class="flex justify-center py-10 min-h-screen">
        <div class="pt-2 px-5 w-[95vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]">
            <div class="flex justify-end mb-10">
                <LanguageSwitch />
            </div>
            <div>
                <div class="avatar">
                    <div class="w-50 rounded-full">
                        <img src="../../assets/picture_squared.jpg" class="" alt="Olivier Hayot" />
                    </div>
                </div>
                <h1 class="text-3xl font-bold mt-4">Olivier Hayot</h1>
                <p class="text-xl text-gray-300">{{ $t('profession') }}</p>
            </div>
            <div>
                <Section>
                    <Title :text="$t('links.portfolio')" />
                    <LinkBrand image="linkedin" text="Linkedin" link="https://www.linkedin.com/in/olivier-hayot/" />
                    <LinkBrand image="github" text="Github" link="https://github.com/h0livier" />
                </Section>
                <Section>
                    <Title :text="$t('links.contact')" />
                    <LinkBasic :title="$t('mail')" text="olivier.hayot.dev@gmail.com" link="mailto:olivier.hayot.dev@gmail.com" />
                    <LinkBasic :title="$t('website')" link="https://www.olivierhayot.be" />
                    <LinkBasic :title="$t('cv')" :link="url" />
                </Section>
            </div>
        </div>
    </main>
</template>