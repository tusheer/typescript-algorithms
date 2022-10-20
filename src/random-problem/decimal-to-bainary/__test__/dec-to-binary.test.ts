import desToBinary from '../';

describe('Test decimal to binary', () => {
    it('should pass descimal to binary', () => {
        expect(desToBinary(73)).toBe(1001001);
    });
});
