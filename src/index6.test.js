import { diff, isWord, pow } from './index6';

describe('diff', () => {
    it('2,6 is 4', () => {
        expect(diff(2, 6)).toEqual(4);
    });
    it('-5,12 is 17', () => {
        expect(diff(-5, 12)).toEqual(17);
    });
    it('10,10 is 0', () => {
        expect(diff(10, 10)).toEqual(0);
    });
});
describe('isWord', () => {
    it('Face give true', () => {
        expect(isWord('Face')).toBe(true);
    });
    it('Other Face give false', () => {
        expect(isWord('Other Face')).toBe(false);
    });
    it('Faith give true', () => {
        expect(isWord('Faith')).toBe(true);
    });
});
describe('pow', () => {
    it('2^4 is 16', () => {
        expect(pow(2, 4)).toEqual(16);
    });
    it('1^5 is 1', () => {
        expect(pow(1, 5)).toEqual(1);
    });
    it('10^1 is 10', () => {
        expect(pow(10, 1)).toEqual(10);
    });
    it('10^0 is 1', () => {
        expect(pow(10, 0)).toEqual(1);
    });
});
