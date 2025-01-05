// src/types/user.ts
export interface Transaction {
    name: string;
    image: string;
    role: string;
  }
  
  export interface UserState {
    name: string;
    username: string;
    email: string;
    dob: string;
    'present-address': string;
    'permanent-address': string;
    city: string;
    'postal-code': string;
    country: string;
    transaction: Transaction[];
  }
  