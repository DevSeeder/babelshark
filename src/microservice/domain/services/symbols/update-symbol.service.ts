import { SymbolKey } from './../../interfaces/symbol.interface';
import { SymbolDTO } from './../../../adapter/dto/symbol.dto';
import { SymbolDynamooseRepository } from '../../../adapter/repository/symbol-dynamoose.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateSymbolService {
    constructor(protected readonly repository: SymbolDynamooseRepository) {}

    async updateSymbol(key: SymbolKey, symbol: SymbolDTO): Promise<void> {
        await this.repository.update(key, symbol);
    }

    async activateSymbol(id: SymbolKey): Promise<void> {
        await this.repository.update(id, { active: true });
    }

    async inactivateSymbol(id: SymbolKey): Promise<void> {
        await this.repository.update(id, { active: false });
    }

    async pushTypes(key: SymbolKey, types: string[]): Promise<void> {
        await this.repository.updatePush(key, types, 'types');
    }
}
