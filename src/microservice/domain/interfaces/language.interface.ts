export interface LanguageKey {
    reference: string;
}

export interface Language extends LanguageKey {
    country: string;
    placesId: number;
    root: string;
    active: boolean;
}

export interface LanguageFilter extends Object {
    root: string;
    country: string;
    active?: boolean;
}
