
import { create } from 'zustand';

import { ApiConstant, ApiConstantUser } from '@/constants/api.constant';
import { api } from '@/services/api.service';
import { Subject } from '@/types/subject.type';
import { AvailableRegisterSubject } from '@/types/registerSubject.type';
import { Classroom } from '@/types/classroom.type';
interface SummaryData{
    label: string,
    total: number
}

interface SummaryStore {
  summaryData: SummaryData[];
  loading: boolean;
  error: string | null;
  fetchSummaryData: (userId: String | undefined) => Promise<void>;
}


export const useSummaryStore = create<SummaryStore>((set) => ({
    summaryData: [],
    loading: false,
    error: null,
  
    fetchSummaryData: async () => {
      set({ loading: true, error: null });
      try {
        const { data } = await api.get<{ items: Subject[] }>(ApiConstantUser.subjects.getAll);
        const { data: classrooms } = await api.get<Classroom[]>(ApiConstant.classrooms.getAll);
        const subjects = data.items;
  
        let subjectsWithClassroomsAvailable: any[] = [];
  
        subjects.map((subject) => {
          // Find classrooms associated with this subject
          const availableClassrooms = classrooms.filter((classroom) => classroom.subjectId === subject.id);
  
          availableClassrooms.map((classroom) => {
            subjectsWithClassroomsAvailable = [
              ...subjectsWithClassroomsAvailable,
              { ...subject, schedule: classroom.schedule, classroomId: classroom.id },
            ];
          });
        });
        // Update register subjects with combined data
  
        set({ summaryData: subjectsWithClassroomsAvailable });
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    },
  }));
