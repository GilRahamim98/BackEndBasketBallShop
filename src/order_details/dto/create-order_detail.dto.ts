import { IsNotEmpty } from 'class-validator';
export class CreateOrderDetailDto {
  @IsNotEmpty()
  order_id: number;
  @IsNotEmpty()
  item_id: number;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  unit_price: number;
}
