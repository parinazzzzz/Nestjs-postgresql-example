import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { SuppliersRepository } from './repository/supplier/suppliers.repository';
import { SuppliersService } from './service/supplier/suppliers.service';
import { SuppliersController } from './controller/supplier/supplier.controller';
import { SupplierEntity } from './entity/supplier/supplier.entity';
import { SupplierProductEntity } from './entity/supplier-product/supplier-product.entity';
import { ProductEntity } from 'apps/products/src/entity/product/product.entity';
import { CategoryEntity } from 'apps/products/src/entity/category/category.entity';
import { MeasurementEntity } from 'apps/products/src/entity/measurement/measurement.entity';
@Module({
  imports: [
    DatabaseModule.forRoot([
      SupplierEntity,
      SupplierProductEntity,
      SuppliersRepository,
      ProductEntity,
      CategoryEntity,
      MeasurementEntity,
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [SuppliersController],
  providers: [SuppliersService, SuppliersRepository],
})
export class SuppliersModule {}
