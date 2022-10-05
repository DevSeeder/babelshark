import { SymbolKey, ISymbol } from './../../interfaces/symbol.interface';
import { SymbolDynamooseRepository } from '../../../adapter/repository/symbol-dynamoose.repository';
import { Injectable } from '@nestjs/common';
import { AbstractUpdateService } from '../abstract-update.service';

@Injectable()
export class UpdateSymbolService extends AbstractUpdateService<
    ISymbol,
    SymbolKey
> {
    constructor(protected readonly repository: SymbolDynamooseRepository) {
        super(repository);
    }

    async pushTypes(key: SymbolKey, types: string[]): Promise<void> {
        await this.repository.updatePush(key, types, 'types');
    }
}
