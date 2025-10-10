// import IAdmin from "../../../domain/entities/admin.type";
// import { ISaveAdminRepository } from "../../../domain/repositories/admin/admin-repository.interface";
// import prisma from "../prismaClient";

// class SaveAdminReposiroty implements ISaveAdminRepository {
//     async signup(Admin: Omit<IAdmin,"id">): Promise<IAdmin> {
//         try {
//             const newAdmin: IAdmin = await prisma.admin.create({
//                 data: Admin 
//             })
//             return newAdmin;
//         } catch (error) {
//             console.error("Error lors `SaveAdminReposiroty` signup",error);
//             throw error
//         }
//     }
    
// }

// export default SaveAdminReposiroty