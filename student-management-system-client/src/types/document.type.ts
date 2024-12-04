export interface Document {
  id: string;
  subjectId: string;
  name: string;
  path: string;
  type: string;
  description?: string;
  size?: number;
  createdBy?: string;
  createdAt?: string;
}
