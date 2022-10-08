/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { query } from 'express';
import { Items } from './entities/items.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.getItems();
  }

  @Get('search')
  findSearched(@Query('Search') searchValue: string): Promise<Items[]> {
    return this.itemsService.getItemsWithSearch(searchValue);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.getItem(+id);
  }
  // @Get('img/:id')
  // getImages(@Param('id') id: string) {
 
  //   return this.itemsService.getItemImages(+id);
  // }
}
