import { Injectable } from '@nestjs/common';
import { MeasurementRepository } from '../../repository/measurement/measurements.repository';
import { MeasurementEntity } from '../../entity/measurement/measurement.entity';

@Injectable()
export class MeasurementsService {
  constructor(private readonly measurementRepository: MeasurementRepository) {}

  async create(name: string, symbol: string): Promise<MeasurementEntity> {
    const measurement = new MeasurementEntity();
    measurement.name = name;
    measurement.symbol = symbol;

    return this.measurementRepository.createMeasurement(measurement);
  }
}
