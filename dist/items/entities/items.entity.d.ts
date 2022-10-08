import { Item_Images } from '../../item_images/entities/item_images.entity';
export declare class Items {
    id: number;
    item_name: string;
    category_id: number;
    description: string;
    unit_price: number;
    units_in_stock: number;
    images: Item_Images[];
}
