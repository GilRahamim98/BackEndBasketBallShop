import { OrderDetailsService } from './order_details.service';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
export declare class OrderDetailsController {
    private readonly orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    create(createOrderDetailDto: CreateOrderDetailDto): Promise<import("./entities/order_detail.entity").Order_Details>;
    getOrderDetailsById(id: any): Promise<import("./entities/order_detail.entity").Order_Details[]>;
    update(order_id: any, item_id: any, updateOrderDetailDto: UpdateOrderDetailDto): Promise<import("typeorm").UpdateResult>;
    remove(order_id: any, item_id: any): Promise<import("typeorm").DeleteResult>;
}
