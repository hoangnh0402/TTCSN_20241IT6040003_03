import { create } from 'zustand';

import { ApiConstant } from '@/constants/api.constant';
import { api } from '@/services/api.service';
import { Enrollment } from '@/types/enrollment.type';

interface EnrollmentStore {
  enrollments: Enrollment[];
  loading: boolean;
  error: string | null;
  fetchEnrollments: (id: string) => Promise<void>;
}

export const useEnrollmentStore = create<EnrollmentStore>((set) => ({
  enrollments: [],
  loading: false,
  error: null,

  fetchEnrollments: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data: enrollments } = await api.get<Enrollment[]>(ApiConstant.enrollment.getAll.replace(':id', id));
      set({ enrollments });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
