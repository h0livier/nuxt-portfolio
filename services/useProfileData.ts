import { useI18n } from 'vue-i18n'
import type { ListOption, Mission, Place, WorkPlace } from '~/types'

export const useProfileData = () => {
  const { t } = useI18n()

  const oresMission: Mission = {
    title: t('experiences.wavenet.missions.0.title'),
    enterprise: t('experiences.wavenet.missions.0.enterprise'),
    date: t('experiences.wavenet.missions.0.date'),
    description: t('experiences.wavenet.missions.0.description')
  }

  const experiences: WorkPlace[] = [
    { 
      name: 'Wavenet',
      description: t('experiences.wavenet.description'),
      date: t('experiences.wavenet.date'),
      title: t('experiences.wavenet.title'),
      missions: [ oresMission ]
    },
    { 
      name: 'Easi',
      description: t('experiences.easi.description'),
      date: t('experiences.easi.date'),
      title: t('experiences.easi.title')
    },

    { 
      name: t('experiences.ulb.name'),
      description: t('experiences.ulb.description'),
      date: t('experiences.ulb.date'),
      title: t('experiences.ulb.title')
    }
  ]

  const educations: Place[] = [
    { 
      name: 'Haute école en Hainaut',
      description: t('educations.heh.description'),
      date: t('educations.heh.date')
    }
  ]

  const contacts: ListOption[] = [
    { name: t('contacts.phone'), value: '+32 471 64 60 15' },
    { name: t('contacts.mail'), value: 'olivier.hayot.dev@gmail.com' },
    { name: t('contacts.website'), value: 'https://cv.olivierhayot.be' }
  ]

  const languages: ListOption[] = [
    { name: t('languages.french'), value: 'C2' },
    { name: t('languages.english'), value: 'B2' }
  ]

  return { experiences, educations, contacts, languages }
}
