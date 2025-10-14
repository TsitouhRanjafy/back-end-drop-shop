import prismaMock from '../../../__mock__/prisma';
import { describe, beforeEach, vi, it, expect } from 'vitest';
import SaveUserRepository from '../../../src/infrastructure/repository/user/save-user.repository';
import { ISaveUserRepository, IUser } from '../../../src/domain';
import { Role } from '@prisma/client';


describe('user.repository', () => { 
    let saveUserRepository: ISaveUserRepository;

    beforeEach(() => {
        vi.resetAllMocks();
        saveUserRepository = new SaveUserRepository(prismaMock);
    })

    describe('save user', () => {
        it('should create and return a new user', async () => {
            const mockUser: Omit<IUser,"id"> = {
                firstname: 'firstnametest',
                lastname: 'lastnametest',
                email: 'emailtest',
                password: 'passwordtest',
                tel: 'teltest',
                region: 'regiontest',
                pays: 'payatest',
                role: Role.SELLER,
                product_preference: null,
                adress: null,
                profile_url: null,
                code_postal: null
            }
            const expectUser: IUser = { id: 1, ...mockUser };

            prismaMock.user.create.mockResolvedValue(expectUser);
            
            const result = await saveUserRepository.signup(mockUser);
            
            expect(prismaMock.user.create).toBeCalledWith({ data: mockUser })
            expect(result).toEqual(expectUser);            
        })
    })
 })