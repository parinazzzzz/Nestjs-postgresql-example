import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductRepository } from '../../repository/product/products.repository';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductEntity } from '../../entity/product/product.entity';
import { MeasurementEntity } from '../../entity/measurement/measurement.entity';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: ProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: ProductRepository,
          useValue: {
            createProduct: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<ProductRepository>(ProductRepository);
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

      (repository.createProduct as jest.Mock).mockResolvedValue(
        expectedProduct,
      );

      const result = await service.create(createProductDto);

      expect(repository.createProduct).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Product 1',
          measurement: expect.objectContaining({
            name: 'killo',
            symbol: 'k',
          }),
        }),
      );
      expect(result).toEqual(expectedProduct);
    });
  });
});
