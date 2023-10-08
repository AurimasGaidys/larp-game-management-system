export enum ConditionType {
    None,
    Tag, // string
    Stat,
    GameDuration,
    TimeOfTheDay,
}

export enum TagConditionType {
    HAS_ANY_TAG = 'Has Any tag',
    HAS_ALL_TAGS = 'Has All tags',
    HAS_NO_TAGS = 'Has no tags',
}
export interface TagConditionPayload {
    tags: string[];
    type: TagConditionType;
}

export enum StatConditionType {
    HAS_EXACTLY = 'Has exactly',
    HAS_LESS_THAN = 'Has less than',
    HAS_LESS_OR_EXACTLY = 'Has less or exactly',
    HAS_MORE_THAN = 'Has more than',
    HAS_MORE_OR_EXACTLY = 'Has more or exactly',
}

export enum StatCompareType {
    VALUE = 'Value',
    MIN = 'Min',
    MAX = 'Max',
    DEFAULT = 'Default',
    OTHER_STAT = 'Other Stat',
}
export interface StatConditionPayload {
    statId: string;
    type: StatConditionType;
    conditionType: StatCompareType;
    value?: string;
    otherStatId?: string;
}

export enum GameDurationConditionType {
    MORE_THAN = 'More than',
    LESS_THAN = 'Less than',
}

export interface GameDurationConditionPayload {
    days: number;
    type: GameDurationConditionType
}

export interface TimeOfTheDayConditionPayload {
    fromHour: number;
    toHour: number;
}
