import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
        '__test__/**/*.spec.ts',
        '__test__/**/*.test.ts',
        'src/**/*.test.ts'
    ],
    testTimeout: 5000
  },
  resolve: {
    alias: {
      repository: 'src/infrastructure/repository'
    }
  },
})