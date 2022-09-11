import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Get(':id')
  findOne(@Param('id') id) {
    return this.wishlistsService.findOne(id);
  }

  @Post()
  create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistsService.create(createWishlistDto);
  }

  @Delete(':customer_id/:item_id')
  deleteItemFromWishList(
    @Param('customer_id') customer_id,
    @Param('item_id') item_id,
  ) {
    return this.wishlistsService.remove(customer_id, +item_id);
  }
}
