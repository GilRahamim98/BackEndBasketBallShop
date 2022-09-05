import { ItemImagesService } from './item_images.service';
export declare class ItemImagesController {
    private readonly itemImagesService;
    constructor(itemImagesService: ItemImagesService);
    findAll(): Promise<import("./entities/item_images.entity").Item_Images[]>;
    findOne(id: string): Promise<import("./entities/item_images.entity").Item_Images[]>;
}
