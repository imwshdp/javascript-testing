import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	coverageDirectory: 'coverage',
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'ts-jest' // or babel-jest, but run tests-babel-setup script
	},
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleNameMapper: {
		// Handle module aliases (if you have them in your tsconfig.json)
		// '^@components/(.*)$': '<rootDir>/src/components/$1',
		'^.+\\.svg$': 'jest-svg-transformer',
		'^.+\\.(css|scss)$': 'identity-obj-proxy'
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/']
};

export default config;
