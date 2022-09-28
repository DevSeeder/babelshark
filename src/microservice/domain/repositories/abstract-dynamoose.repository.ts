import { Injectable } from '@nestjs/common';
import { Model } from 'nestjs-dynamoose';

@Injectable()
export class AbstractDynamooseRepository<ModelSchema, ModelKey> {
    constructor(protected readonly model: Model<ModelSchema, ModelKey>) {}

    create(user: ModelSchema) {
        return this.model.create(user);
    }

    update(key: ModelKey, user: Partial<ModelSchema>) {
        return this.model.update(key, user);
    }

    findOne(key: ModelKey) {
        return this.model.get(key);
    }

    findAll() {
        return this.model.scan().exec();
    }
}
