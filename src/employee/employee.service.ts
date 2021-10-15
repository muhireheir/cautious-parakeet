import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = new Employee();
    employee.name = createEmployeeDto.name;
    employee.dob = createEmployeeDto.dob;
    employee.email = createEmployeeDto.email;
    employee.phone = createEmployeeDto.phone;
    employee.nationalId = createEmployeeDto.nationalId;
    employee.password = createEmployeeDto.password;
    employee.position = createEmployeeDto.position;
    employee.code = createEmployeeDto.code;
    return employee.save();
  }
  async findOne(id: string) {
    return Employee.findOne(id);
  }
  async findByEmail(email: string) {
    return Employee.findOne({ where: { email } });
  }
  async findByProps(email: string, phone: string, nationalId: string) {
    return Employee.findOne({
      where: [{ email }, { phone }, { nationalId }],
    });
  }
}
