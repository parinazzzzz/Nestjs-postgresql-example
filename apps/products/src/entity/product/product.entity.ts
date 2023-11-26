import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MeasurementEntity } from '../measurement/measurement.entity';
import { CategoryEntity } from '../category/category.entity';

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
}
