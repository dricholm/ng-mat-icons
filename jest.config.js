module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/projects/ng-mat-icons/src'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  coverageReporters: ['html', 'lcov'],
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
};
