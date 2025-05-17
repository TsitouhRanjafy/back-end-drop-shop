export default interface IAdmin { 
    id: number; 
    firstname: string; 
    lastname: string; 
    email: string; 
    password: string; 
    tel: string; 
    pays: string; 
    adress: string; 
    code_postal: string | null; 
}
