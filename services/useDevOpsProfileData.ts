import { useI18n } from 'vue-i18n'
import type { ScrollingSkill } from '~/components/animation/defiling.vue'
import type { Certification, ListOption, Mission, Place, WorkPlace } from '~/types'

const PROFILE_FULL_NAME = 'Olivier Hayot'

export const useDevOpsProfileData = () => {
  const { t } = useI18n()
  const fullName = PROFILE_FULL_NAME

  const oresMission: Mission = {
    title: t('experiences.wavenet.missions.0.title'),
    enterprise: t('experiences.wavenet.missions.0.enterprise'),
    date: t('experiences.wavenet.missions.0.date'),
    description: t('experiences.wavenet.missions.0.description'),
    skills: ['Terraform', 'GitHub Actions', 'Azure DevOps', 'Docker', 'Kubernetes', 'Infrastructure as Code']
  }

  const industeelMission: Mission = {
    title: t('experiences.wavenet.missions.1.title'),
    enterprise: t('experiences.wavenet.missions.1.enterprise'),
    date: t('experiences.wavenet.missions.1.date'),
    description: t('experiences.wavenet.missions.1.description'),
    skills: ['Azure', 'CI/CD Pipelines', 'Terraform', 'Docker', 'GitHub Actions', 'Infrastructure as Code']
  }

  const experiences: WorkPlace[] = [
    { 
      name: 'Wavenet',
      description: t('experiences.wavenet.description'),
      date: t('experiences.wavenet.date'),
      title: t('experiences.wavenet.title'),
      skills: ['Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Infrastructure as Code', 'Powershell', 'Bash', 'Linux'],
      missions: [ industeelMission, oresMission ]
    },
    { 
      name: 'Easi',
      description: t('experiences.easi.description'),
      date: t('experiences.easi.date'),
      title: t('experiences.easi.title'),
      skills: ['Windows Server', 'Powershell', 'Active Directory', 'System Administration', 'Backup & Recovery', 'Network Configuration']
    }
  ]

  const transverseSkills: Place[] = [
    { name: t('transverseSkills.analysisAndDesign.name'), description: t('transverseSkills.analysisAndDesign.description'), date: "" },
    { name: t('transverseSkills.backendArchitecture.name'), description: t('transverseSkills.backendArchitecture.description'), date: "" },
    { name: t('transverseSkills.serviceIntegration.name'), description: t('transverseSkills.serviceIntegration.description'), date: "" },
    { name: t('transverseSkills.solvingProblems.name'), description: t('transverseSkills.solvingProblems.description'), date: "" },
    { name: t('transverseSkills.automationAndTools.name'), description: t('transverseSkills.automationAndTools.description'), date: "" }
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
      name: t('certifications.gh200.name'),
      issuer: t('certifications.gh200.issuer'),
      description: t('certifications.gh200.description'),
      date: t('certifications.gh200.date'),
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/OlivierHayot-3879/4FFEFCB5AB822BCE?sharingId=F6F8F4EC39C38103',
      validUntil: t('certifications.gh200.validUntil'),
      logo: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1911118423/0215972a-0912-4638-8cb0-8c655b8eaf0f2016309413550254902.png"
    },
    {
      name: t('certifications.terraform.name'),
      issuer: t('certifications.terraform.issuer'),
      description: t('certifications.terraform.description'),
      date: t('certifications.terraform.date'),
      link: 'https://www.credly.com/badges/19129d90-2993-4fe8-a301-1460a0c7f5b4/public_url',
      validUntil: t('certifications.terraform.validUntil'),
      logo: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1256144051/d0da6cb2-8edb-438f-b6b2-abaf0acf6f0b11682161235118687450.png"
    },
    {
      name: t('certifications.gh300.name'),
      issuer: t('certifications.gh300.issuer'),
      description: t('certifications.gh300.description'),
      date: t('certifications.gh300.date'),
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/OlivierHayot-3879/959D372E9B54FE26?sharingId=F6F8F4EC39C38103',
      validUntil: t('certifications.gh300.validUntil'),
      logo: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1999319323/9a132d12-47a7-4c8e-8954-27fe0e5f0a1d12569602178324077995.png"
    },
  ]

  const contacts: ListOption[] = [
    { name: t('contacts.phone'), value: '+32 471 64 60 15' },
    { name: t('contacts.mail'), value: 'olivier.hayot.dev@gmail.com' },
    { name: t('contacts.website'), value: 'https://cv.olivierhayot.be' }
  ]

  const contactHeader : ListOption[] = [
    { name: t('contacts.phone'), value: '+32 471 64 60 15' },
    { name: t('contacts.mail'), value: 'olivier.hayot.dev@gmail.com' },
  ]
  const languages: ListOption[] = [
    { name: t('languages.french'), value: 'C2' },
    { name: t('languages.english'), value: 'B2' }
  ]

  const skills: ListOption[] = [
    {name: t('skill.languages'), value: 'Powershell, Bash, Python'},
    {name: t('skill.webBackend'), value: 'Azure Services, Microservices Architecture, API Management, Service Bus'},
    {name: t('skill.webFrontend'), value: 'Infrastructure Monitoring, Logging & Analytics, Health Dashboards'},
    {name: t('skill.databases'), value: 'PostgreSQL, SQL Server, Cosmos DB, Redis, Database Replication'},
    {name: t('skill.devOps'), value: 'Microsoft Azure, Docker, Kubernetes, Terraform, Git, GitHub Actions, CI/CD Pipelines, Infrastructure as Code'},
    {name: t('skill.ai'), value: 'GitHub Copilot, Copilot Agent Mode, Prompt Engineering, Agentic Workflows'},
    {name: t('skill.soft'), value: `${t('skill.analytic')}, ${t('skill.team')}, ${t('skill.communication')}, ${t('skill.adaptive')}`}
  ]

  const skillsWithImages: ScrollingSkill[] = [
    {name: 'Docker', image: 'devicon-docker-plain'},
    {name: 'Kubernetes', image: 'devicon-kubernetes-plain'},
    {name: 'Terraform', image: 'devicon-terraform-plain'},
    {name: 'Microsoft Azure', image: 'devicon-azure-plain'},
    {name: 'Powershell', image: 'devicon-powershell-plain'},
    {name: 'Python', image: 'devicon-python-plain'},
    {name: 'Bash', image: 'devicon-bash-plain'},
    {name: 'Git', image: 'devicon-git-plain'},
  ]

  const skillsWithImagesReverse: ScrollingSkill[] = [
    {name: 'GitHub Actions', image: 'devicon-github-original'},
    {name: 'Linux', image: 'devicon-linux-plain'},
    {name: 'PostgreSQL', image: 'devicon-postgresql-plain'},
    {name: 'SQL Server', image: 'devicon-microsoftsqlserver-plain'},
    {name: 'Redis', image: 'devicon-redis-plain'},
    {name: 'GitLab', image: 'devicon-gitlab-plain'},
    {name: 'Jenkins', image: 'devicon-jenkins-plain'},
    {name: 'Grafana', image: 'devicon-grafana-plain'},
  ]

  return { fullName, experiences, educations, certifications, contacts, contactHeader, languages, skills, transverseSkills, skillsWithImages, skillsWithImagesReverse }
}
