import { useEffect, useState } from 'react';
// import { fetchSubjects } from './mockApi';
import TablePage from '@/components/ui/data-table';
import { Subject } from '@/types/subject.type';
import { columns } from './columns';
import { useSubjectStore } from '@/store/useSubjectStore';

const SeeDocument = () => {
  // const [subjects, setSubjects] = useState<Subject[]>([]);
  // const [loading, setLoading] = useState(true);
  const { subjects, loading, fetchSubjects } = useSubjectStore();
  useEffect(() => {
    // fetchSubjects().then((data) => {
    //   setSubjects(data);
    //   setLoading(false);
    fetchSubjects();
    // });
  }, [fetchSubjects]);

  return <TablePage<Subject> title="Danh sách học phần" data={subjects} columns={columns} loading={loading} />;
};

export default SeeDocument;
