import { defineConfig } from 'vitest/config'


export default defineConfig({
  test: {
    include: [
        '__test__/**/*.spec.ts',
        '__test__/**/*.test.ts',
        'src/**/*.test.ts'
    ],
    testTimeout: 5000,
    env: {
      "PORT":"3000",
      "DATABASE_URL":"mysql://tsitohaina:Html2025@localhost:3306/drop_shop",
      "JWT_KEY_SECRET":"KEY_JWT",
      "TOKEN_KEY_SECRET":"TOKEN_KEY",
      "CORS_ORIGIN1":"http://localhost:4200",
      "CORS_ORIGIN2":"http://localhost:4200",
      "CORS_ORIGIN3":"http://localhost:4200",
      "CORS_ORIGIN4":"http://localhost:4200"
    }
  },
  resolve: {
    alias: {
      repository: 'src/infrastructure/repository'
    }
  },
})