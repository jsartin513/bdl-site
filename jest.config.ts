import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Points to your setup file
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Use ts-jest to transform TypeScript and JSX
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
};

export default config;