import { Repository } from 'typeorm';
import { Customers } from './entities/customers.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersService {
    private customerRepository;
    constructor(customerRepository: Repository<Customers>);
    getCustomers(): Promise<Customers[]>;
    getStreet(_id: any): Promise<Customers>;
    getCustomer(_id: any): Promise<Customers[]>;
    getCustomerByUsername(username: string): Promise<Customers>;
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<{
        message: string;
        encryptedId?: undefined;
    } | {
        encryptedId: {
            iv: string;
            content: string;
        };
        message?: undefined;
    }>;
    getCustomerDetailsWithPassword(_id: any): Promise<Customers>;
    updateCustomer(_id: any, updateCustomerDto: UpdateCustomerDto): Promise<import("typeorm").UpdateResult>;
    checkPassword(customer: any, password: any): Promise<boolean>;
    updateCustomerPassword(_id: any, oldPassword: any, newPassword: any): Promise<Customers | {
        message: string;
    }>;
}
