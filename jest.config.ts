import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
    moduleFileExtensions: ['ts', 'js'],
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test))\\.ts$',
};
export default config;
