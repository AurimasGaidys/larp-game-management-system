export interface InvestigationsDTO {
    id: string,
    name: string,
    imageUrl: string,
    // todo check design for list maybe
    description: string,
    descriptionDialogTreeId: string,
    visibilityTag: string
    adminNotes: string,
    isActiveOnStart: boolean
}
