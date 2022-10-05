import {
    Language,
    LanguageKey
} from './../../domain/interfaces/language.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { AbstractDynamooseRepository } from '../../domain/repositories/abstract-dynamoose.repository';

@Injectable()
export class LanguageDynamooseRepository extends AbstractDynamooseRepository<
    Language,
    LanguageKey
> {
    constructor(
        @InjectModel('languages')
        protected readonly model: Model<Language, LanguageKey>
    ) {
        super(model);
    }
}
