import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { EmployeeService } from '../../employee/employee.service';
@Injectable()
export class employeeExists implements NestMiddleware {
  EmployeeService = new EmployeeService();
  async use(req: Request, res: Response, next: NextFunction) {
    const { email, phone, nationalId } = req.body;
    const findEmployee = await this.EmployeeService.findByProps(
      email,
      phone,
      nationalId,
    );
    if (findEmployee) {
      if (findEmployee.phone == phone) {
        return res.status(409).json({
          status: 409,
          message: 'Provided phone number is being used by onother Employee',
        });
      }

      if (findEmployee.email == email) {
        return res.status(409).json({
          status: 409,
          message: 'Provided email is being used by onother Employee',
        });
      }

      if (findEmployee.nationalId == nationalId) {
        return res.status(409).json({
          status: 409,
          message: 'Provided NID is being used by onother Employee',
        });
      }
    }
    return next();
  }
}
