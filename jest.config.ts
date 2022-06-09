import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/lib/jest/setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleDirectories: ['node_modules', 'src'],
}

export default config
