import { Injectable } from '@nestjs/common';
import { Model } from 'nestjs-dynamoose';

@Injectable()
export abstract class AbstractDynamooseRepository<ModelSchema, ModelKey> {
    constructor(protected readonly model: Model<ModelSchema, ModelKey>) {}

    create(item: ModelSchema) {
        return this.model.create(item);
    }

    update(key: ModelKey, item: Partial<ModelSchema>) {
        return this.model.update(key, item);
    }

    findOne(key: ModelKey) {
        return this.model.get(key);
    }

    findAll() {
        return this.model.scan().exec();
    }
}
