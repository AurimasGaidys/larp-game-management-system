export interface OpenDialogPagePayload {
    nextPageId: string
    pageName?: string
}

export interface OpenDialogTreePayload {
    treeId: string
}

export interface OpenSiteLocationPayload {
    location: string
}


export interface ItemPayload {
    itemId: string
}

export interface TagPayload {
    tag: string
}

export interface ReplaceTagPayload {
    fromTag: string;
    toTag: string;
}


export interface ReplaceItemPayload {
    FromItemId: string;
    ToItemId: string;
}

export interface StatPayload {
    statId: string,
    amount: number
}

export interface TimerPayload {
    timerId: string,
    amount: number
}

export interface StatComparePayload {
    stat1Id: string,
    stat1Amount: number,
    stat2Id: string,
    stat2Amount: number
}
