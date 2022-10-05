import { LanguageSchema } from './../../domain/schemas/language.schema';
import { LanguageDynamooseRepository } from './../repository/language-dynamoose.repository';
import { UpdateLanguageService } from './../../domain/services/languages/update-language.service';
import { CreateLanguageService } from './../../domain/services/languages/create-language.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';
import configuration from '../../../config/configuration';
import { GetLanguageService } from 'src/microservice/domain/services/languages/get-language.service';
import { LanguagesController } from '../controllers/languages.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        DynamooseModule.forFeature([
            { name: 'languages', schema: LanguageSchema }
        ])
    ],
    controllers: [LanguagesController],
    providers: [
        CreateLanguageService,
        UpdateLanguageService,
        GetLanguageService,
        LanguageDynamooseRepository
    ]
})
export class LanguagesModule {}
