import containDuplicate from '..';

describe('Contain duplicate finding from array', () => {
    it('should pass when duplicate item exit in array', () => {
        expect(containDuplicate([1, 34, 345, 2345, 1])).toBe(true);
    });

    it('should pass when duplicate item donot exit in array', () => {
        expect(containDuplicate([1, 34, 345, 2345])).toBe(false);
    });
});
