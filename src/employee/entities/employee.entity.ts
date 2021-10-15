import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum employeeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum positions {
  MANAGER = 'MANAGER',
  DEVELOPER = 'DEVELOPER',
  DESIGNER = 'DESIGNER',
  TESTER = 'TESTER',
  DEVOPS = 'DEVOPS',
}

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ length: 16, unique: true })
  nationalId: string;
  @Column({ length: 7, unique: true })
  code: string;
  @Column({ length: 12, unique: true })
  phone: string;
  @Column({ unique: true })
  email: string;
  @Column()
  dob: Date;
  @Column({
    type: 'enum',
    enum: employeeStatus,
    default: employeeStatus.INACTIVE,
  })
  status: employeeStatus;
  @Column({
    type: 'enum',
    enum: positions,
    default: null,
  })
  position: positions;
  @Column({ default: null })
  password: string;
  @Column({ default: null })
  passwordResetCode: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
