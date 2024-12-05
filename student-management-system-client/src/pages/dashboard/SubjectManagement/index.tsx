import { useState } from 'react';

import TablePage from '@/components/ui/data-table';
import { columns } from './columns';
import { Subject } from '@/types/subject.type';
import SubjectModal from './subject-modal';

const SubjectMangement = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  return <TablePage<Subject> title="Quản lý môn học" data={subjects} columns={columns} Modal={SubjectModal} />;
};

export default SubjectMangement;
