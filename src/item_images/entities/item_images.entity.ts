import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Item_Images {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  item_id: number;

  @Column('varchar', { length: 300 })
  image_src: string;
}
