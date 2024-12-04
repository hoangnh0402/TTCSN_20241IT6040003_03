export interface Enrollment {
  id: string;
  userId: string;
  classroomId: string;
  firstRegularPoint?: number;
  secondRegularPoint?: number;
  midTermPoint?: number;
  finalPoint?: number;
  createdAt?: string;
}
