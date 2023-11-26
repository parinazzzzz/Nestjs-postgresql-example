import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMeasurementDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  symbol: string;
}
