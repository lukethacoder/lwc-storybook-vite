import { StorybookConfig } from '@storybook/web-components-vite'

const config: StorybookConfig = {
  stories: [
    './docs/*.mdx',
    // '../force-app/**/__docs__/**/*.mdx',
    '../force-app/**/__docs__/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../modules/**/__docs__/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
}

export default config
