import { CreateCustomerDto } from './create-customer.dto';
declare const UpdateCustomerDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCustomerDto>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
    readonly first_name?: string;
    readonly last_name?: string;
    readonly birth_day?: string;
    readonly phone?: string;
    readonly city?: string;
    readonly street?: string;
}
export {};
