export interface ItemsDTO {
    id: string,
    name: string,
    imageUrl: string,
    description: string,
    amount: number,
    durationInMin: number,
    dialogTreeId: string, // deprecated
    descriptionDialogTreeId: string,
    completionDialogTreeId: string,
    visibilityTag: string,
    requiresTarget: boolean,
    adminNotes: string,
    isActiveOnStart: boolean
}
