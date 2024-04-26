export interface Attempt {
    id: string;
    name: string;
    infos: AttemptInfo[];
}

export interface AttemptInfo {
    label: string;
    value: string;
    status: AttemptInfoStatus;
}

export enum AttemptInfoStatus {
    Valid = "valid",
    Semivalid = "semivalid",
    Invalid = "invalid"
}