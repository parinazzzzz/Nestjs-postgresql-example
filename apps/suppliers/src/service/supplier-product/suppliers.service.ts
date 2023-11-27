import { Injectable } from '@nestjs/common';
import { SupplierProductEntity } from '../../entity/supplier-product/supplier-product.entity';
import { CreateSupplierProductDto } from '../../dto/supplier-product/create-supplier-product.dto';
import { SuppliersProductsRepository } from '../../repository/supplier-product/suppliers-products.repository';

@Injectable()
export class SuppliersProductsService {
  constructor(
    private readonly suppliersProductsRepository: SuppliersProductsRepository,
  ) {}

  async create(
    createSupplierProductDto: CreateSupplierProductDto,
  ): Promise<SupplierProductEntity> {
    return this.suppliersProductsRepository.create(createSupplierProductDto);
  }
}
