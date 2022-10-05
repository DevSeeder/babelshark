import { GramaticTypeDynamooseRepository } from './../../../adapter/repository/gramatic-type-dynamoose.repository';
import {
    GramaticType,
    GramaticTypeFilter,
    GramaticTypeKey
} from './../../interfaces/gramatic-type.interface';
import { Injectable } from '@nestjs/common';
import { AbstractGetService } from '../abstract-get.service';

@Injectable()
export class GetGramaticTypeService extends AbstractGetService<
    GramaticType,
    GramaticTypeKey,
    GramaticTypeFilter
> {
    constructor(
        protected readonly repository: GramaticTypeDynamooseRepository
    ) {
        super(repository);
    }
}
