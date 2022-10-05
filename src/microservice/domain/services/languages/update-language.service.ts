import { LanguageDynamooseRepository } from './../../../adapter/repository/language-dynamoose.repository';
import { Language, LanguageKey } from './../../interfaces/language.interface';
import { Injectable } from '@nestjs/common';
import { AbstractUpdateService } from '../abstract-update.service';
import { LanguageDTO } from '../../../adapter/dto/language.dto';

@Injectable()
export class UpdateLanguageService extends AbstractUpdateService<
    Language,
    LanguageKey,
    LanguageDTO
> {
    constructor(protected readonly repository: LanguageDynamooseRepository) {
        super(repository);
    }
}
