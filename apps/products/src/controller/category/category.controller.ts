import { Controller, Post, Body } from '@nestjs/common';
import { CategoriesService } from '../../service/category/category.service';
import { CategoryEntity } from '../../entity/category/category.entity';
import { CreateCategoryDto } from '../../dto/category/create-category.dto';

@Controller('categories')
export class categoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryEntity> {
    const { name } = createCategoryDto;
    return this.categoriesService.create(name);
  }
}
