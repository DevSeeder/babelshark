import { RandomHelper } from './../../../adapter/helper/random.helper';
import { SymbolDynamooseRepository } from './../../../adapter/repository/symbol-dynamoose.repository';
import { Injectable } from '@nestjs/common';
import { ISymbol } from '../../interfaces/symbol.interface';
import { EnumBufferEncoding } from '../../enums/buffer-encoding.enum';

@Injectable()
export class CreateSymbolService {
    constructor(protected readonly repository: SymbolDynamooseRepository) {}

    async createSymbol(symbol: ISymbol): Promise<void> {
        symbol.id = RandomHelper.GenerateHashString(12, EnumBufferEncoding.HEX);
        await this.repository.create(symbol);
    }
}
