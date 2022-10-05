import { Language } from './../../interfaces/language.interface';
import { LanguageDynamooseRepository } from './../../../adapter/repository/language-dynamoose.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateLanguageService {
    constructor(protected readonly repository: LanguageDynamooseRepository) {}

    async createLanguage(item: Language): Promise<Language> {
        await this.repository.create(item);
        return item;
    }
}
