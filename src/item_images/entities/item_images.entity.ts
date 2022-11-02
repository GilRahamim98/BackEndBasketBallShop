/* eslint-disable prettier/prettier */
import { Items } from '../../items/entities/items.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Item_Images {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column('int')
  // item_id: number;
  @ManyToOne(() => Items, (item) => item.images)
  item_: Items;

  @Column('varchar', { length: 300 })
  image_src: string;
}