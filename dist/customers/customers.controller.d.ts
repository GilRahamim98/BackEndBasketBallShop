import { CustomersService } from './customers.service';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<import("./entities/customers.entity").Customers[]>;
    findOne(id: any): Promise<import("./entities/customers.entity").Customers[]>;
}
