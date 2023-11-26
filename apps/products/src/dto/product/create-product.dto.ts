import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateMeasurementDto } from '../measurement/create-measurement.dto';
import { CreateCategoryDto } from '../category/create-category.dto';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  measurement: CreateMeasurementDto;

  @IsNotEmpty()
  category: CreateCategoryDto;
}
