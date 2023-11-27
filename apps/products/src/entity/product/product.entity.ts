import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { MeasurementEntity } from '../measurement/measurement.entity';
import { CategoryEntity } from '../category/category.entity';
import { SupplierProductEntity } from 'apps/suppliers/src/entity/supplier-product/supplier-product.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stock: number;

  @ManyToOne(() => MeasurementEntity)
  @JoinColumn()
  measurement: MeasurementEntity;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn()
  category: CategoryEntity;

  @OneToMany(
    () => SupplierProductEntity,
    (supplierProduct) => supplierProduct.product,
    {
      cascade: true,
    },
  )
  @JoinColumn({ referencedColumnName: 'product_id' })
  supplierProducts!: SupplierProductEntity[];
}
