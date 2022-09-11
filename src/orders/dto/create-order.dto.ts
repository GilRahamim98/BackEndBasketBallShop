import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  customer_id: number;

  @IsDateString()
  order_date: string;

  @IsDateString()
  shipped_date: string;

  ship_address: string;
}
