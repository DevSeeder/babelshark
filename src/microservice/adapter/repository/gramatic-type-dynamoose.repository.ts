import {
    GramaticType,
    GramaticTypeKey
} from './../../domain/interfaces/gramatic-type.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { AbstractDynamooseRepository } from '../../domain/repositories/abstract-dynamoose.repository';

@Injectable()
export class GramaticTypeDynamooseRepository extends AbstractDynamooseRepository<
    GramaticType,
    GramaticTypeKey
> {
    constructor(
        @InjectModel('gramaticTypes')
        protected readonly model: Model<GramaticType, GramaticTypeKey>
    ) {
        super(model);
    }
}
