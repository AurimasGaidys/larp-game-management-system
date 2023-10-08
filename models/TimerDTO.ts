export interface TimerDTO {
    id: string,
    name: string,
    durationInMin: number,
    visibilityTag: string,
    adminNote: string,
    isGlobal: boolean
    isActiveOnStart: boolean
}
