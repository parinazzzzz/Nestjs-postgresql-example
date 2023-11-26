import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../repository/category/category.repository';
import { CategoryEntity } from '../../entity/category/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(name: string): Promise<CategoryEntity> {
    const category = new CategoryEntity();
    category.name = name;

    return this.categoryRepository.createcategory(category);
  }
}
