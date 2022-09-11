import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @MinLength(2)
  first_name: string;

  @IsNotEmpty()
  @MinLength(2)
  last_name: string;

  @IsNotEmpty()
  @IsDateString()
  birth_day: string;

  @IsNotEmpty()
  @MinLength(2)
  user_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @MinLength(4)
  street: string;

  @IsNotEmpty()
  @MinLength(3)
  city: string;

  @IsNotEmpty()
  @IsDateString()
  register_date: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
