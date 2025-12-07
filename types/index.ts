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
}
export interface WorkPlace extends Place {
    title: string
    ores_date?: string
    missions?: Mission[]
}