import { create } from 'zustand';

import { ApiConstant } from '@/constants/api.constant';
import api from '@/services/api.service';
import { Document } from '@/types/document.type';
interface DocumentStore {
  documents: Document[];
  loading: boolean;
  error: string | null;
  fetchDocuments: () => Promise<void>;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],
  loading: false,
  error: null,

  fetchDocuments: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<{ items: Document[] }>(ApiConstant.documents.getAllBySubject);
      const documents = data.items;
      set({ documents });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
