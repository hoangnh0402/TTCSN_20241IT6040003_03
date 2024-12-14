/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import TablePage from '@/components/ui/data-table';
import { Enrollment } from '@/types/enrollment.type';
import { columns, transformData } from './columns';
import { useParams } from 'react-router-dom';
import { classInforColumns, transformDataSubject } from './classInforColumns';
import { useSubjectStore } from '@/store/useSubjectStore';
import { useClassroomStore } from '@/store/useClassroomStore';
import { Subject } from '@/types/subject.type';
import { useEnrollmentStore } from '@/store/useEnrollmentStore';
import { useStudentStore } from '@/store/useStudentStore';

const ClassroomDetail = () => {
  const { classroomCode } = useParams<{ classroomCode: string }>();
  const [data, setData] = useState<any[]>([]);
  const [dataSubject, setDataSubject] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const { subjects, fetchSubjects } = useSubjectStore();
  const { classroom, getClassroomById } = useClassroomStore();
  const { enrollments, fetchEnrollments } = useEnrollmentStore();
  const { students, fetchStudents } = useStudentStore();
  // console.log('ádasdasdasdasd', classroom);
  const getData = async () => {
    try {
      if (classroomCode) {
        await fetchEnrollments(classroomCode);
        console.log('enrollment', enrollments);
        await fetchStudents();
        console.log('users', students);
        const transformedData = transformData(enrollments, students);
        console.log('transsfrom', transformedData);
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
      if (classroom) {
        const subject = transformDataSubject(subjects, classroom);
        // console.log('ádasdasd', subjects);
        setDataSubject(subject);
        // console.log('first', subject);
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
