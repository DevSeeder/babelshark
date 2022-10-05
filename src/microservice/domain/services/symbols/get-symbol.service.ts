import { SymbolDynamooseRepository } from '../../../adapter/repository/symbol-dynamoose.repository';
import { Injectable } from '@nestjs/common';
import {
    ISymbol,
    SymbolFilter,
    SymbolKey
} from '../../interfaces/symbol.interface';

@Injectable()
export class GetSymbolService {
    constructor(protected readonly repository: SymbolDynamooseRepository) {}

    async getSymbolByKey(key: SymbolKey): Promise<ISymbol> {
        return this.repository.findByKey(key);
    }

    async getSymbols(filter: SymbolFilter): Promise<ISymbol[]> {
        return this.repository.find(filter);
    }
}
