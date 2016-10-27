import { List } from 'linqts/dist/linq';

export class User {
    constructor() {
        this.name = '';
        this.serverName = '';
        this.serverRegion = '';
        this.characterRanking = [];
        this.characterParse = [];
    }
    name: string;
    serverName: string;
    serverRegion: string;
    characterRanking: CharacterRanking[];
    characterParse: CharacterParse[];
}

export class CharacterRanking {
    rank: number;
    outOf: number;
    total: number;
    class: number;
    guild: string;
    duration: number;
    startTime: number;
    itemLevel: number;
    patch: number;
    reportID: string;
    fightID: number;
    difficulty: number;
    size: number;
    estimated: boolean;
}

export class CharacterParse {
    difficulty: number;
    size: number;
    kill: number;
    name: string;
    specs: Specs[];
    variable: boolean;
    partition: number;
}

export class Specs {
    combined: boolean;
    data: any[];
}

