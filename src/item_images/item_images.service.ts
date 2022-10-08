/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item_Images } from './entities/item_images.entity';
import { CreateItemImageDto } from './dto/create-item_image.dto';
import { UpdateItemImageDto } from './dto/update-item_image.dto';

@Injectable()
export class ItemImagesService {
  constructor(
    @InjectRepository(Item_Images)
    private itemImageRepository: Repository<Item_Images>,
  ) {}

  async getItems(): Promise<Item_Images[]> {
    return await this.itemImageRepository.find();
  }

  // async getItemImages(_id: number): Promise<Item_Images[]> {
  //   return await this.itemImageRepository.find({
  //     where: [{ item_id: _id }],
  //   });
  // }
}
