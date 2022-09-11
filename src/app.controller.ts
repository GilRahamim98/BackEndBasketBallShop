import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCustomerDto } from './customers/dto/create-customer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  checkUser(@Body() userForChecking) {
    return this.appService.validateUser(
      userForChecking.username,
      userForChecking.password,
    );
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto) {
    return this.appService.registerUser(
      createUserDto.first_name,
      createUserDto.last_name,
      createUserDto.user_name,
      createUserDto.birth_day,
      createUserDto.email,
      createUserDto.phone,
      createUserDto.city,
      createUserDto.register_date,
      createUserDto.street,
      createUserDto.password,
    );
  }
}
