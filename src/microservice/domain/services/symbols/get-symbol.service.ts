import { SymbolDynamooseRepository } from '../../../adapter/repository/symbol-dynamoose.repository';
import { Injectable } from '@nestjs/common';
import {
    ISymbol,
    SymbolFilter,
    SymbolKey
} from '../../interfaces/symbol.interface';
import { AbstractGetService } from '../abstract-get.service';

@Injectable()
export class GetSymbolService extends AbstractGetService<
    ISymbol,
    SymbolKey,
    SymbolFilter
> {
    constructor(protected readonly repository: SymbolDynamooseRepository) {
        super(repository);
    }
}
