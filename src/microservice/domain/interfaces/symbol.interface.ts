export interface SymbolKey {
    id: string;
}

export interface ISymbol extends SymbolKey {
    symbol: string;
    description?: string;
    types: string[];
    language: string;
    translations: Translations;
    active: boolean;
}

export interface SymbolFilter extends Object {
    language: string;
    symbol?: string;
    types?: string[];
    active?: boolean;
}

export interface Translations {
    pt_br: string[];
    es: string[];
    ja: string[];
    fr: string[];
    kr: string[];
    de: string[];
}
