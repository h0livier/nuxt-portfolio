export interface ListOption {
    name: string
    value: string
}
export interface Place {
    name: string
    description: string
    date: string
}
export interface WorkPlace extends Place {
    title: string
}