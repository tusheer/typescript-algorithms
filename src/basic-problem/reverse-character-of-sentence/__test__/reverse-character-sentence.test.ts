import reverse from '../index';

describe('Test reverse character of senter', () => {
    it('should pass reverse the string', () => {
        expect(reverse('I love programming')).toBe('I evol gnimmargorp');
    });

    it('should pass if have multiple space', () => {
        expect(reverse('I love    programming')).toBe('I evol    gnimmargorp');
    });

    it('should pass if have multiple space before start sentence', () => {
        expect(reverse('   I love programming')).toBe('   I evol gnimmargorp');
    });
});
