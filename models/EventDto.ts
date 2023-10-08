export interface EventStat {
    id: string,
    value: number,
}

export interface EventTimer {
    id: string,
    expiresAt: number,
}

export interface EventDTO {
    id: string,
    name: string,
    usedPlayerIcons: string[],
    stats: EventStat[],
    tags: string[],
    timers: EventTimer[],
    startDate: number,
    endDate: number,
    adminNotes?: string,
}
