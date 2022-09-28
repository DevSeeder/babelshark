import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { ISymbol, SymbolKey } from './../../domain/interfaces/symbol.interface';
import { AbstractDynamooseRepository } from './../../domain/repositories/abstract-dynamoose.repository';

@Injectable()
export class SymbolDynamooseRepository extends AbstractDynamooseRepository<
    ISymbol,
    SymbolKey
> {
    constructor(
        @InjectModel('Symbol')
        protected readonly model: Model<ISymbol, SymbolKey>
    ) {
        super(model);
    }
}
