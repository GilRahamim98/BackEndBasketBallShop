import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Orders } from './entities/order.entity';
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: Repository<Orders>);
    createOrder(createOrderDto: CreateOrderDto): Promise<Orders>;
    getOrders(): Promise<Orders[]>;
    getOrdersByCustomer(_id: any): Promise<Orders[]>;
    getCart(_id: any): Promise<Orders[]>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
}
