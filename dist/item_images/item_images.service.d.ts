import { Repository } from 'typeorm';
import { Item_Images } from './entities/item_images.entity';
export declare class ItemImagesService {
    private itemImageRepository;
    constructor(itemImageRepository: Repository<Item_Images>);
    getItems(): Promise<Item_Images[]>;
}
