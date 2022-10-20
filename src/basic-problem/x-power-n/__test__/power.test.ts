import power from '../index';

describe('Test power of n', () => {
    it('should pass power of with random number', () => {
        expect(power(8, 8)).toBe(16777216);
    });
    it('should pass when power  is 1', () => {
        expect(power(8, 1)).toBe(8);
    });
    it('should pass when power  is 0', () => {
        expect(power(8, 0)).toBe(1);
    });
    it('should pass when number is 0', () => {
        expect(power(0, 4)).toBe(0);
    });
});
