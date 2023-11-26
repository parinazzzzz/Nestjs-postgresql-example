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
          name: 'killo',
          symbol: 'k',
        }, // Create an instance of MeasurementEntity with properties
      };

      const expectedProduct: ProductEntity = {
        id: 1,
        name: 'Product 1',
        measurement: {
          id: 2,
          name: 'killo',
          symbol: 'k',
        }, // Create an instance of MeasurementEntity with properties
      };

      (repository.createProduct as jest.Mock).mockResolvedValue(
        expectedProduct,
      );

      const result = await service.create(
        createProductDto.name,
        createProductDto.measurement as MeasurementEntity,
      );

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
