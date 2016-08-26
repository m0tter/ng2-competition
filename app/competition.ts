import { School } from './school'

export class Competition {
  id: number;
  name: string;
  type: string;
  schools: School[]; 
}