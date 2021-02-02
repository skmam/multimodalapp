import { LoginHistoryDetail } from "./loginHistoryDetail";

export interface Member {
    id: number;
    userName: string;
    email: string;
    firstname: string;
    middlename: string;
    lastname: string;
    dateOfBirth: Date;
    age: number;
    gender: string;
    created: Date;
    latestStatus: string;
    lastLoggedIn: Date;
    loginHistoryDetails: LoginHistoryDetail[];
  }
  
