import { LanguageDynamooseRepository } from './../../../adapter/repository/language-dynamoose.repository';
import { Injectable } from '@nestjs/common';
import { AbstractGetService } from '../abstract-get.service';
import {
    Language,
    LanguageFilter,
    LanguageKey
} from '../../interfaces/language.interface';

@Injectable()
export class GetLanguageService extends AbstractGetService<
    Language,
    LanguageKey,
    LanguageFilter
> {
    constructor(protected readonly repository: LanguageDynamooseRepository) {
        super(repository);
    }
}
