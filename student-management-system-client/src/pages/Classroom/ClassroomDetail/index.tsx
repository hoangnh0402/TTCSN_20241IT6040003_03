/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import TablePage from '@/components/ui/data-table';
import { Enrollment } from '@/types/enrollment.type';
import { columns, transformData } from './columns';
import { useParams } from 'react-router-dom';
import { classInforColumns, transformDataSubject } from './classInforColumns';
import { Subject } from '@/types/subject.type';
import { fetchById } from '@/services/enrollment.api';
import { fetchSubjects } from '@/services/subject.api';
import { getClassroomById } from '@/services/classroom.api';
import { fetchStudents } from '@/services/student.api';

const ClassroomDetail = () => {
  const { classroomCode } = useParams<{ classroomCode: string }>();
  const [data, setData] = useState<any[]>([]);
  const [dataSubject, setDataSubject] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [classroomName, setClassroomName] = useState<any>(null);
  const getData = async () => {
    try {
      if (classroomCode) {
        const enrollments = await fetchById(classroomCode);
        const students = await fetchStudents();
        const transformedData = transformData(enrollments, students);
        setData(transformedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  const getDataSubject = async () => {
    try {
      const subjects = await fetchSubjects();
      const classroom = await getClassroomById(classroomCode as string);
      setClassroomName(classroom);
      const subject = transformDataSubject(subjects, classroom);
      setDataSubject(subject);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
    getDataSubject();
  }, []);

  return (
    <>
      <TablePage<Subject>
        title={`Danh sách lớp: ${classroomName?.code}`}
        data={dataSubject}
        columns={classInforColumns}
        loading={loading}
        hasToolbar={false}
        hasPagination={false}
      />
      <br />
      <TablePage<Enrollment> title="" data={data} columns={columns} loading={loading} />
    </>
  );
};

export default ClassroomDetail;
