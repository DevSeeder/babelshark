import { NestFactory } from '@nestjs/core';
import { AppModule } from './microservice/adapter/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
