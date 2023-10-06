export enum ActionType {
    OpenDialogPage,
    OpenDialogTree,
    OpenSiteLocation,
    AddPlayerTag,
    RemovePlayerTag,
    ReplacePlayerTag,
    AddItem,
    RemoveItem,
    ReplaceItem,
    AddToStat,
    RemoveFromStat,
    StartGame, // to count time for game duration condition
    AddToTimer,
    RemoveFromTimer
}

//create payloads
export interface Action {
    id: string,
    type: ActionType,
    payloadJson: string
}

export interface ActionsDTO {
    id: string,
    actions: Action[],
    treeId: string,
    pageId: string,
    conditions: string[],
    adminNotes: string
}