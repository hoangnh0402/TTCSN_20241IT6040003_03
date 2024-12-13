import TablePage from '@/components/ui/data-table';
import { Document } from '@/types/document.type';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { documentColumns } from './columns';
import DocumentModal from './document-modal';
import { useDocumentStore } from '@/store/useDocumentStore';
import { useSubjectStore } from '@/store/useSubjectStore';
const DocumentList = () => {
  const { id } = useParams<{ id: string }>();
  const { documents, loading, fetchDocumentBySubject } = useDocumentStore();
  const { subject, getSubjectById } = useSubjectStore();
  useEffect(() => {
    if (id) {
      fetchDocumentBySubject(id);
      getSubjectById(id);
    }
  }, [id]);

  return (
    <div>
      <TablePage<Document>
        title={`Danh sách tài liệu thuộc học phần: ${subject?.name}`}
        data={documents}
        columns={documentColumns}
        loading={loading}
        Modal={DocumentModal}
      />
    </div>
  );
};

export default DocumentList;
