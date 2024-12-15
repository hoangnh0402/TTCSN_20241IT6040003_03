import { ApiConstant } from '@/constants/api.constant';
import { api } from '@/services/api.service';
import { Enrollment } from '@/types/enrollment.type';

const enrollmentApi = () => ({
  fetchById: async (id: string): Promise<Enrollment[]> => {
    const response = await api.get<Enrollment[]>(ApiConstant.enrollment.getAll.replace(':id', id));
    return response.data;
  },
});

export const { fetchById } = enrollmentApi();
