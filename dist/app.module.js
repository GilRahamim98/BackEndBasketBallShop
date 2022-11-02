"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const customers_module_1 = require("./customers/customers.module");
const typeorm_1 = require("@nestjs/typeorm");
const customers_entity_1 = require("./customers/entities/customers.entity");
const items_module_1 = require("./items/items.module");
const items_entity_1 = require("./items/entities/items.entity");
const item_images_module_1 = require("./item_images/item_images.module");
const item_images_entity_1 = require("./item_images/entities/item_images.entity");
const categories_module_1 = require("./categories/categories.module");
const category_entity_1 = require("./categories/entities/category.entity");
const orders_module_1 = require("./orders/orders.module");
const order_entity_1 = require("./orders/entities/order.entity");
const order_details_module_1 = require("./order_details/order_details.module");
const order_detail_entity_1 = require("./order_details/entities/order_detail.entity");
const wishlists_module_1 = require("./wishlists/wishlists.module");
const wishlist_entity_1 = require("./wishlists/entities/wishlist.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'sql12.freesqldatabase.com',
                port: 3306,
                username: 'sql12536101',
                password: '4UJJM6fIim',
                database: 'sql12536101',
                entities: [
                    customers_entity_1.Customers,
                    items_entity_1.Items,
                    item_images_entity_1.Item_Images,
                    category_entity_1.Category,
                    order_entity_1.Orders,
                    order_detail_entity_1.Order_Details,
                    wishlist_entity_1.Wishlists,
                ],
                synchronize: false,
            }),
            customers_module_1.CustomersModule,
            items_module_1.ItemsModule,
            item_images_module_1.ItemImagesModule,
            categories_module_1.CategoriesModule,
            orders_module_1.OrdersModule,
            order_details_module_1.OrderDetailsModule,
            wishlists_module_1.WishlistsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map