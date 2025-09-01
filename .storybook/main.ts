import { StorybookConfig } from '@storybook/web-components-vite'

const config: StorybookConfig = {
  stories: [
    '../force-app/**/__docs__/**/*.mdx',
    '../force-app/**/__docs__/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
}

export default config
