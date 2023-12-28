import { EventStat, EventTimer } from "../EventDto";
import { Item, UserItem } from "./Item";
import { NotebookEntryData } from "./notebookEntry";

export enum playerStatus {
    created,
    ready,
    playing,
    finished,
    suspended,
}


export interface User {
    id: string,
    couponCode: string,
    eventId: string,
    name: string,
    imageUrl: string,
    profileDT: string,
    status: playerStatus,
    gameStartedAt: number,
    userCreatedAt: number,
    inventory: UserItem[],
    // gal
    notebookEntries: NotebookEntryData[],
    stats: EventStat[],
    tags: string[],
    timers: EventTimer[],
    // TODO add for profile
    // achivements: EventTimer[],
    // friends: EventTimer[],

    created: number,
    lastLogin: number,

    isDeveloper: boolean,
    adminNotes: string
}