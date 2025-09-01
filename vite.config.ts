import type { UserConfig } from 'vite'
import lwc from './vite-plugin-lwc'

const deps = ['lwc', '@lwc/engine-dom', '@lwc/synthetic-shadow', '@lwc/shared']

export default {
  base: './',
  optimizeDeps: {
    exclude: deps,
  },
  build: {
    modulePreload: true,
    minify: false,
    target: 'esnext',
  },
  plugins: [
    lwc({
      rootDir: './',
      exclude: [
        './**/*.(mdx|json|map|stories.ts)',
        './**/index.html*',
        './**/iframe.html*',
        './node_modules/**/*',
        './**/@storybook/**/*',
        './.storybook/**/*',
        './**/__docs__/**/*',
      ],
      modules: [
        {
          npm: '@lwc-garden/utils',
        },
        {
          dir: './force-app/main/default/lwc',
          namespace: 'c',
        },
      ],
      experimentalDynamicDirective: true,
      enableDynamicComponents: true,
      // disableSyntheticShadowSupport: false,
      // allows using `await import()` with non-strict strings (dynamic values)
      experimentalDynamicComponent: {
        strictSpecifier: false,
      },
    }),
  ],
} satisfies UserConfig
