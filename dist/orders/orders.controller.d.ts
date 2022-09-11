import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").Orders>;
    findAll(): Promise<import("./entities/order.entity").Orders[]>;
    findOne(id: any): Promise<import("./entities/order.entity").Orders[]>;
    getCart(id: any): Promise<import("./entities/order.entity").Orders[]>;
    update(order_id: any, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
}
