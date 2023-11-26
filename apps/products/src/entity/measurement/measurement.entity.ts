import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'measurements' })
export class MeasurementEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;
}
