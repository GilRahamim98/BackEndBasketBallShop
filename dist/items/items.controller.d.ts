import { ItemsService } from './items.service';
import { Items } from './entities/items.entity';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Items[]>;
    findSearched(searchValue: string): Promise<Items[]>;
    findOne(id: string): Promise<Items>;
}
