import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { SupplierProductEntity } from '../supplier-product/supplier-product.entity';

@Entity({ name: 'suppliers' })
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @OneToMany(
  //   () => SupplierProductEntity,
  //   (supplierProduct) => supplierProduct.supplier,
  //   { cascade: true },
  // )
  // @JoinColumn({ referencedColumnName: 'supplier_id' })
  // supplierProducts: SupplierProductEntity[];
}
