import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  customer_id: number;

  @Column('datetime', { nullable: true })
  order_date: string;

  @Column('datetime', { nullable: true })
  shipped_date: string;

  @Column('varchar', { length: 45 })
  ship_address: string;
}
