import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './entities/customers.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';
import { decrypt, encrypt } from '../encrypt_decrypt';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private customerRepository: Repository<Customers>,
  ) {}
  getCustomers(): Promise<Customers[]> {
    return this.customerRepository.find();
  }
  async getStreet(_id): Promise<Customers> {
    const decryptedText = await decrypt(JSON.parse(_id));
    return await this.customerRepository.findOne({
      select: ['street', 'city'],
      where: [{ id: +decryptedText }],
    });
  }

  async getCustomer(_id): Promise<Customers[]> {
    const decryptedText = await decrypt(JSON.parse(_id));

    return await this.customerRepository.find({
      select: [
        'first_name',
        'last_name',
        'birth_day',
        'user_name',
        'email',
        'phone',
        'street',
        'city',
      ],
      where: [{ id: +decryptedText }],
    });
  }
  async getCustomerByUsername(username: string): Promise<Customers> {
    return await this.customerRepository.findOne({
      select: ['id', 'user_name', 'password'],
      where: [{ user_name: username }],
    });
  }
  async createCustomer(createCustomerDto: CreateCustomerDto) {
    const username = await this.getCustomerByUsername(
      createCustomerDto.user_name,
    );
    const email = await this.customerRepository.find({
      where: [{ email: createCustomerDto.email }],
    });
    if (email.length > 0) {
      return { message: 'This email is already in use!' };
    } else if (username !== null) {
      return { message: 'This username is already in use!' };
    } else {
      const newCustomer = this.customerRepository.create(createCustomerDto);
      this.customerRepository.save(newCustomer);
      const encryptedId = await encrypt(String(newCustomer.id));
      return { encryptedId };
    }
  }

  async updateCustomer(_id, updateCustomerDto: UpdateCustomerDto) {
    const id = +(await decrypt(JSON.parse(_id)));
    return await this.customerRepository.update({ id }, updateCustomerDto);
  }

  // async deleteCustomer(customer: Customer) {
  //   this.customerRepository.delete(customer);
  // }
}
