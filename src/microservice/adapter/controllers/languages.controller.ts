import {
    Language,
    LanguageFilter,
    LanguageKey
} from '../../domain/interfaces/language.interface';
import { CreateLanguageService } from '../../domain/services/languages/create-language.service';
import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query
} from '@nestjs/common';
import { GetLanguageService } from '../../domain/services/languages/get-language.service';
import { UpdateLanguageService } from '../../domain/services/languages/update-language.service';

@Controller('languages')
export class LanguagesController {
    constructor(
        private readonly createService: CreateLanguageService,
        private readonly updateService: UpdateLanguageService,
        private readonly getService: GetLanguageService
    ) {}

    @Post('/create')
    async createLanguage(@Body() item: Language) {
        await this.createService.createLanguage(item);
    }

    @Patch('/update/:reference')
    updateLanguage(@Param() key: any, @Body() item: Language) {
        return this.updateService.update(key, item);
    }

    @Patch('/activate/:reference')
    activateLanguage(@Param() key: LanguageKey) {
        return this.updateService.activate(key);
    }

    @Patch('/inactivate/:reference')
    inactivateLanguage(@Param() key: LanguageKey) {
        return this.updateService.inactivate(key);
    }

    @Get('/:reference')
    getSymbolByKey(@Param() key: LanguageKey) {
        return this.getService.getByKey(key);
    }

    @Get('/')
    getSymbols(@Query() filter: LanguageFilter) {
        return this.getService.search(filter);
    }
}
