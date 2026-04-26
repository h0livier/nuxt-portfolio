import { useI18n } from 'vue-i18n'
import type { Certification, ListOption, Mission, Place, WorkPlace } from '~/types'

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
    },/*
    { 
      name: t('experiences.ulb.name'),
      description: t('experiences.ulb.description'),
      date: t('experiences.ulb.date'),
      title: t('experiences.ulb.title'),
      internship: true
    }*/
  ]

  const educations: Place[] = [
    { 
      name: 'Haute école en Hainaut',
      description: t('educations.heh.description'),
      date: t('educations.heh.date')
    }
  ]

  const certifications: Certification[] = [
    {
      name: t('certifications.terraform.name'),
      description: t('certifications.terraform.description'),
      date: t('certifications.terraform.date'),
      link: 'https://www.credly.com/badges/example-terraform-associate',
      validUntil: t('certifications.terraform.validUntil')
    },
    {
      name: t('certifications.gh300.name'),
      description: t('certifications.gh300.description'),
      date: t('certifications.gh300.date'),
      link: 'https://www.credly.com/badges/example-az-900',
      validUntil: t('certifications.gh300.validUntil')
    },
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

    const skills: ListOption[] = [
      {name: t('skill.languages'), value: 'C#, Typescript, SQL'},
      {name: t('skill.webBackend'), value: '.Net 8/10, ASP.NET Core, API REST, EF Core, XUnit/NUnit'},
      {name: t('skill.webFrontend'), value: 'Vue, React, Blazor, HTML5 / CSS3 / SASS'},
      {name: t('skill.databases'), value: 'PostgreSQL, SQL Server, Cosmos DB, SQLite'},
      {name: t('skill.devOps'), value: 'Microsoft Azure, Docker, Terraform, Git, Github, CI/CD'},
      {name: t('skill.soft'), value: `${t('skill.analytic')}, ${t('skill.team')}, ${t('skill.communication')}, ${t('skill.adaptive')}`}
    ]

  return { experiences, educations, certifications, contacts, languages, skills }
}
