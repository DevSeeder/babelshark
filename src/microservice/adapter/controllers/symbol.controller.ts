import { ISymbol } from './../../domain/interfaces/symbol.interface';
import { Controller, Post } from '@nestjs/common';
import { CreateSymbolService } from '../../domain/services/symbols/create-symbol.service';

@Controller('symbols')
export class SymbolsController {
    constructor(private readonly createService: CreateSymbolService) {}

    @Post('/create')
    createSymbol(symbol: ISymbol) {
        return this.createService.createSymbol(symbol);
    }
}
