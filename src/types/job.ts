export interface Job {
  id?: string;
  jobTitle?: string;
  company?: string;
  jobStartDate?: string;
  jobEndDate?: string;
  companyLocation?: string;
  a1?: string;
  a2?: string;
  a3?: string;
  [key: string]: string | undefined;
}