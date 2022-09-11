import { WishlistsService } from './wishlists.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    findOne(id: any): Promise<import("./entities/wishlist.entity").Wishlists[]>;
    create(createWishlistDto: CreateWishlistDto): Promise<import("./entities/wishlist.entity").Wishlists>;
    deleteItemFromWishList(customer_id: any, item_id: any): Promise<import("typeorm").DeleteResult>;
}
