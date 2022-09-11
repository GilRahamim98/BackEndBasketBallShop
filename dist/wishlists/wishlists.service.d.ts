import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { Wishlists } from './entities/wishlist.entity';
export declare class WishlistsService {
    private wishlistRepository;
    constructor(wishlistRepository: Repository<Wishlists>);
    findAll(): Promise<Wishlists[]>;
    findOne(customer_id: any): Promise<Wishlists[]>;
    create(createWishlistDto: CreateWishlistDto): Promise<Wishlists>;
    remove(customer_id: string, item_id: number): Promise<import("typeorm").DeleteResult>;
}
