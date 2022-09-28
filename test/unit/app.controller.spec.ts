import { Test, TestingModule } from '@nestjs/testing';
import { SymbolsController } from '../../src/microservice/adapter/controllers/app.controller';
import { CreateSymbolService } from '../../src/microservice/domain/services/symbols/create-symbol.service';

describe('AppController', () => {
    let appController: SymbolsController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [SymbolsController],
            providers: [CreateSymbolService]
        }).compile();

        appController = app.get<SymbolsController>(SymbolsController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
