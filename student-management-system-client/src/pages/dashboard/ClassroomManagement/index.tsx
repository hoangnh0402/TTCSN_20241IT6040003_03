import { useState } from 'react';

import TablePage from '@/components/ui/data-table';
import { Classroom } from '@/types/classroom.type';
import ClassroomModal from './classroom-modal';
import { columns } from './columns';

const ClassroomManagement = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);

  return <TablePage<Classroom> title="Quản lý lớp học" data={classrooms} columns={columns} Modal={ClassroomModal} />;
};

export default ClassroomManagement;
