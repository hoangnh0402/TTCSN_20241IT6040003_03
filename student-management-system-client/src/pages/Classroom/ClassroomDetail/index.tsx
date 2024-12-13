/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import TablePage from '@/components/ui/data-table';
import { Enrollment } from '@/types/enrollment.type';
import { columns, transformData } from './columns';
import { fetchMockEnrollments, fetchMockUser } from './mock-api';
import { useParams } from 'react-router-dom';
import { classInforColumns, transformDataSubject } from './classInforColumns';
import { useSubjectStore } from '@/store/useSubjectStore';
import { useClassroomStore } from '@/store/useClassroomStore';
import { Subject } from '@/types/subject.type';

const ClassroomDetail = () => {
  const { classroomCode } = useParams<{ classroomCode: string }>();
  const [data, setData] = useState<any[]>([]);
  const [dataSubject, setDataSubject] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const { subjects, fetchSubjects } = useSubjectStore();
  const { classroom, getClassroomById } = useClassroomStore();
  // console.log('ádasdasdasdasd', classroom);
  const getData = async () => {
    try {
      const enrollments = await fetchMockEnrollments();
      const users = await fetchMockUser();
      const transformedData = transformData(enrollments, users);
      setData(transformedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  const getDataSubject = async () => {
    try {
      if (classroom) {
        const subject = transformDataSubject(subjects, classroom);
        console.log('ádasdasd', subjects);
        setDataSubject(subject);
        console.log('first', subject);
      } else {
        console.error('Classroom is null');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (classroomCode) {
      getData();
      fetchSubjects();
      getDataSubject();
      getClassroomById(classroomCode);
    } else {
      console.error('classroomCode is undefined');
    }
  }, [classroomCode]);

  return (
    <>
      <TablePage<Subject>
        title={`Danh sách lớp: ${classroom?.code}`}
        data={dataSubject}
        columns={classInforColumns}
        loading={loading}
        hasToolbar={false}
      />
      <br />
      <TablePage<Enrollment> title="" data={data} columns={columns} loading={loading} />
    </>
  );
};

export default ClassroomDetail;
