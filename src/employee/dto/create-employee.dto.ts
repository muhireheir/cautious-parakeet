import { IsNotEmpty, IsEmail, MinLength, IsNumber } from 'class-validator';
import { positions } from '../entities/employee.entity';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  nationalId: string;

  @IsNotEmpty()
  @IsNumber()
  phone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
  position?: positions;
  code?: string;
}
