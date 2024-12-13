import { User } from '@/types/user.type';
import TablePage from '@/components/ui/data-table';
import { columns } from './columns';
import StudentModal from './student-modal';
import { useEffect } from 'react';
import { useStudentStore } from '@/store/useStudentStore';

const StudentManagement = () => {
  const { students, loading, fetchStudents } = useStudentStore();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);
  console.log('first', students);
  return (
    <TablePage<User>
      title="Quản lý sinh viên"
      data={students}
      columns={columns}
      Modal={StudentModal}
      loading={loading}
    />
  );
};

export default StudentManagement;
