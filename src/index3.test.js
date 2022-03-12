import { sum50to100, multBy7, average } from './index3';

describe('sum50to100', () => {
    it('sum 50 to 100 is 3825', () => {
        expect(sum50to100()).toEqual(3825);
    });
});
describe('multBy7', () => {
    it('7*7 = 49', () => {
        expect(multBy7(7)).toEqual('7 x 7 = 49');
    });
    it('20 out of range', () => {
        expect(multBy7(20)).toEqual('Out of Range');
    });
});
describe('average', () => {
    it('3 give 2', () => {
        expect(average(3)).toEqual(2);
    });
    it('5 give 3', () => {
        expect(average(5)).toEqual(3);
    });
    it('11 give 6', () => {
        expect(average(11)).toEqual(6);
    });
});
