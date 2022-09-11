import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { OrderDetailsService } from './order_details.service';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';

@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post()
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(createOrderDetailDto);
  }

  @Get(':id')
  getOrderDetailsById(@Param('id') id) {
    return this.orderDetailsService.getOrderDetailsByOrderId(+id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.orderDetailsService.findOne(+id);
  // }

  @Put(':order_id/:item_id')
  update(
    @Param('order_id') order_id,
    @Param('item_id') item_id,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return this.orderDetailsService.update(
      +order_id,
      +item_id,
      updateOrderDetailDto,
    );
  }

  @Delete(':order_id/:item_id')
  remove(@Param('order_id') order_id, @Param('item_id') item_id) {
    return this.orderDetailsService.remove(+order_id, +item_id);
  }
}
