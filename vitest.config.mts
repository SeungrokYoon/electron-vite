import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './electron.vite.config.ts'

// Define common configurations
const commonConfig = {
  globals: true,
  setupFiles: './setupTests.ts'
}

// Main process configuration
const mainConfig = {
  test: {
    ...commonConfig,
    environment: 'node',
    include: ['src/main/**/*.test.ts']
  }
}

// Renderer process configuration
const rendererConfig = {
  test: {
    ...commonConfig,
    environment: 'jsdom',
    include: ['src/renderer/**/*.test.(ts|tsx)']
  }
}

// Determine which config to use based on an environment variable
const config =
  process.env.VITE_ENV === 'main'
    ? mergeConfig(viteConfig, defineConfig(mainConfig))
    : mergeConfig(viteConfig, defineConfig(rendererConfig))

export default config
