import { CreateOrderDetailDto } from './create-order_detail.dto';
declare const UpdateOrderDetailDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateOrderDetailDto>>;
export declare class UpdateOrderDetailDto extends UpdateOrderDetailDto_base {
    readonly order_id: number;
    readonly item_id: number;
    readonly quantity: number;
    readonly unit_price: number;
}
export {};
