import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { Order_Details } from './entities/order_detail.entity';
export declare class OrderDetailsService {
    private orderDetailsRepository;
    constructor(orderDetailsRepository: Repository<Order_Details>);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<Order_Details>;
    getOrderDetailsByOrderId(_id: any): Promise<Order_Details[]>;
    update(order_id: number, item_id: number, updateOrderDetailDto: UpdateOrderDetailDto): Promise<import("typeorm").UpdateResult>;
    remove(order_id: number, item_id: number): Promise<import("typeorm").DeleteResult>;
}
