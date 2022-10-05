import {
    GramaticType,
    GramaticTypeFilter,
    GramaticTypeKey
} from './../../domain/interfaces/gramatic-type.interface';
import { CreateGramaticTypeService } from './../../domain/services/gramatic-types/create-gramatic-type.service';

import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    Query
} from '@nestjs/common';
import { UpdateGramaticTypeService } from './../../domain/services/gramatic-types/update-gramatic-type.service';
import { GetGramaticTypeService } from '../../domain/services/gramatic-types/get-gramatic-type.service';

@Controller('types')
export class GramaticTypesController {
    constructor(
        private readonly createService: CreateGramaticTypeService,
        private readonly updateService: UpdateGramaticTypeService,
        private readonly getService: GetGramaticTypeService
    ) {}

    @Post('/create')
    async createGramaticType(@Body() item: GramaticType) {
        await this.createService.createGramaticType(item);
    }

    @Patch('/update/:name')
    updateGramaticType(@Param() key: any, @Body() item: GramaticType) {
        return this.updateService.update(key, item);
    }

    @Patch('/activate/:name')
    activateGramaticType(@Param() key: GramaticTypeKey) {
        return this.updateService.activate(key);
    }

    @Patch('/inactivate/:name')
    inactivateGramaticType(@Param() key: GramaticTypeKey) {
        return this.updateService.inactivate(key);
    }

    @Get('/:name')
    getSymbolByKey(@Param() key: GramaticTypeKey) {
        return this.getService.getByKey(key);
    }

    @Get('/')
    getSymbols(@Query() filter: GramaticTypeFilter) {
        return this.getService.search(filter);
    }
}
