import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { SuppliersModule } from './suppliers.module';

async function bootstrap() {
  const app = await NestFactory.create(SuppliersModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
