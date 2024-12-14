import { create } from 'zustand';

import { ApiConstant, ApiConstantUser } from '@/constants/api.constant';
import { api } from '@/services/api.service';
import { Subject } from '@/types/subject.type';
import { AvailableRegisterSubject } from '@/types/registerSubject.type';
import { Classroom } from '@/types/classroom.type';

interface RegisterSubjectStore {
  registeredSubject: AvailableRegisterSubject[];
  loading: boolean;
  error: string | null;
  fetchRegisteredSubjects: (userId: String | undefined) => Promise<void>;
}

export const useRegisteredSubjectStore = create<RegisterSubjectStore>((set) => ({
    registeredSubject: [],
    loading: false,
    error: null,
  
    fetchRegisteredSubjects: async (userId: String | undefined) => {
      // Add a guard clause to handle undefined userId
      if (!userId) {
        set({ error: 'User ID is required', loading: false });
        return;
      }
  
      set({ loading: true, error: null });
      try {
        const { data } = await api.get<{ items: Subject[] }>(ApiConstant.subjects.getAll);
        console.log(userId);
        // Convert userId to a string explicitly
        const userIdString = userId.toString();
        console.log(userIdString)
        const { data: classrooms } = await api.get<Classroom[]>(
          ApiConstantUser.classrooms.getAll.replace(':studentCode', userIdString)
        );
  
        const subjects = data.items;
        console.log(classrooms)  
        let subjectsWithClassroomsAvailable: any[] = [];
  
        subjects.forEach((subject) => {
          // Find classrooms associated with this subject
          const availableClassrooms = classrooms.filter((classroom) => classroom.subjectId === subject.id);
  
          availableClassrooms.forEach((classroom) => {
            subjectsWithClassroomsAvailable.push({
              ...subject, 
              schedule: classroom.schedule, 
              classroomId: classroom.id 
            });
          });
        });
        // Update register subjects with combined data
  
        set({ registeredSubject: subjectsWithClassroomsAvailable });
      } catch (error) {
        set({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
      } finally {
        set({ loading: false });
      }
    },
  }));