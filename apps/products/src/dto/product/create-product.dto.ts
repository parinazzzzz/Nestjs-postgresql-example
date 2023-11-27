import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateMeasurementDto } from '../measurement/create-measurement.dto';
import { CreateCategoryDto } from '../category/create-category.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSupplierProductDto } from 'apps/suppliers/src/dto/supplier-product/create-supplier-product.dto';

export class CreateProductDto {
  @ApiProperty({
    example: 'carrot',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 10,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @ApiProperty({
    example: {
      id: 1,
      name: 'killo',
      symbol: 'k',
    },
    required: true,
  })
  @IsNotEmpty()
  measurement: CreateMeasurementDto;

  @ApiProperty({
    example: {
      id: 1,
      name: 'vegetables',
    },
    required: true,
  })
  @IsNotEmpty()
  category: CreateCategoryDto;

  @ApiProperty({ type: () => [CreateSupplierProductDto] })
  supplierProducts: CreateSupplierProductDto[];
}
