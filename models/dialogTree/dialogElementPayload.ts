import { Action } from "./actions";
import { ConditionType } from "./conditions";

export enum ButtonPayloadType {
    None
}

export enum ConditionBehavior {
    UnlockElement,
    ShowElement
}

export interface ButtonPayload extends ConditionPayload, LockConditionPayload {
    buttonType: ButtonPayloadType;
    name: string;
    imageUrl: string;
    soundUrl: string;
    actionId: string;
}

// TODO delete this
// export interface ButtonPayloadDto {
//     buttonType: ButtonPayloadType;
//     name: string;
//     imageUrl: string;
//     soundUrl: string;
//     actionsId: string;
//     passCondition: boolean;
//     conditionalText: string;
//     hasCondition: boolean;
// }

export interface TextPayload extends ConditionPayload {
    texts: string[];
}

export interface ImagePayload extends ConditionPayload {
    imageUrl: string;
    amount: number;
}

export interface AudioPayload extends ConditionPayload {
    soundType: string;
    soundUrl: string;
}

export interface VideoPayload extends ConditionPayload {
    videoType: string;
    videoUrl: string;
}

export interface ProgressBarPayload extends ConditionPayload {
    statId: string;
}

export interface SeparatorPayload {
}

export interface ConditionPayload {
    conditionType: ConditionType;
    conditionPayload: string;
}

export interface LockConditionPayload {
    lockConditionType: ConditionType;
    lockConditionPayload: string;
    conditionalTrueText: string;
    conditionalFalseText: string;
}