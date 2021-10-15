import { Controller, Post, Body } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { randomInt } from 'crypto';
import { hash } from 'bcrypt';
import { positions } from './entities/employee.entity';

@Controller({ path: 'employee', version: '1' })
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const code = 'EMP' + randomInt(0, 1000000).toString().slice(0, 4);
    const password = await hash(createEmployeeDto.password, 10);
    const employeeDto = {
      ...createEmployeeDto,
      password,
      position: positions.MANAGER,
      code,
      dob: new Date(createEmployeeDto.dob),
    };
    return this.employeeService.create(employeeDto);
  }
}
