/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items } from './entities/items.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items) private itemsRepository: Repository<Items>,
  ) {}

  async getItems(): Promise<Items[]> {
    return await this.itemsRepository.find();
  }

  async getItem(_id: number): Promise<Items> {
    return await this.itemsRepository.findOne({
      where: [{ id: _id }],
    });
  }
  async getItemByCategory(_id: number): Promise<Items[]> {
    return await this.itemsRepository.find({
      where: [{ category_id: _id }],
    });
  }
}
