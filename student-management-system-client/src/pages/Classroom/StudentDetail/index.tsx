import React, { useEffect, useState } from 'react';
import TablePage from '@/components/ui/data-table';
import { useParams } from 'react-router-dom';
import { useClassroomStore } from '@/store/useClassroomStore';
import { useSubjectStore } from '@/store/useSubjectStore';
import { columns, transformData } from './columns';

const StudentDetail: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { classrooms, getClassroomByStudent } = useClassroomStore();
  const { subjects, fetchSubjects } = useSubjectStore();

  console.log('asdasdasdas', classrooms);
  const { username } = useParams();
  const getData = async () => {
    try {
      if (username) {
        await getClassroomByStudent(username);
        await fetchSubjects();
        const transformedData = transformData(subjects, classrooms);
        setData(transformedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TablePage data={data} columns={columns} title="Chi tiết thông tin sinh viên " />{' '}
    </div>
  );
};

export default StudentDetail;
