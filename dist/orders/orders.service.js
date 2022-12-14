"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const encrypt_decrypt_1 = require("../encrypt_decrypt");
const order_details_service_1 = require("../order_details/order_details.service");
const items_service_1 = require("../items/items.service");
let OrdersService = class OrdersService {
    constructor(ordersRepository, orderDetailsService, itemsService) {
        this.ordersRepository = ordersRepository;
        this.orderDetailsService = orderDetailsService;
        this.itemsService = itemsService;
    }
    async createOrder(createOrderDto) {
        createOrderDto.customer_id = +(await (0, encrypt_decrypt_1.decrypt)(JSON.parse(String(createOrderDto.customer_id))));
        const newOrder = this.ordersRepository.create(createOrderDto);
        return this.ordersRepository.save(newOrder);
    }
    async getOrders() {
        return await this.ordersRepository.find();
    }
    async getOrdersByCustomer(_id) {
        const decryptedText = await (0, encrypt_decrypt_1.decrypt)(JSON.parse(_id));
        return await this.ordersRepository.find({
            select: {
                id: true,
                order_date: true,
                ship_address: true,
                shipped_date: true,
            },
            where: { customer_id: +decryptedText, order_date: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()) },
        });
    }
    async getCart(_id) {
        const decryptedText = await (0, encrypt_decrypt_1.decrypt)(JSON.parse(_id));
        return await this.ordersRepository.find({
            where: {
                customer_id: +decryptedText,
                order_date: (0, typeorm_2.IsNull)(),
            },
        });
    }
    async update(id, updateOrderDto) {
        const cart = await this.orderDetailsService.getOrderDetailsByOrderId(id);
        for (const orderDetail of cart) {
            await this.itemsService.updateQuantity(orderDetail.item_id, orderDetail.quantity);
        }
        return await this.ordersRepository.update({ id }, updateOrderDto);
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Orders)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        order_details_service_1.OrderDetailsService,
        items_service_1.ItemsService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map