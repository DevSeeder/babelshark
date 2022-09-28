import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';

import configuration from '../../../config/configuration';
import { SymbolsModule } from './symbols.module';

@Module({
    imports: [
        SymbolsModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        DynamooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                aws: {
                    accessKeyId: config.get<string>('aws.accessKey'),
                    secretAccessKey: config.get<string>('aws.secretAccessKey'),
                    region: config.get<string>('aws.region')
                }
            })
        })
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
