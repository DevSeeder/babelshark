import { SymbolSchema } from '../../domain/schemas/symbols.schema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../../domain/services/app.service';
import configuration from '../../../config/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        DynamooseModule.forFeature([{ name: 'Symbol', schema: SymbolSchema }])
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class SymbolsModule {}
