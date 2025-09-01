import type { Preview } from '@storybook/web-components-vite'
import '@lwc/synthetic-shadow'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
