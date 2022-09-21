import { CustomersService } from './customers.service';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<import("./entities/customers.entity").Customers[]>;
    findOne(id: string): Promise<import("./entities/customers.entity").Customers[]>;
    getCusomterStreet(id: string): Promise<import("./entities/customers.entity").Customers>;
    updateCustomer(id: any, updateCustomerDto: UpdateCustomerDto): Promise<import("typeorm").UpdateResult>;
    updatePassword(id: any, password: any): Promise<{
        message: string;
        goodMessage?: undefined;
    } | {
        goodMessage: string;
        message?: undefined;
    }>;
}
