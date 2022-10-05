import { GramaticTypeDynamooseRepository } from './../../../adapter/repository/gramatic-type-dynamoose.repository';
import {
    GramaticType,
    GramaticTypeKey
} from './../../interfaces/gramatic-type.interface';

import { Injectable } from '@nestjs/common';
import { AbstractUpdateService } from '../abstract-update.service';

@Injectable()
export class UpdateGramaticTypeService extends AbstractUpdateService<
    GramaticType,
    GramaticTypeKey,
    GramaticType
> {
    constructor(
        protected readonly repository: GramaticTypeDynamooseRepository
    ) {
        super(repository);
    }
}
