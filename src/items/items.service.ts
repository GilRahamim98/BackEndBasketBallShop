/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item_Images } from 'src/item_images/entities/item_images.entity';
import { Like, Repository } from 'typeorm';

import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Items } from './entities/items.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items) private itemsRepository: Repository<Items>,
  ) {}

  async getItems(): Promise<Items[]> {
    return await this.itemsRepository.find({
      relations:['images'],
    });
  }
  async getItemsWithSearch(searchValue:string):Promise<Items[]>{
    const searchValueCapitalize=searchValue.replace('"',"").charAt(0).toUpperCase()+searchValue.replace('"',"").slice(1).replace('"',"")
    
    
    return await this.itemsRepository.find({
      where:[{item_name:Like(`%${searchValue}%`)},{description:Like(`%${searchValue}%`)},{item_name:Like(`%${searchValueCapitalize}%`)},{description:Like(`%${searchValueCapitalize}%`)}],
      relations:['images'],

    })
  }
  async updateQuantity(id:number,amount:number){
    const currentItem=await this.itemsRepository.findOne({where:[{id}]})
    currentItem.units_in_stock=currentItem.units_in_stock-amount
    return await this.itemsRepository.save(currentItem)
  }

  // async getItem(_id: number): Promise<Items> {
  //   return await this.itemsRepository.findOne({
  //     where: [{ id: _id }],
  //   });
  // }
  async getItemByCategory(_id: number): Promise<Items[]> {
    return await this.itemsRepository.find({
      where: [{ category_id: _id }],
      relations:['images'],
    });
  }
  async getItem(_id:number):Promise<Items>{

    const item=await this.itemsRepository.findOne({
      where:{id:_id},
      relations:['images'],
    })
    return item
  }
}
