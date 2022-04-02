export interface PhonebookList {
  id?: string;
  name: string;
  entries: PhonebookEntry[];
}

export interface PhonebookEntry {
  name: string;
  phoneNumber: string;
  email?: string;
  company?: string;
}
