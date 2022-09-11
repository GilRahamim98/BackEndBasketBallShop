import { IsNotEmpty } from 'class-validator';

export class CreateWishlistDto {
  @IsNotEmpty()
  customer_id: number;
  @IsNotEmpty()
  item_id: number;
}
