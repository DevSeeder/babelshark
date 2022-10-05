import { GetSymbolService } from '../../domain/services/symbols/get-symbol.service';
import { SymbolDTO } from '../dto/symbol.dto';
import { UpdateSymbolService } from '../../domain/services/symbols/update-symbol.service';
import {
    ISymbol,
    SymbolFilter,
    SymbolKey
} from '../../domain/interfaces/symbol.interface';
import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query
} from '@nestjs/common';
import { CreateSymbolService } from '../../domain/services/symbols/create-symbol.service';

@Controller('symbols')
export class SymbolsController {
    constructor(
        private readonly createService: CreateSymbolService,
        private readonly updateService: UpdateSymbolService,
        private readonly getService: GetSymbolService
    ) {}

    @Post('/create')
    async createSymbol(@Body() symbol: ISymbol) {
        await this.createService.createSymbol(symbol);
    }

    @Patch('/update/:id')
    updateSymbol(@Param() key: any, @Body() symbol: SymbolDTO) {
        return this.updateService.update(key, symbol);
    }

    @Patch('/activate/:id')
    activateSymbol(@Param() key: SymbolKey) {
        return this.updateService.activate(key);
    }

    @Patch('/inactivate/:id')
    inactivateSymbol(@Param() key: SymbolKey) {
        return this.updateService.inactivate(key);
    }

    @Get('/:id')
    getSymbolByKey(@Param() key: SymbolKey) {
        return this.getService.getByKey(key);
    }

    @Get('/')
    getSymbols(@Query() filter: SymbolFilter) {
        return this.getService.search(filter);
    }

    @Patch('/push/types/:id')
    pushTypes(@Param() key: any, @Body() types: string[]) {
        return this.updateService.pushTypes(key, types);
    }
}
