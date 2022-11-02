import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './customers/entities/customers.entity';
import { ItemsModule } from './items/items.module';
import { Items } from './items/entities/items.entity';
import { ItemImagesModule } from './item_images/item_images.module';
import { Item_Images } from './item_images/entities/item_images.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/entities/order.entity';
import { OrderDetailsModule } from './order_details/order_details.module';
import { Order_Details } from './order_details/entities/order_detail.entity';
import { WishlistsModule } from './wishlists/wishlists.module';
import { Wishlists } from './wishlists/entities/wishlist.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freesqldatabase.com',
      port: 3306,
      username: 'sql12536101',
      password: '4UJJM6fIim',
      database: 'sql12536101',
      entities: [
        Customers,
        Items,
        Item_Images,
        Category,
        Orders,
        Order_Details,
        Wishlists,
      ],
      synchronize: false,
    }),
    CustomersModule,
    ItemsModule,
    ItemImagesModule,
    CategoriesModule,
    OrdersModule,
    OrderDetailsModule,
    WishlistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
