import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<import("./entities/items.entity").Items[]>;
    findOne(id: string): Promise<import("./entities/items.entity").Items[]>;
}
