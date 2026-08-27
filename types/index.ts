export interface ListOption {
    name: string
    value: string
}
export interface Place {
    name: string
    description: string
    date: string
}
export interface Mission {
    title: string
    enterprise: string
    date: string
    description: string
    skills?: string[]
}
export interface WorkPlace extends Place {
    title: string
    missions?: Mission[]
    internship?: boolean
    skills?: string[]
}

export interface Certification extends Place {
    issuer: string
    link: string
    validUntil: string
    logo?: string
}

export type CVPrintVariant = 'lined' | 'squared'