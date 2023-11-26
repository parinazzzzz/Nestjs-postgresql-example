import { Controller, Post, Body } from '@nestjs/common';
import { MeasurementsService } from '../../service/measurement/measurements.service';
import { MeasurementEntity } from '../../entity/measurement/measurement.entity';
import { CreateMeasurementDto } from '../../dto/measurement/create-measurement.dto';

@Controller('measurements')
export class MeasurementsController {
  constructor(private readonly measurementsService: MeasurementsService) {}

  @Post()
  async create(
    @Body() createMeaurementDto: CreateMeasurementDto,
  ): Promise<MeasurementEntity> {
    const { name, symbol } = createMeaurementDto;
    return this.measurementsService.create(name, symbol);
  }
}
