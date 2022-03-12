import { sumMult, sumLength, sumOfNumbers } from './index1';

describe('sumMult', () => {
    it('2&3 give 5&6', () => {
        expect(sumMult(2, 3)).toEqual([5, 6]);
    });
    it('5&5 give 10&25', () => {
        expect(sumMult(5, 5)).toEqual([10, 25]);
    });
    it('4&8 give 12&32', () => {
        expect(sumMult(4, 8)).toEqual([12, 32]);
    });
});
describe('sumLength', () => {
    it('sum Path & Way is 7', () => {
        expect(sumLength('Path', 'Way')).toEqual(7);
    });
    it('sum  Sunrise & Sunset is 13', () => {
        expect(sumLength('Sunrise', 'Sunset')).toEqual(13);
    });
    it('sum Past & Future is 10', () => {
        expect(sumLength('Past', 'Future')).toEqual(10);
    });
});
describe('sumOfNumbers', () => {
    it('sum 123 is 6', () => {
        expect(sumOfNumbers(123)).toEqual(6);
    });
    it('sum 555 is 15', () => {
        expect(sumOfNumbers(555)).toEqual(15);
    });
    it('sum 468 is 6', () => {
        expect(sumOfNumbers(468)).toEqual(18);
    });
});
