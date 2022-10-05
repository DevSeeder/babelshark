import { Injectable } from '@nestjs/common';
import { AbstractDynamooseRepository } from '../repositories/abstract-dynamoose.repository';

@Injectable()
export class AbstractUpdateService<ModelSchema, ModelKey, ModelDTO> {
    constructor(
        protected readonly repository: AbstractDynamooseRepository<
            ModelSchema,
            ModelKey
        >
    ) {}

    async update(key: ModelKey, item: ModelDTO): Promise<void> {
        const itemDTO: any = item;
        await this.repository.update(key, itemDTO);
    }

    async activate(id: ModelKey): Promise<void> {
        const objUpdate: any = { active: true };
        await this.repository.update(id, objUpdate);
    }

    async inactivate(id: ModelKey): Promise<void> {
        const objUpdate: any = { active: false };
        await this.repository.update(id, objUpdate);
    }
}
