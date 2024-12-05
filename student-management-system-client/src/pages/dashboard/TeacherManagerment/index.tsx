import { useState } from 'react';

import TablePage from '@/components/ui/data-table';
import { User } from '@/types/user.type';
import { columns } from './columns';
import TeacherModal from './teacher-modal';

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState<User[]>([]);

  return <TablePage<User> title="Quản lý giảng viên" data={teachers} columns={columns} Modal={TeacherModal} />;
};

export default TeacherManagement;
