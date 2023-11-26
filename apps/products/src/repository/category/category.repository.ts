import { Injectable } from '@nestjs/common';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import { CreateCategoryDto } from '../../dto/category/create-category.dto';
import { CategoryEntity } from '../../entity/category/category.entity';

@EntityRepository(CategoryEntity)
@Injectable()
export class CategoryRepository extends Repository<CategoryEntity> {
  constructor(private dataSource: DataSource) {
    super(CategoryEntity, dataSource.createEntityManager());
    this.dataSource = dataSource;
  }

  async createcategory({ name }: CreateCategoryDto): Promise<CategoryEntity> {
    const category = new CategoryEntity();
    category.name = name;
    return this.save(category);
  }
}
