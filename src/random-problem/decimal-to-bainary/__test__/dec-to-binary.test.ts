import desToBinary from '../';

describe('Test decimal to binary', () => {
    it('should pass descimal to binary', () => {
        expect(desToBinary(8)).toBe(1000);
    });
});
