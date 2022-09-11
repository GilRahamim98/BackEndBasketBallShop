import { Injectable } from '@nestjs/common';
import { CustomersService } from './customers/customers.service';
import * as bcrypt from 'bcrypt';
import { encrypt } from './encrypt_decrypt';
const saltOrRounds = 10;

@Injectable()
export class AppService {
  constructor(private readonly customerService: CustomersService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.customerService.getCustomerByUsername(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const encryptedId = await encrypt(String(user.id));
      return { encryptedId };
    }
    return { message: 'Password or Username are not correct!' };
  }

  async registerUser(
    first_name: string,
    last_name: string,
    user_name: string,
    birth_day: string,
    email: string,
    phone: string,
    city: string,
    register_date: string,
    street: string,
    password: string,
  ) {
    return this.customerService.createCustomer({
      first_name,
      last_name,
      birth_day,
      user_name,
      email,
      phone,
      street,
      city,
      register_date,
      password: await bcrypt.hash(password, saltOrRounds),
    });
  }
}
