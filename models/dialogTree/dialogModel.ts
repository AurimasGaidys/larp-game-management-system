interface DTUserState {
    userId:string,
    stateId:string,
}

export interface DialogTreeDTO {
    id: string;
    name: string;
    startingStateId: string;
    adminNotes: string;
    dialogStates: DialogState[];
    // Have ability to restore user last conversation state
    usersState: DTUserState[];
}

export interface DialogState {
    id: string;
    name: string;
    adminNotes: string;
    elements: DialogElement[];
    startingStateId: string;
}

export enum ElementType {
    Image,
    Text,
    Video,
    ProgressBar,
    Separator,
    Audio,
    Button,
    Timer
}

export interface DialogElement {
    id: string;
    type: ElementType;
    payloadJson: string;
    adminNotes: string;
}

export interface DialogStateDto {
    id: string;
    name: string;
    elements: DialogElementDto[];
}

export interface DialogElementDto {
    id: string;
    type: ElementType;
    payloadJson: string;
}