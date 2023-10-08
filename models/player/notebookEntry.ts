
export enum NotebookEntryType {
    tipas1,
    tipas2,
    tipas3,
    tipas4,
}

export interface NotebookEntryData {
    id: string,
    name: string,
    description: string,
    dialogTreeId: string,
    imageUrl: string,
    soundUrl: string,
    logType: NotebookEntryType,
    adminNotes: string,
    activeOnStart: boolean,
}