import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './electron.vite.config.ts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/renderer/**/*.test.(ts|tsx)'],
      setupFiles: './setupTests.ts'
    }
  })
)
