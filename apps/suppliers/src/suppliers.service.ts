import { Injectable } from '@nestjs/common';
import { SuppliersRepository } from './suppliers.repository';
import { SupplierEntity } from './entity/supplier/supplier.entity';
import { CreateSupplierDto } from './dto/supplier/create-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(private readonly suppliersRepository: SuppliersRepository) {}

  async create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity> {
    return this.suppliersRepository.create(createSupplierDto);
  }

  async findAll(): Promise<SupplierEntity[]> {
    return this.suppliersRepository.findSuppliers();
  }
}
