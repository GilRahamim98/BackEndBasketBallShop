import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { Order_Details } from './entities/order_detail.entity';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(Order_Details)
    private orderDetailsRepository: Repository<Order_Details>,
  ) {}
  create(createOrderDetailDto: CreateOrderDetailDto) {
    const newOrderRow =
      this.orderDetailsRepository.create(createOrderDetailDto);
    return this.orderDetailsRepository.save(newOrderRow);
  }

  async getOrderDetailsByOrderId(_id): Promise<Order_Details[]> {
    return await this.orderDetailsRepository.find({
      where: { order_id: _id },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} orderDetail`;
  // }

  async update(
    order_id: number,
    item_id: number,
    updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return await this.orderDetailsRepository.update(
      { order_id, item_id },
      updateOrderDetailDto,
    );
  }

  remove(order_id: number, item_id: number) {
    return this.orderDetailsRepository.delete({ order_id, item_id });
  }
}
