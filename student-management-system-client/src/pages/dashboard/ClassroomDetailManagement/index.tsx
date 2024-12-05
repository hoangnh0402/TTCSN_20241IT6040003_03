import { useState } from 'react';
import { useParams } from 'react-router-dom';

import TablePage from '@/components/ui/data-table';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { User } from '@/types/user.type';
import AddStudentClassroomModal from './add-student-classroom-modal';
import { columns } from './columns';

const ClassroomDetailManagement = () => {
  const { id } = useParams();
  const [students, setStudents] = useState<User[]>([]);

  return (
    <TablePage<User>
      title="Quản lý sinh viên trong lớp học"
      data={students}
      columns={columns}
      Modal={AddStudentClassroomModal}
    >
      <div>
        <Table className="mt-4 border">
          <TableBody className="bg-white *:*:w-1/4 *:*:border *:*:p-3">
            <TableRow>
              <TableCell>Môn:</TableCell>
              <TableCell></TableCell>
              <TableCell>Trình độ:</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mã lớp độc lập:</TableCell>
              <TableCell></TableCell>
              <TableCell>Số tín chỉ:</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </TablePage>
  );
};

export default ClassroomDetailManagement;
