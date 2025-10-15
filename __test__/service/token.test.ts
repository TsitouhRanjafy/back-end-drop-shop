import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";
import { ITokenService, IUser } from "../../src/domain";
import { TokenService } from "../../src/infrastructure";
import { Role } from "@prisma/client";

describe('token-service', () => {
    let tokenService: ITokenService;
    const mockUser: Pick<IUser,"id" | "email" | "role"> = {
        id: 1,
        email: "test@gmail.com",
        role: Role.BUYER
    }
    const jwt_secret_key = "securekey_#123";

    beforeEach(() => {
        vi.stubEnv('JWT_KEY_SECRET', jwt_secret_key);
        tokenService = new TokenService();
    })

    afterAll(() => {
        vi.unstubAllEnvs()
    })

    it('should generate a token with the correct user', () => {
        const token = tokenService.generer(mockUser);
        expect(token).not.toBeNull();
        expect(token.length).toBeGreaterThan(15)

        const userVerified = tokenService.verify(token);
        expect(userVerified).not.toBeNull();
        expect(userVerified.email).toEqual(mockUser.email);
        expect(userVerified.id).toEqual(mockUser.id);
        expect(userVerified.role).toEqual(mockUser.role);
    })
})