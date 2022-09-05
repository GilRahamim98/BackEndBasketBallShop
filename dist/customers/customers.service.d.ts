import { Repository } from 'typeorm';
import { Customers } from './entities/customers.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomersService {
    private customerRepository;
    constructor(customerRepository: Repository<Customers>);
    getCustomers(): Promise<Customers[]>;
    getCustomer(_id: any): Promise<Customers[]>;
    getCustomerByUsername(username: string): Promise<Customers[]>;
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customers>;
}
