import { Class } from '@/types/class.type';
import { Department } from '@/types/department.type';
import { Enrollment } from '@/types/enrollment.type';

export interface User {
  id: string;
  classId?: string;
  username: string;
  password?: string;
  email?: string;
  phoneNumber?: string;
  fullname: string;
  gender: string;
  avatar?: string;
  dateOfBirth?: string;
  address?: string;
  role: string;
  craetedAt?: string;

  enrollments?: Enrollment[];
  department?: Department;
  class?: Class;
}
