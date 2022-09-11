import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { decrypt } from '../encrypt_decrypt';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlists } from './entities/wishlist.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlists)
    private wishlistRepository: Repository<Wishlists>,
  ) {}

  findAll() {
    return this.wishlistRepository.find();
  }

  async findOne(customer_id) {
    const decryptedText = +(await decrypt(JSON.parse(customer_id)));

    return this.wishlistRepository.find({
      where: { customer_id: decryptedText },
    });
  }

  async create(createWishlistDto: CreateWishlistDto) {
    const customer_id = +(await decrypt(
      JSON.parse(String(createWishlistDto.customer_id)),
    ));
    createWishlistDto.customer_id = customer_id;
    const newWishlist = this.wishlistRepository.create(createWishlistDto);
    return this.wishlistRepository.save(newWishlist);
  }
  async remove(customer_id: string, item_id: number) {
    const decryptedText = +(await decrypt(JSON.parse(customer_id)));

    return this.wishlistRepository.delete({
      customer_id: decryptedText,
      item_id,
    });
  }
}
