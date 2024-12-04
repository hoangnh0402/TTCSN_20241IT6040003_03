import { useEffect, useState } from 'react';

import { User } from '@/types/user.type';
import TablePage from '@/components/ui/data-table';
import { columns } from './columns';
import StudentModal from './student-modal';

const Students = () => {
  const [students, setStudents] = useState<User[]>([]);

  return <TablePage<User> title="Quản lý sinh viên" data={students} columns={columns} Modal={StudentModal} />;
};

export default Students;
