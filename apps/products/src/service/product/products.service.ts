import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repository/product/products.repository';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../../entity/product/product.entity';
import { MeasurementEntity } from '../../entity/measurement/measurement.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductRepository) {}

  // async create({ name, measurement }): Promise<ProductEntity> {
  //   return this.productsRepository.createProduct(name, measurement);
  // }

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    return this.productsRepository.createProduct(createProductDto);
  }

  async findAll(): Promise<ProductEntity[]> {
    return this.productsRepository.findProducts();
  }

  async updateStockNumber(id: number, stockNumber: number): Promise<void> {
    return this.productsRepository.updateStock(id, stockNumber);
  }
}
