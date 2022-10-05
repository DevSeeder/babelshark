import { Injectable } from '@nestjs/common';
import { AbstractDynamooseRepository } from '../repositories/abstract-dynamoose.repository';

@Injectable()
export class AbstractGetService<ModelSchema, ModelKey, ModelFilter> {
    constructor(
        protected readonly repository: AbstractDynamooseRepository<
            ModelSchema,
            ModelKey
        >
    ) {}

    async getByKey(key: ModelKey): Promise<ModelSchema> {
        return this.repository.findByKey(key);
    }

    async search(filter: ModelFilter): Promise<ModelSchema[]> {
        const filterParams: any = { ...filter };
        return this.repository.find(filterParams);
    }
}
