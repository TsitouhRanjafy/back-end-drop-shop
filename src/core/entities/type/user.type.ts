import { Role } from "@prisma/client";

export default interface IUser { 
    id: number; 
    firstname: string; 
    lastname: string; 
    email: string; 
    password: string; 
    tel: string; 
    pays: string; 
    adress: string; 
    role: Role; 
    code_postal: string | null; 
}


