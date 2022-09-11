import { CustomersService } from './customers/customers.service';
export declare class AppService {
    private readonly customerService;
    constructor(customerService: CustomersService);
    validateUser(username: string, pass: string): Promise<{
        encryptedId: {
            iv: string;
            content: string;
        };
        message?: undefined;
    } | {
        message: string;
        encryptedId?: undefined;
    }>;
    registerUser(first_name: string, last_name: string, user_name: string, birth_day: string, email: string, phone: string, city: string, register_date: string, street: string, password: string): Promise<{
        message: string;
        encryptedId?: undefined;
    } | {
        encryptedId: {
            iv: string;
            content: string;
        };
        message?: undefined;
    }>;
}
