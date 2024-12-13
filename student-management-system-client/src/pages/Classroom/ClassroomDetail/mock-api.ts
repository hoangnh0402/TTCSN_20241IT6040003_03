import { Enrollment } from '@/types/enrollment.type';
import { User } from '@/types/user.type';

export const fetchMockEnrollments = async (classroomCode?: string): Promise<Enrollment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData: Enrollment[] = [
        {
          id: '1',
          userId: 'U123',
          classroomId: 'MATH101-1',
          firstRegularPoint: 8.5,
          secondRegularPoint: 9.0,
          midTermPoint: 7.5,
          finalPoint: 8.0,
          createdAt: '2024-12-01',
        },
        {
          id: '2',
          userId: 'U124',
          classroomId: 'C102',
          firstRegularPoint: 6.0,
          secondRegularPoint: 7.5,
          midTermPoint: 8.0,
          finalPoint: 7.0,
          createdAt: '2024-12-02',
        },
        {
          id: '3',
          userId: 'U125',
          classroomId: 'MATH101-1',
          firstRegularPoint: 9.0,
          secondRegularPoint: 9.5,
          midTermPoint: 8.5,
          finalPoint: 9.0,
          createdAt: '2024-12-03',
        },
      ];

      // Lọc dữ liệu theo classroomCode

      const filteredData = classroomCode ? mockData.filter((item) => item.classroomId === classroomCode) : mockData;

      resolve(filteredData);
    }, 1000); // Giả lập độ trễ 1 giây
  });
};

export const fetchMockUser = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockUsers: User[] = [
        { id: 'U123', username: 'Nguyen Van A', fullName: 'Nguyen Van A', gender: 'Nam' },
        { id: 'U124', username: 'Tran Thi B', fullName: 'Tran Thi B', gender: 'Nữ' },
        { id: 'U125', username: 'Le Thi C', fullName: 'Le Thi C', gender: 'Nữ' },
      ];
      resolve(mockUsers);
    }, 500);
  });
};
