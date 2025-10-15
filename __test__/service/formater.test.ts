import { beforeAll, describe, expect, it } from "vitest";
import { IFormaterService } from "../../src/domain";
import { FormaterService } from "../../src/infrastructure";

describe('formater-service', () => {
    let formaterService: IFormaterService;

    beforeAll(() => {
        formaterService = new FormaterService();
    })

    it('should capitalize the text', () => {
        const text = "bonjour JEan ";
        const result = formaterService.capitalize(text);

        expect(result).not.toBeNull();
        expect(result).toEqual("Bonjour Jean")
    })    
})