import { SymbolDynamooseRepository } from './../../../adapter/repository/symbol-dynamoose.repository';
import { Injectable } from '@nestjs/common';
import { ISymbol } from '../../interfaces/symbol.interface';

@Injectable()
export class CreateSymbolService {
    constructor(protected readonly repository: SymbolDynamooseRepository) {}

    async createSymbol(symbol: ISymbol): Promise<void> {
        await this.repository.create(symbol);
    }
}
