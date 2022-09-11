import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  readonly first_name?: string;
  readonly last_name?: string;
  readonly birth_day?: string;
  readonly phone?: string;
  readonly city?: string;
  readonly street?: string;
}
