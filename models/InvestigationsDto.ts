export interface InvestigationsDTO {
    id: string,
    name: string,
    imageUrl: string,
    description: string,
    dialogTreeId: string,
    visibilityTag: string,
    // Event ids list
    compleatedIn: string[],
    adminNotes: string,
    isActiveOnStart: boolean
}
