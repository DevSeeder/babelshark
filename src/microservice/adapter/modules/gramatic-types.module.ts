import { UpdateGramaticTypeService } from './../../domain/services/gramatic-types/update-gramatic-type.service';
import { CreateGramaticTypeService } from './../../domain/services/gramatic-types/create-gramatic-type.service';
import { GramaticTypeDynamooseRepository } from './../repository/gramatic-type-dynamoose.repository';
import { GramaticTypeSchema } from '../../domain/schemas/gramatic-type.schema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';
import configuration from '../../../config/configuration';
import { GramaticTypesController } from '../controllers/gramatic-types.controller';
import { GetGramaticTypeService } from './../../domain/services/gramatic-types/get-gramatic-type.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        DynamooseModule.forFeature([
            { name: 'gramaticTypes', schema: GramaticTypeSchema }
        ])
    ],
    controllers: [GramaticTypesController],
    providers: [
        CreateGramaticTypeService,
        UpdateGramaticTypeService,
        GetGramaticTypeService,
        GramaticTypeDynamooseRepository
    ]
})
export class GramaticTypesModule {}
