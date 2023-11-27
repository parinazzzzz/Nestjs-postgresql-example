import { Injectable } from '@nestjs/common';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { SupplierEntity } from '../../entity/supplier/supplier.entity';
import { CreateSupplierDto } from '../../dto/supplier/create-supplier.dto';

@EntityRepository(SupplierEntity)
@Injectable()
export class SuppliersRepository extends Repository<SupplierEntity> {
  constructor(private dataSource: DataSource) {
    super(SupplierEntity, dataSource.createEntityManager());
    this.dataSource = dataSource;
  }

  async createSupplier(
    createSupplierDto: CreateSupplierDto,
  ): Promise<SupplierEntity> {
    return this.save(createSupplierDto);
  }

  async findSuppliers(): Promise<SupplierEntity[]> {
    return this.find();
  }
}
