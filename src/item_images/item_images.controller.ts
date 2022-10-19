import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemImagesService } from './item_images.service';
import { CreateItemImageDto } from './dto/create-item_image.dto';
import { UpdateItemImageDto } from './dto/update-item_image.dto';

@Controller('item-images')
export class ItemImagesController {
  constructor(private readonly itemImagesService: ItemImagesService) {}

  @Get()
  findAll() {
    return this.itemImagesService.getItems();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.itemImagesService.getItemImages(+id);
  // }
}
