import { Contact } from './models/contact.model';

export interface AppState {
  readonly contact: Contact[];
}