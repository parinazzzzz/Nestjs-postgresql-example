import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class DatabaseModule {
  static forRoot(entities: any[]): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        ConfigModule.forRoot(), // Import the ConfigModule to access configuration values
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule], // Import ConfigModule to inject ConfigService
          useFactory: async (configService: ConfigService) => ({
            type: 'postgres',
            url: 'postgres://postgres:postgres@postgres:5432/postgres', // Use the configuration value for the database URL
            entities,
            synchronize: false,
          }),
          inject: [ConfigService],
        }),
        TypeOrmModule.forFeature(entities),
      ],
    };
  }
}
