import { Role } from "@prisma/client";

export default interface IUser { 
    id: number; 
    firstname: string; 
    lastname: string; 
    email: string; 
    password: string; 
    tel: string; 
    region: string;
    pays: string; 
    role: Role; 
    product_preference: string | null;
    adress: string | null; 
    profile_url: string | null;
    code_postal: string | null; 
}

