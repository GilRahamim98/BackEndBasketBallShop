import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class Wishlists {
  @PrimaryColumn('int')
  item_id: number;
  @PrimaryColumn('int')
  customer_id: number;
}
