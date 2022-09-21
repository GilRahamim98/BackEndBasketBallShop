/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './entities/customers.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { decrypt, encrypt } from '../encrypt_decrypt';
import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;

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
      const newUser =await  this.customerRepository.create(createCustomerDto);
      const newCustomer=await this.customerRepository.save(newUser);
      const encryptedId = await encrypt(String(newCustomer.id));
      return { encryptedId };
    }
  }
  async getCustomerDetailsWithPassword(_id): Promise<Customers> {
    const decryptedText = await decrypt(JSON.parse(_id));

    return await this.customerRepository.findOne({
      where: [{ id: +decryptedText }],
    });
  }

  async updateCustomer(_id, updateCustomerDto: UpdateCustomerDto) {
    const id = +(await decrypt(JSON.parse(_id)));
    return await this.customerRepository.update({ id }, updateCustomerDto);
  }
  async checkPassword(customer, password) {
    return await bcrypt.compare(password, customer.password);
  }

  async updateCustomerPassword(_id, password) {
    const currentCustomer = await this.getCustomerDetailsWithPassword(_id);
    if (await this.checkPassword(currentCustomer,password.password.oldPassword)) {
      if(password.password.oldPassword===password.password.newPassword){
        return { message: "New Password can not be like the Old Password " }
      }
      currentCustomer.password = await bcrypt.hash(password.password.newPassword, saltOrRounds);
       await this.customerRepository.save(currentCustomer);
       return {goodMessage:"Good"}
    } else {
      return { message: "Old Password doesn't match" };
    }
  }
}
