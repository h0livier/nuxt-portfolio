<script setup lang="ts">
import Fade from '~/components/animation/fade.vue'
import Card from '~/components/linkedin/Card.vue'
import { pluralize } from '~/helpers/string'
import { useProfileData } from '~/services/useProfileData'

const {experiences, educations, certifications, languages, skills, transverseSkills} = useProfileData()
const years = new Date().getFullYear() - new Date(2022, 9, 22).getFullYear()
</script>
<template>

    <!-- About -->
    <Fade>
        <Card :title="$t('aboutMe')">
            <p class="text-sm text-base-content/80 leading-relaxed">
                {{ $t('presentation_1').replace('%YEARS%', years.toString()) }}
            </p>
            <p class="text-sm text-base-content/80 leading-relaxed mt-2">{{ $t('presentation_2') }}</p>
        </Card>
    </Fade>

    <Fade>
        <Card :title="$t('workExperience')">
            <div v-for="experience in experiences" :key="experience.name" class="mb-4">
                <time class="text-xs sm:text-sm font-mono italic text-base-content/70">{{ experience.date }}</time>
                <div class="mt-2 mb-2">
                    <div class="text-base sm:text-lg md:text-xl font-black">{{ experience.name }}</div>
                    <h3 class="text-xs sm:text-sm italic mb-1 text-base-content/80">{{ experience.title }}</h3>
                </div>
                <p class="text-sm text-base-content/80 leading-relaxed">{{ experience.description }}</p>
                <div class="mt-2 flex flex-wrap gap-1">
                    <span v-for="(skill, index) in experience.skills" :key="index" class="badge badge-info badge-soft badge-sm">{{ skill }}</span>
                </div>
                <div v-if="experience.missions && experience.missions.length > 0" class="mt-3">
                    <h4 class="text-sm sm:text-base font-semibold mb-2">{{ pluralize($t("mission"), experience.missions.length) }} :</h4>
                    <div v-for="(mission, index) in experience.missions" :key="mission.date" class="ml-2 sm:ml-3">
                        <details class="collapse collapse-plus" :name="mission.title" :open="index === 0">
                            <summary class="collapse-title px-2 sm:px-4">
                                <span class="font-semibold">{{ mission.enterprise}}</span> | <span class="text-xs sm:text-sm font-mono italic text-base-content/70">{{ mission.date }}</span>
                                <br />
                                <p class="text-sm italic mt-1 text-base-content/80">{{ mission.title }}</p>
                            </summary>
                            <div class="collapse-content">
                                <p class="text-sm text-base-content/80 leading-relaxed">{{ mission.description }}</p>
                                <div class="mt-2 flex flex-wrap gap-1">
                                    <span v-for="(skill, index) in mission.skills" :key="index" class="badge badge-info badge-soft badge-sm">{{ skill }}</span>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </Card>
    </Fade>

    <Fade>
        <Card :title="$t('education')">
            <div v-for="education in educations" :key="education.name" class="mb-3">
                <time class="text-xs sm:text-sm font-mono italic text-base-content/70">{{ education.date }}</time>
                <h3 class="text-base sm:text-lg md:text-xl font-black">{{ education.name }}</h3>
                <p class="text-sm text-base-content/80 leading-relaxed">{{ education.description }}</p>
            </div>
        </Card>
    </Fade>

    <Fade>
        <Card :title="$t('certificationsTitle')">
            <div class="space-y-3">
                <a
                    v-for="cert in certifications"
                    :key="cert.name"
                    :href="cert.link || undefined"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <div class="flex flex-col md:flex-row  md:justify-start items-start md:items-center gap-3">
                        <img v-if="cert.logo" :src="cert.logo" :alt="cert.name" class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 object-contain" />
                        <div class="flex-1">
                            <p class="text-sm font-semibold">{{ cert.name }} - <span class="text-base-content/60">{{ cert.issuer }}</span></p>
                            <p class="text-sm text-base-content/60">{{ cert.date }} - {{ $t('validUntil') }} {{ cert.validUntil }}</p>
                        </div>
                    </div>
                </a>
            </div>
        </Card>
    </Fade>

    <div class="space-y-4">
        <Fade>
            <Card :title="$t('skills')">
                <div v-for="skill in skills" :key="skill.name" class="mb-2">
                    <p class="text-sm sm:text-sm font-semibold">{{ skill.name }}</p>
                    <p class="text-sm text-base-content/60">{{ skill.value }}</p>
                </div>
            </Card>
        </Fade>

        <Fade>
            <Card :title="$t('transverseSkillsTitle')">
                <div v-for="(skill, index) in transverseSkills" :key="skill.name" class="mb-2">
                    <p class="text-sm sm:text-sm font-semibold">
                        <span class="text-primary italic text-sm mr-1">0{{ index + 1 }}</span>
                        {{ skill.name }}
                    </p>
                    <p class="text-sm text-base-content/60 leading-relaxed">{{ skill.description }}</p>
                </div>
            </Card>
        </Fade>

        <Fade>
            <Card :title="$t('languagesTitle')">
                <div v-for="language in languages" :key="language.name" class="flex justify-between items-center text-sm gap-2">
                    <span>{{ language.name }}</span>
                    <span class="badge badge-primary badge-soft badge-sm">{{ language.value }}</span>
                </div>
            </Card>
        </Fade>
    </div>

    <Fade>
        <Card title="">
            <h2 class="text-base sm:text-lg md:text-xl font-black">{{ $t('getInTouchTitle') }}</h2>
            <p class="text-xs sm:text-sm text-base-content/80 leading-relaxed mt-2">{{ $t('getInTouchText') }}</p>
            <ContactForm class="w-full mt-4" />
        </Card>
    </Fade>
</template> 