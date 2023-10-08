export enum TagType {
    local,
    global,
    item,
    objective,
    ability,
    investigation,
    notebook
}

export interface TagDTO {
    id: string,
    name: string,
    category: string,
    adminNote: string,
    tagType: TagType,
    isActiveOnStart: boolean
    // isGlobal: boolean
}
