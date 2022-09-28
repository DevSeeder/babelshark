import { Model } from 'nestjs-dynamoose';
import { ISymbol, SymbolKey } from './../../domain/interfaces/symbol.interface';
import { AbstractDynamooseRepository } from './../../domain/repositories/abstract-dynamoose.repository';
export class SymbolDynamooseRepository extends AbstractDynamooseRepository<
    ISymbol,
    SymbolKey
> {
    constructor(protected readonly model: Model<ISymbol, SymbolKey>) {
        super(model);
    }
}
