// // import { IAdmin, ILoadAdminRepository } from "../../../domain";
// import prisma from "../prismaClient";

// class LoadAdminRepository implements ILoadAdminRepository {

//     async getAdminByEmail(email: string): Promise<IAdmin | null> {
//         try {
//             const admin: IAdmin | null = await prisma.admin.findUnique({
//                 where: { email }
//             })
//             return admin;
//         } catch (error) {
//             console.error("Erreur lors de `getAdminByEmail`",error);
//             throw error;
//         }
//     }
//     async getAdminByTel(tel: string): Promise<IAdmin | null> {
//         try {
//             const admin: IAdmin | null = await prisma.admin.findUnique({
//                 where: { tel }
//             })
//             return admin;
//         } catch (error) {
//             console.error("Erreur lors de `getAdminByEmail`",error);
//             throw error;
//         }
//     }
//     async getAdminById(id: number): Promise<IAdmin | null> {
//         try {
//             const admin: IAdmin | null = await prisma.admin.findUnique({
//                 where: { id }
//             })
//             return admin;
//         } catch (error) {
//             console.error("Erreur lors de `getAdminByEmail`",error);
//             throw error;
//         }
//     }
// }

// export default LoadAdminRepository;