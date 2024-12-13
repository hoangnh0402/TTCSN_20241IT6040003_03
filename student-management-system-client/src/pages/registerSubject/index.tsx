import { useEffect, useState } from 'react';
import TablePage from '@/components/ui/data-table';
import { Subject } from '@/types/subject.type';
import { Classroom } from '@/types/classroom.type';

import { registerSubjectTableColumn } from './registerSubjectTableColumn';
import { registeredSubjectTableColumn } from './registeredSubjectTableColumn';
import { useSubjectStore } from '@/store/useSubjectStore';
import { useClassroomStore } from '@/store/useClassroomStore';
import { AvailableRegisterSubject } from '@/types/registerSubject.type';
import { useRegisterSubjectStore } from '@/store/useRegisterSubjectStore';


const RegisterSubject = () => {
  const { registerSubject, loading, error, fetchRegisterSubjects} = useRegisterSubjectStore();

  const [registeredSubjects, setRegisteredSubjects] = useState<AvailableRegisterSubject[]>([]);

  useEffect(() => {
    fetchRegisterSubjects();
  }, []);

  return (
    <>
      <TablePage<AvailableRegisterSubject> 
        title="Môn đã đăng kí" 
        data={registeredSubjects} 
        columns={registeredSubjectTableColumn} 
        hasToolbar={false}
      />
      <TablePage<AvailableRegisterSubject> 
        title="Đăng kí học phần" 
        data={registerSubject} 
        columns={registerSubjectTableColumn} 
        hasToolbar={false}
        loading={loading}
      />
    </>
  );
};

export default RegisterSubject;