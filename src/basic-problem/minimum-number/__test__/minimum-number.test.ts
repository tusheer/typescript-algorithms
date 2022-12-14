import minimumNumber from '..';

describe('find minimum number from array of numbers', () => {
    it('should find minumum number', () => {
        expect(minimumNumber([2, 9, 44, 3, 0])).toBe(0);
    });
    it('should find minumum number where doesnot exit zero ', () => {
        expect(minimumNumber([100, 3, 23, 99, 675])).toBe(3);
    });
    it('should pass empty array', () => {
        expect(minimumNumber([])).toBe(undefined);
    });
});
