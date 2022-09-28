import { SymbolSchema } from '../../domain/schemas/symbols.schema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';
import { SymbolsController } from '../controllers/app.controller';
import { CreateSymbolService } from '../../domain/services/symbols/create-symbol.service';
import configuration from '../../../config/configuration';
import { SymbolDynamooseRepository } from '../repository/symbol-dynamoose.repository';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        DynamooseModule.forFeature([{ name: 'Symbol', schema: SymbolSchema }])
    ],
    controllers: [SymbolsController],
    providers: [CreateSymbolService, SymbolDynamooseRepository]
})
export class SymbolsModule {}
