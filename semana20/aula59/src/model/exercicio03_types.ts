export enum NATIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
}

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

export interface User {
    name: string;
    age: number;
    nationality: NATIONALITY
}

export interface Casino {
    name: string;
    location: LOCATION
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
