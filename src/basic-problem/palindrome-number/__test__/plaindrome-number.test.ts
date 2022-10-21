import isPlainDrome from '..';

describe('Plaindrome number test', () => {
    it('should pass when number is plaindrome', () => {
        expect(isPlainDrome(12321)).toBe(true);
    });
    it('should pass when number is plaindrome', () => {
        expect(isPlainDrome(123321)).toBe(true);
    });
    it('should pass when number is not plaindrome', () => {
        expect(isPlainDrome(9876543)).toBe(false);
    });
});
