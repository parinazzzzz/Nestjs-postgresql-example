import { Injectable } from '@nestjs/common';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { ProductEntity } from '../../entity/product/product.entity';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { MeasurementEntity } from '../../entity/measurement/measurement.entity';

@EntityRepository(ProductEntity)
@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(private dataSource: DataSource) {
    super(ProductEntity, dataSource.createEntityManager());
    this.dataSource = dataSource;
  }

  // async createProduct(
  //   name: string,
  //   measurement: MeasurementEntity,
  // ): Promise<ProductEntity> {
  //   const product = new ProductEntity();
  //   product.name = name;
  //   product.measurement = measurement;
  //   return this.save(product);
  // }

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.save(createProductDto);
  }

  async findProducts(): Promise<ProductEntity[]> {
    return this.createQueryBuilder('product')
      .leftJoinAndSelect('product.measurement', 'measurement')
      .leftJoinAndSelect('product.category', 'category')
      .getMany();
  }

  async updateStock(id: number, stockNumber: number): Promise<void> {
    await this.createQueryBuilder()
      .update(ProductEntity)
      .set({ stock: stockNumber })
      .where('id = :id', { id })
      .execute();
  }
}
