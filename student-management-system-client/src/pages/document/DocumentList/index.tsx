import TablePage from '@/components/ui/data-table';
import { Document } from '@/types/document.type';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDocuments } from './mock-api';
import { documentColumns } from './columns';
import { AddDocumentModal } from './document-modal';
const DocumentList = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchDocuments(id).then((data) => {
        setDocuments(data);
        setLoading(false);
      });
    }
  }, [id]);

  return (
    <div>
      <TablePage<Document>
        title={`Danh sách tài liệu thuộc học phần: ${id}`}
        data={documents}
        columns={documentColumns}
        loading={loading}
        Modal={AddDocumentModal}
      ></TablePage>
    </div>
  );
};

export default DocumentList;
