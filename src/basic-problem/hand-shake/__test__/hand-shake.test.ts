import handShake from '..';

describe('Test hand Shake problem', () => {
    it('should pass the test when total person is 3', () => {
        expect(handShake(3)).toBe(3);
    });
    it('should pass the test when total person is 4', () => {
        expect(handShake(4)).toBe(6);
    });
});
