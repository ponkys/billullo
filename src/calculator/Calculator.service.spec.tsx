import { assignValue } from "./Calculator.service";

describe('Calculator service', () => {
    it(`should delete 0 if no '.' character is next`, () => {
        const expected = '1';
        const result = assignValue('0', '1');
        expect(result).toEqual(expected);
    });

    it(`should add 0 if no 0 before '.'`, () => {
        const expected = '0.1';
        const result = assignValue('.', '1');
        expect(result).toEqual(expected);
    })

    it(`should add characters`, () => {
        const expected = '1.';
        const result = assignValue('1', '.');
        expect(result).toEqual(expected);
    })
})