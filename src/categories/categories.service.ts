import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { ItemsService } from '../items/items.service';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private readonly itemsService: ItemsService,
  ) {}

  getCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  getCategory(_id: number) {
    return this.itemsService.getItemByCategory(+_id);
  }
}
