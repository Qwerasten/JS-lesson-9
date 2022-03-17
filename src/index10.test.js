import { isDate, isEmail } from './index10';

describe('isDate', () => {
    it('05.12.1986', () => {
        expect(isDate('05.12.1986')).toBe('true');
    });
    it('21sa154', () => {
        expect(isDate('21sa154')).toBe('false');
    });
});
describe('isEmail', () => {
    it('john_malc@gmail.com', () => {
        expect(isEmail('john_malc@gmail.com')).toBe('true');
    });
    it('john_malcgmail.com', () => {
        expect(isEmail('john_malcgmail.com')).toBe('false');
    });
});
