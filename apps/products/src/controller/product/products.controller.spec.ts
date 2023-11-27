import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from '../../service/product/products.service';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductEntity } from '../../entity/product/product.entity';

describe('ProductsController', () => {
  let controller: ProductsController;
  let productService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    productService = module.get<ProductsService>(ProductsService);
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const createProductDto: CreateProductDto = {
        name: 'Product 1',
        measurement: {
          name: 'Measurement 1',
          symbol: 'Symbol 1',
        },
        stock: 1,
        category: { name: 'vegetables' },
        supplierProducts: [
          {
            supplierId: 1,
            price: 20,
          },
        ],
      };
      createProductDto.measurement.name = 'Measurement 1';
      createProductDto.measurement.symbol = 'Symbol 1';

      const expectedProduct: ProductEntity = {
        id: 1,
        name: 'Product 1',
        measurement: {
          id: 1,
          name: 'Measurement 1',
          symbol: 'Symbol 1',
        },
        stock: 1,
        category: { id: 1, name: 'vegetables' },
        supplierProducts: [
          {
            id: 1,
            product: 1,
            supplier: 1,
            price: 20,
          },
        ],
      };

      (productService.create as jest.Mock).mockImplementation(() => {
        return Promise.resolve(expectedProduct);
      });

      const result = await controller.create(createProductDto);

      expect(productService.create).toHaveBeenCalledWith(
        'Product 1',
        expect.objectContaining({
          name: 'Measurement 1',
          symbol: 'Symbol 1',
        }),
      );
      expect(result).toEqual(expectedProduct);
    });
  });
});
