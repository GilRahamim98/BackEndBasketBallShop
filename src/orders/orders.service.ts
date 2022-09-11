import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Orders } from './entities/order.entity';
import { decrypt, encrypt } from '../encrypt_decrypt';
import { OrderDetailsService } from '../order_details/order_details.service';
import { ItemsService } from '../items/items.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders) private ordersRepository: Repository<Orders>,
    private orderDetailsService: OrderDetailsService,
    private itemsService: ItemsService,
  ) {}
  async createOrder(createOrderDto: CreateOrderDto) {
    createOrderDto.customer_id = +(await decrypt(
      JSON.parse(String(createOrderDto.customer_id)),
    ));
    const newOrder = this.ordersRepository.create(createOrderDto);

    return this.ordersRepository.save(newOrder);
  }

  async getOrders(): Promise<Orders[]> {
    return await this.ordersRepository.find();
  }
  async getOrdersByCustomer(_id): Promise<Orders[]> {
    const decryptedText = await decrypt(JSON.parse(_id));

    return await this.ordersRepository.find({
      select: {
        id: true,
        order_date: true,
        ship_address: true,
        shipped_date: true,
      },
      where: { customer_id: +decryptedText, order_date: Not(IsNull()) },
    });
  }
  async getCart(_id): Promise<Orders[]> {
    const decryptedText = await decrypt(JSON.parse(_id));

    return await this.ordersRepository.find({
      where: {
        customer_id: +decryptedText,
        order_date: IsNull(),
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const cart = await this.orderDetailsService.getOrderDetailsByOrderId(id);
    for (const orderDetail of cart) {
      await this.itemsService.updateQuantity(
        orderDetail.item_id,
        orderDetail.quantity,
      );
    }

    return await this.ordersRepository.update({ id }, updateOrderDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
