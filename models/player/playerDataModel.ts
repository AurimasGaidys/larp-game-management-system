import { Item } from "./Item"
import { NotebookEntryData } from "./notebookEntry"

export enum playerStatus {
    created,
    ready,
    playing,
    finished,
    suspended,
}

export interface PLayerDataModel {
    id: string,
    couponCode: string,
    name: string,
    imageUrl: string,
    profileDT: string,
    status: playerStatus,
    gameStartedAt: Date,
    inventory: Item[],
    // gal
    notebookEntries: NotebookEntryData[],
    tags: string[],

    created: Date,
    lastLogin: Date,

    isDeveloper: boolean,
    adminNotes: string
}