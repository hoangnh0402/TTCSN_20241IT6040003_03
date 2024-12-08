import { Subject } from '@/types/subject.type';

const mockSubjects: Subject[] = [
  {
    id: '1',
    name: 'Học phần 1',
    code: 'IT001',
    numberOfCredits: 3,
    regularCoefficient: 0.3,
    midTermCoefficient: 0.3,
    finalCoefficient: 0.4,
    description: 'Môn học cơ bản về lập trình',
    prerequisiteSubjects: 'IT002',
    createdAt: '2024-01-01T00:00:00Z',
    documents: [
      {
        id: '1',
        subjectId: '1',
        name: 'Tài liệu 1',
        path: '/files/document1.pdf',
        type: 'PDF',
        description: 'Giới thiệu về môn học',
        size: 1.2,
        createdAt: '2024-01-01T00:00:00Z',
      },
    ],
  },
  {
    id: '2',
    name: 'Học phần 2',
    code: 'IT002',
    numberOfCredits: 4,
    regularCoefficient: 0.2,
    midTermCoefficient: 0.4,
    finalCoefficient: 0.4,
    description: 'Môn học nâng cao về cấu trúc dữ liệu',
    prerequisiteSubjects: 'IT001',
    createdAt: '2024-01-10T00:00:00Z',
    documents: [],
  },
];

export const fetchSubjects = (): Promise<Subject[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSubjects);
    }, 500);
  });
};

export const fetchDocuments = (subjectId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subject = mockSubjects.find((s) => s.id === subjectId);
      resolve(subject?.documents || []);
    }, 500);
  });
};
