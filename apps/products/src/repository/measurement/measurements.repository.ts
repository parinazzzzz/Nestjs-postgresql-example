import { Injectable } from '@nestjs/common';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { MeasurementEntity } from '../../entity/measurement/measurement.entity';
import { CreateMeasurementDto } from '../../dto/measurement/create-measurement.dto';

@EntityRepository(MeasurementEntity)
@Injectable()
export class MeasurementRepository extends Repository<MeasurementEntity> {
  constructor(private dataSource: DataSource) {
    super(MeasurementEntity, dataSource.createEntityManager());
    this.dataSource = dataSource;
  }

  async createMeasurement({
    name,
    symbol,
  }: CreateMeasurementDto): Promise<MeasurementEntity> {
    const measurement = new MeasurementEntity();
    measurement.name = name;

    measurement.symbol = symbol;
    return this.save(measurement);
  }
}
