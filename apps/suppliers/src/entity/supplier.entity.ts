import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'suppliers' })
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
