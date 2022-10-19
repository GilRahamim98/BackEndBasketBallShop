/* eslint-disable prettier/prettier */
import { Item_Images } from '../../item_images/entities/item_images.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

  @OneToMany(()=>Item_Images,(img)=>img.item_)
  images:Item_Images[]


}

