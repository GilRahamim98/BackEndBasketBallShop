import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { ItemsService } from '../items/items.service';
export declare class CategoriesService {
    private categoryRepository;
    private readonly itemsService;
    constructor(categoryRepository: Repository<Category>, itemsService: ItemsService);
    getCategories(): Promise<Category[]>;
    getCategory(_id: number): any;
}
