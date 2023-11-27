import { Injectable } from '@nestjs/common';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { SupplierProductEntity } from '../../entity/supplier-product/supplier-product.entity';
import { CreateSupplierProductDto } from '../../dto/supplier-product/create-supplier-product.dto';

@EntityRepository(SupplierProductEntity)
@Injectable()
export class SuppliersProductsRepository extends Repository<SupplierProductEntity> {
  constructor(private dataSource: DataSource) {
    super(SupplierProductEntity, dataSource.createEntityManager());
    this.dataSource = dataSource;
  }

  async createSupplierProduct(
    createSupplierProductDto: CreateSupplierProductDto,
  ): Promise<SupplierProductEntity> {
    return this.save(createSupplierProductDto);
  }
}
