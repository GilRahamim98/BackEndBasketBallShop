import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Order_Details {
  @PrimaryColumn('int')
  order_id: number;
  @PrimaryColumn('int')
  item_id: number;
  @Column('smallint')
  quantity: number;
  @Column('double')
  unit_price: number;
}
