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
