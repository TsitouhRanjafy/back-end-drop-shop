import { beforeEach, describe, vi, it, expect } from "vitest";
import { ITokenDecoded, ITokenService } from "../../../src/domain";
import { DeepMockProxy, mockDeep } from "vitest-mock-extended";
import { TokenService } from "../../../src/infrastructure";
import { AuthUserUsecase } from "../../../src/usecases";
import { Role } from "@prisma/client";

const mockTokenService: DeepMockProxy<ITokenService> = mockDeep<TokenService>(); 

describe('auth-usecase', () => {
    let useCase: AuthUserUsecase;

    beforeEach(() => {
        vi.resetAllMocks();
        useCase = new AuthUserUsecase(mockTokenService);
    })

    it('should call token service to verify a token with the token param', () => {
        const token = "this-is-a-token";
        useCase.execute(token);

        mockTokenService.verify.calledWith(token).mockReturnValue(null);
    })

    it('should return user info if token matched, else null', () => {
        const user: ITokenDecoded  = {
            id: 1,
            email: "test@gmail.com",
            role: Role.BUYER
        } 
        const mocktoken = "this-is-a-token";

        mockTokenService.verify.mockImplementation((token: string): ITokenDecoded | null => {
            if (token == mocktoken) return user;
            return null;
        })
        let result: ITokenDecoded | null = useCase.execute(mocktoken);
        expect(result).not.toBeNull();
        expect(result).toEqual(user);

        result = useCase.execute("mauvaise-token");
        expect(result).toBeNull();
    })
})