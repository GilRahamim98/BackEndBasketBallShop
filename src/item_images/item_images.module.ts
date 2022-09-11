import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemImagesService } from './item_images.service';
import { ItemImagesController } from './item_images.controller';
import { Item_Images } from './entities/item_images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item_Images])],
  controllers: [ItemImagesController],
  providers: [ItemImagesService],
})
export class ItemImagesModule {}
