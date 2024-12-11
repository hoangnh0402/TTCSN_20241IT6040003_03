import TablePage from '@/components/ui/data-table';
import { Document } from '@/types/document.type';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchDocuments } from './mock-api';
import { documentColumns } from './columns';
import DocumentModal from './document-modal';
import { useDocumentStore } from '@/store/useDocumentStore';
const DocumentList = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // const [documents, setDocuments] = useState<Document[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const { documents, loading, fetchDocumentBySubject } = useDocumentStore();
  useEffect(() => {
    if (id) {
      fetchDocumentBySubject(id);
    }
  }, [id]);

  return (
    <div>
      <TablePage<Document>
        title={`Danh sách tài liệu thuộc học phần: ${id}`}
        data={documents}
        columns={documentColumns}
        loading={loading}
        Modal={DocumentModal}
      />
    </div>
  );
};

export default DocumentList;
