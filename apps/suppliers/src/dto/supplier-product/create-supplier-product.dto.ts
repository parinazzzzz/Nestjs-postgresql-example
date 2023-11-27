import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSupplierProductDto {
  //   @ApiProperty()
  //   @IsNumber()
  //   @IsNotEmpty()
  //   productId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  supplierId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
