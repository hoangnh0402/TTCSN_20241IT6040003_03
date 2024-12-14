

interface SummaryData{

}

interface SummaryStore {
  registeredSubject: SummaryData[];
  loading: boolean;
  error: string | null;
  fetchRegisteredSubjects: (userId: String | undefined) => Promise<void>;
}
