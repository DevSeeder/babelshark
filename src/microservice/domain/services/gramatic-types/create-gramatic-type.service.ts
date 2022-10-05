import { GramaticTypeDynamooseRepository } from './../../../adapter/repository/gramatic-type-dynamoose.repository';
import { Injectable } from '@nestjs/common';
import { GramaticType } from '../../interfaces/gramatic-type.interface';

@Injectable()
export class CreateGramaticTypeService {
    constructor(
        protected readonly repository: GramaticTypeDynamooseRepository
    ) {}

    async createGramaticType(item: GramaticType): Promise<GramaticType> {
        // item.root = item.root || null;
        await this.repository.create(item);
        return item;
    }
}
