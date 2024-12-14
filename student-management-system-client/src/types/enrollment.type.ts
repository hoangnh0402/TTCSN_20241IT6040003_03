export interface Enrollment {
  id: string;
  userID: string;
  classroomId: string;
  firstRegularPoint?: number;
  secondRegularPoint?: number;
  midTermPoint?: number;
  finalPoint?: number;
  createdAt?: string;
}
