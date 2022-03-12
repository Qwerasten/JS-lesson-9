import { arraySum, arrayBy2, getMinAndMax } from './index5';

describe('arraySum', () => {
    it('sum1-6 is 21', () => {
        const a = [1, 2, 3, 4, 5, 6];
        expect(arraySum(a)).toEqual(21);
    });
    it('sum3-7 is 25', () => {
        const a = [3, 4, 5, 6, 7];
        expect(arraySum(a)).toEqual(25);
    });
    it('sum555 is 15', () => {
        const a = [5, 5, 5];
        expect(arraySum(a)).toEqual(15);
    });
});

describe('arrayBy2', () => {
    it('1-6 By2 is 2-12', () => {
        const a = [1, 2, 3, 4, 5, 6];
        const b = [2, 4, 6, 8, 10, 12];
        expect(arrayBy2(a)).toEqual(b);
    });
    it('3-7 By2 is 6-14', () => {
        const a = [3, 4, 5, 6, 7];
        const b = [6, 8, 10, 12, 14];
        expect(arrayBy2(a)).toEqual(b);
    });
    it('5 5 5 By2 is 10 10 10', () => {
        const a = [5, 5, 5];
        const b = [10, 10, 10];
        expect(arrayBy2(a)).toEqual(b);
    });
});

describe('getMinAndMax', () => {
    it('1-6 MinMax', () => {
        const a = [2, 1, 4, 5, 6, 3];
        const b = [1, 6];
        expect(getMinAndMax(a)).toEqual(b);
    });
    it('23-37 MinMax', () => {
        const a = [33, 24, 25, 31, 27, 34, 29, 37, 30];
        const b = [24, 37];
        expect(getMinAndMax(a)).toEqual(b);
    });
    it('11-19 MinMax', () => {
        const a = [12, 14, 19, 11, 13, 15, 18, 16, 17];
        const b = [11, 19];
        expect(getMinAndMax(a)).toEqual(b);
    });
});
