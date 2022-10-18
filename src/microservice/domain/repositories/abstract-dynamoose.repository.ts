import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Document } from 'nestjs-dynamoose';

@Injectable()
export abstract class AbstractDynamooseRepository<ModelSchema, ModelKey> {
    constructor(protected readonly model: Model<ModelSchema, ModelKey>) {}

    async create(item: ModelSchema): Promise<Document<ModelSchema>> {
        return this.model.create(item);
    }

    async update(
        key: ModelKey,
        item: Partial<ModelSchema>,
        validateIfExists = true
    ) {
        if (validateIfExists) await this.validateIfExists(key);
        return this.model.update(key, item);
    }

    findByKey(key: ModelKey) {
        return this.model.get(key);
    }

    find(searchParams: Partial<ModelSchema>): Promise<ModelSchema[]> {
        const params = Object.keys(searchParams);
        const queryFilter = params.map((item) => {
            const filter = {};
            filter[item] = Array.isArray(searchParams[item])
                ? { contains: searchParams[item] }
                : { eq: searchParams[item] };
            return filter;
        });

        return this.model.scan(...queryFilter).exec();
    }

    findAll() {
        return this.model.scan().exec();
    }

    async updatePush(
        key: ModelKey,
        pushItens: Array<any>,
        pushKey: string,
        validateIfExists = true
    ) {
        if (validateIfExists) await this.validateIfExists(key);

        const addObj = {};
        addObj[pushKey] = pushItens;

        await this.model.update(key, {
            $ADD: addObj
        });
    }

    async validateIfExists(key: ModelKey) {
        const findRes = await this.findByKey(key);
        if (!findRes) throw new NotFoundException('Not Found');
    }
}
