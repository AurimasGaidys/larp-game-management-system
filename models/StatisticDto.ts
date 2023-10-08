export interface StatisticDto {
    id: string,
    name: string,
    min: number,
    max: number,
    default: number,
    adminNote: string,
    isGlobal: boolean,
    isActiveOnStart: boolean
}
