export function pluralize(value: string, items: number = 2): string {
    return items > 1 ? `${value}s` : value
}