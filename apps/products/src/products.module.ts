import { Module } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ProductsController } from './controller/product/products.controller';
import { ProductsService } from './service/product/products.service';
import { DatabaseModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { ProductRepository } from './repository/product/products.repository';
import { ProductEntity } from './entity/product/product.entity';
import { MeasurementEntity } from './entity/measurement/measurement.entity';
import { MeasurementsController } from './controller/measurement/meaurements.controller';
import { MeasurementsService } from './service/measurement/measurements.service';
import { MeasurementRepository } from './repository/measurement/measurements.repository';
import { CategoryEntity } from './entity/category/category.entity';
import { categoriesController } from './controller/category/category.controller';
import { CategoriesService } from './service/category/category.service';
import { CategoryRepository } from './repository/category/category.repository';

@Module({
  imports: [
    DatabaseModule.forRoot([
      ProductEntity,
      ProductRepository,
      MeasurementEntity,
      MeasurementRepository,
      CategoryEntity,
      CategoryRepository,
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    SwaggerModule.forRoot({
      routePrefix: 'api-docs',
      swaggerOptions: {
        docExpansion: 'none',
        info: {
          title: 'Your API Title',
          description: 'Your API Description',
        },
      },
      swaggerPath: 'swagger.json',
    }),
  ],
  controllers: [
    ProductsController,
    MeasurementsController,
    categoriesController,
  ],
  providers: [
    ProductsService,
    ProductRepository,
    MeasurementsService,
    MeasurementRepository,
    CategoriesService,
    CategoryRepository,
  ],
})
export class ProductsModule {}
