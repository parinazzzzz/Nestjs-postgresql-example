import { Controller, Post, Body, Get } from '@nestjs/common';
import { SupplierEntity } from './entity/supplier/supplier.entity';
import { CreateSupplierDto } from './dto/supplier/create-supplier.dto';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  async create(
    @Body() createSupplierDto: CreateSupplierDto,
  ): Promise<SupplierEntity> {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  async findAll(): Promise<SupplierEntity[]> {
    return this.suppliersService.findAll();
  }
}
