import { Document } from '@/types/document.type';

export const fetchDocuments = async (subjectId: string): Promise<Document[]> => {
  return [
    {
      id: '1',
      subjectId,
      name: 'Tài liệu 1',
      path: '/documents/document1.pdf',
      type: 'PDF',
      description: 'Mô tả tài liệu 1',
      size: 2.5,
      createdBy: 'Admin',
      createdAt: '2023-12-01T12:00:00Z',
    },
    {
      id: '2',
      subjectId,
      name: 'Tài liệu 2',
      path: '/documents/document2.docx',
      type: 'DOCX',
      description: 'Mô tả tài liệu 2',
      size: 5.0,
      createdBy: 'Admin',
      createdAt: '2023-12-02T08:30:00Z',
    },
  ];
};
