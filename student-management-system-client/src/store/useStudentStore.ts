import { create } from 'zustand';

import { ApiConstant } from '@/constants/api.constant';
import { api } from '@/services/api.service';
import { User } from '@/types/user.type';

interface StudentStore {
  students: User[];
  loading: boolean;
  error: string | null;
  fetchStudents: () => Promise<void>;
  createStudent: (student: Omit<User, 'id'>) => Promise<void>;
  updateStudent: (id: string, student: Omit<User, 'id'>) => Promise<void>;
  deleteStudent: (id: string) => Promise<void>;
}

export const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  loading: false,
  error: null,

  fetchStudents: async () => {
    set({ loading: true, error: null });
    try {
      const { data: students } = await api.get<User[]>(ApiConstant.students.getAll);
      set({ students });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  createStudent: async (student) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post<User>(ApiConstant.students.create, student);
      set((state) => ({ students: [...state.students, data] }));
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updateStudent: async (id, student) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.put<User>(ApiConstant.students.update.replace(':id', id), student);
      set((state) => ({
        students: state.students.map((s) => (s.id === id ? data : s)),
      }));
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteStudent: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.patch(ApiConstant.students.delete.replace(':id', id));
      set((state) => ({
        students: state.students.filter((s) => s.id !== id),
      }));
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  
}));
