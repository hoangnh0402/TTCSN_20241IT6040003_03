import React, { useEffect, useState } from 'react';
import TablePage from '@/components/ui/data-table';

const StudentDetail: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {}, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{/* <TablePage data={data} columns={columns} title="Danh sách các lớp học" /> */}</div>;
};

export default StudentDetail;
