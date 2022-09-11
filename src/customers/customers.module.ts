import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './entities/customers.entity';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Customers])],
  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
