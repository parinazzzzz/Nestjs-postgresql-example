import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { ProductsService } from '../../service/product/products.service';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductEntity } from '../../entity/product/product.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  async findAll(): Promise<ProductEntity[]> {
    return this.productsService.findAll();
  }

  @Patch(':id/stock')
  @ApiOperation({ summary: 'increment or decreement the stock number' })
  async updateStockNumber(
    @Param('id') id: number,
    @Body('stockNumber') stockNumber: number,
  ): Promise<{ message: string }> {
    await this.productsService.updateStockNumber(id, stockNumber);
    return { message: 'Stock number updated successfully' };
  }
}
