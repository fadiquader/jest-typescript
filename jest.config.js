module.exports = {
  "rootDir": "./src",
  preset: 'ts-jest',
  testEnvironment: 'node',
  "globalSetup": "./jestSetup/globalSetup.js",
  "globalTeardown": "./jestSetup/globalTeardown.js",
  "globals": {
    "ts-jest": {
      "tsConfig": "./tsconfig.json"
    }
  },
  "transform": {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],

  testMatch: ['**/__tests__/*.(test|spec).(j|t)s?(x)'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/**/*.(test|spec).ts',
  ]
};
