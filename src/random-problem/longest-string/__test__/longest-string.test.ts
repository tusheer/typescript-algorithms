import longest from '../index';

describe('longest-string', () => {
    it('Should check with random string', () => {
        expect(longest(['I', 'love you', 'Ma'])).toBe('love you');
    });

    it('Check with empty string', () => {
        expect(longest([''])).toBe('');
    });
});
