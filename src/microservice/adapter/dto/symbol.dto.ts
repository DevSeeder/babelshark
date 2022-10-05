import { Translations } from './../../domain/interfaces/symbol.interface';
export class SymbolDTO {
    symbol?: string;
    description?: string;
    translations?: Translations;
    language?: string;
    types?: string[];
}
