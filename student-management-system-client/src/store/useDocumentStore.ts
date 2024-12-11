import { create } from 'zustand';

import { ApiConstant } from '@/constants/api.constant';
import { api, apiDefaultUpload } from '@/services/api.service';
import { Document } from '@/types/document.type';
interface DocumentStore {
  documents: Document[];
  document: Document | null;
  loading: boolean;
  error: string | null;
  fetchDocumentBySubject: (id: string) => Promise<void>;
  getDocumentById: (id: string) => Promise<void>;
  downloadDocument: (id: string) => Promise<void>;
  uploadDocument: (data: FormData) => Promise<void>;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],
  document: null,
  loading: false,
  error: null,

  fetchDocumentBySubject: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Document[]>(`${ApiConstant.documents.getAllBySubject}?subjectId=${id}`);
      set({ documents: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  getDocumentById: async (id) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Document>(`${ApiConstant.documents.getById}${id}`);
      set({ document: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  downloadDocument: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`${ApiConstant.documents.dowload}?id=${id}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;

      const fileName =
        response.headers['content-disposition']?.split('filename=')[1]?.replace(/"/g, '') || 'downloaded-file';

      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  uploadDocument: async (formData) => {
    set({ loading: true, error: null });
    try {
      // console.log('FormData payload:');
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }

      const response = await apiDefaultUpload.post(ApiConstant.documents.upload, formData);
      console.log(response); // Thêm dòng này để kiểm tra phản hồi
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
