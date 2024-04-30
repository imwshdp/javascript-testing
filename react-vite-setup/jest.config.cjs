/** @type {import('jest').Config} */
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest'
	},
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		'^.+\\.svg$': 'jest-svg-transformer',
		'^.+\\.(css|scss)$': 'identity-obj-proxy'
	}
};
