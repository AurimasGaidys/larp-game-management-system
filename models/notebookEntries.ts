export interface NotebookEntriesDTO {
    id: string,
    name: string,
    imageUrl: string,
    dialogTreeId: string,
    visibilityTag: string
    adminNotes: string,
    category: string,
    isActiveOnStart: boolean
}