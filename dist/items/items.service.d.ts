import { Repository } from 'typeorm';
import { Items } from './entities/items.entity';
export declare class ItemsService {
    private itemsRepository;
    constructor(itemsRepository: Repository<Items>);
    getItems(): Promise<Items[]>;
    getItem(_id: number): Promise<Items[]>;
    getItemByCategory(_id: number): Promise<Items[]>;
}
