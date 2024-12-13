// import { Subject } from '@/types/subject.type';
// import { Classroom } from '@/types/classroom.type';

// const mockSubjects: Subject[] = [
//   {
//     id: '1',
//     name: 'Toán học',
//     code: 'MATH101',
//     numberOfCredits: 3,
//     regularCoefficient: 1,
//     midTermCoefficient: 1,
//     finalCoefficient: 2,
//     description: 'Môn học cơ bản về toán học.',
//   },
//   {
//     id: '2',
//     name: 'Lịch sử',
//     code: 'HIS101',
//     numberOfCredits: 2,
//     regularCoefficient: 1,
//     midTermCoefficient: 1,
//     finalCoefficient: 1,
//     description: 'Môn học về lịch sử thế giới.',
//   },
//   // Thêm nhiều subject khác nếu cần
// ];

// export const mockClassrooms: Classroom[] = [
//   {
//     id: '1',
//     code: 'MATH101-1',
//     subjectId: '1',
//     numberOfStudents: 30,
//     teacherId: 'T1',
//     schedule: 'Thứ 2, 4:00 PM',
//     room: 'A101',
//   },
//   {
//     id: '2',
//     code: 'MATH101-2',
//     subjectId: '1',
//     numberOfStudents: 25,
//     teacherId: 'T1',
//     schedule: 'Thứ 3, 10:00 AM',
//     room: 'A102',
//   },
//   {
//     id: '3',
//     code: 'HIS101-1',
//     subjectId: '2',
//     numberOfStudents: 25,
//     teacherId: 'T2',
//     schedule: 'Thứ 3, 3:00 PM',
//     room: 'B102',
//   },
//   {
//     id: '4',
//     code: 'HIS101-2',
//     subjectId: '2',
//     numberOfStudents: 30,
//     teacherId: 'T2',
//     schedule: 'Thứ 5, 9:00 AM',
//     room: 'B103',
//   },
//   // Thêm nhiều lớp học khác nếu cần
// ];

// export const fetchSubjects = () => {
//   return new Promise<Subject[]>((resolve) => {
//     setTimeout(() => {
//       resolve(mockSubjects);
//     }, 1000); // Mô phỏng thời gian chờ như API thực tế
//   });
// };

// export const fetchClassroomsBySubjectCode = (subjectCode: string) => {
//   return new Promise<Classroom[]>((resolve) => {
//     setTimeout(() => {
//       const classrooms = mockClassrooms.filter((classroom) => classroom.subjectId === subjectCode);
//       resolve(classrooms);
//     }, 1000); // Mô phỏng thời gian chờ như API thực tế
//   });
// };
import { ApiConstant } from '@/constants/api.constant';
import { api } from '@/services/api.service';
import { Subject } from '@/types/subject.type';
import { Classroom } from '@/types/classroom.type';

export const fetchSubjects = async (): Promise<Subject[]> => {
  try {
    const { data } = await api.get<{ items: Subject[] }>(ApiConstant.subjects.getAll);
    return data.items;
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error;
  }
};

export const fetchClassrooms = async (): Promise<Classroom[]> => {
  try {
    const { data } = await api.get<Classroom[]>(ApiConstant.classrooms.getAll);
    return data;
  } catch (error) {
    console.error('Error fetching classrooms:', error);
    throw error;
  }
};

// Example usage of fetchSubjects and fetchClassrooms
(async () => {
  try {
    const subjects = await fetchSubjects();
    const classrooms = await fetchClassrooms();

    console.log('Subjects:', subjects);
    console.log('Classrooms:', classrooms);
  } catch (error) {
    console.error('Error:', error);
  }
})();
