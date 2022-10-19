/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './entities/items.entity';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemImagesModule } from '../item_images/item_images.module';

@Module({
  imports: [TypeOrmModule.forFeature([Items]),ItemImagesModule],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}
