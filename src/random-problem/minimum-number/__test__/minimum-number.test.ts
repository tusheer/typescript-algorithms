import minimumNumber from '../index';

describe('find minimum number from array of numbers', () => {
    it('should find minumum number', () => {
        expect(minimumNumber([2, 9, 44, 3, 0])).toBe(0);
    });

    it('should pass empty array', () => {
        expect(minimumNumber([])).toBe(undefined);
    });
});
