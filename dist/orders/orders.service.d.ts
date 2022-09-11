import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Orders } from './entities/order.entity';
import { OrderDetailsService } from '../order_details/order_details.service';
import { ItemsService } from '../items/items.service';
export declare class OrdersService {
    private ordersRepository;
    private orderDetailsService;
    private itemsService;
    constructor(ordersRepository: Repository<Orders>, orderDetailsService: OrderDetailsService, itemsService: ItemsService);
    createOrder(createOrderDto: CreateOrderDto): Promise<Orders>;
    getOrders(): Promise<Orders[]>;
    getOrdersByCustomer(_id: any): Promise<Orders[]>;
    getCart(_id: any): Promise<Orders[]>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
}
