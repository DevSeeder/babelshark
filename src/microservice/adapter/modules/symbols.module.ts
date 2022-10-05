import { SymbolSchema } from '../../domain/schemas/symbols.schema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';
import { SymbolsController } from '../controllers/symbols.controller';
import { CreateSymbolService } from '../../domain/services/symbols/create-symbol.service';
import configuration from '../../../config/configuration';
import { SymbolDynamooseRepository } from '../repository/symbol-dynamoose.repository';
import { UpdateSymbolService } from '../../domain/services/symbols/update-symbol.service';
import { GetSymbolService } from '../../domain/services/symbols/get-symbol.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        DynamooseModule.forFeature([{ name: 'symbols', schema: SymbolSchema }])
    ],
    controllers: [SymbolsController],
    providers: [
        CreateSymbolService,
        UpdateSymbolService,
        GetSymbolService,
        SymbolDynamooseRepository
    ]
})
export class SymbolsModule {}
