export interface SymbolKey {
    id: string;
}

export interface ISymbol extends SymbolKey {
    symbol: string;
    language: string;
}
