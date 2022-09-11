import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDetailDto } from './create-order_detail.dto';

export class UpdateOrderDetailDto extends PartialType(CreateOrderDetailDto) {
  readonly order_id: number;
  readonly item_id: number;
  readonly quantity: number;
  readonly unit_price: number;
}
