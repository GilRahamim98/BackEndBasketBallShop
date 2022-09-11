import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async findAll() {
    return this.customersService.getCustomers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.getCustomer(id);
  }
  @Get('/street/:id')
  getCusomterStreet(@Param('id') id: string) {
    return this.customersService.getStreet(id);
  }

  @Put(':id')
  updateCustomer(
    @Param('id') id,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.updateCustomer(id, updateCustomerDto);
  }
  @Put('/changePassword/:id')
  updatePassword(@Param('id') id, @Body() password) {
    return this.customersService.updateCustomerPassword(
      id,
      password.oldPassword,
      password.newPassword,
    );
  }
}
