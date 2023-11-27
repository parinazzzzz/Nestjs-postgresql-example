import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SupplierEntity } from '../supplier/supplier.entity';
import { ProductEntity } from 'apps/products/src/entity/product/product.entity';

@Entity('SupplierProducts')
export class SupplierProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // product_id!: number;

  // @Column()
  // supplier_id!: number;

  // @ManyToOne(() => SupplierEntity, (supplier) => supplier.supplierProducts)
  // @JoinColumn({ name: 'supplier_id' })
  // supplier: SupplierEntity;

  @ManyToOne(() => SupplierEntity)
  @JoinColumn({ name: 'supplier_id' })
  supplier: number;

  // @ManyToOne(() => ProductEntity, (product) => product.supplierProducts)
  // @JoinColumn({ name: 'product_id' })
  // product: ProductEntity;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'product_id' })
  product: number;

  @Column()
  price: number;
}
