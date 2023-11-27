import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repository/product/products.repository';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductEntity } from '../../entity/product/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductRepository) {}

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
