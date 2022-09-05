import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 45 })
  item_name: string;

  @Column('int')
  category_id: number;

  @Column('varchar', { length: 300 })
  description: string;

  @Column('double')
  unit_price: number;

  @Column('smallint')
  units_in_stock: number;
}
