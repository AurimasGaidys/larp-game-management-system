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
    global: boolean,
    tag: string
}

export interface ReplaceTagPayload {
    fromGlobal: boolean,
    fromTag: string;
    toGlobal: boolean,
    toTag: string;
}


export interface ReplaceItemPayload {
    FromItemId: string;
    ToItemId: string;
}

export interface StatPayload {
    global: boolean,
    statId: string,
    amount: number
}

export interface TimerPayload {
    global: boolean,
    timerId: string,
    amount: number
}

export interface StatComparePayload {
    stat1Id: string,
    stat1Amount: number,
    stat2Id: string,
    stat2Amount: number
}
