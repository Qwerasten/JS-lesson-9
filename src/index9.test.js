import { isRight, lengthAndSquare, roots } from './index9';

describe('isRight', () => {
    it('3,4,5 - true', () => {
        expect(isRight(3, 4, 5)).toBe(true);
    });
    it('6,3,4 - false', () => {
        expect(isRight(6, 3, 4)).toBe(false);
    });
    it('12, 5, 13 - true', () => {
        expect(isRight(12, 5, 13)).toBe(true);
    });
});

describe('lengthAndSquare', () => {
    it('4', () => {
        const [len, sq] = lengthAndSquare(4);
        expect(len).toBeCloseTo(25.13);
        expect(sq).toBeCloseTo(50.265, 3);
    });
});

describe('roots', () => {
    it('x^2-2x+1', () => {
        expect(roots(1, -2, 1)).toEqual(1);
    });
    it('x^2-6x+8', () => {
        expect(roots(1, -6, 8)).toEqual([2, 4]);
    });
    it('2, 3, 4', () => {
        expect(roots(2, 3, 4)).toEqual('Действительных корней нет');
    });
});
