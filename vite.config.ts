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
        /^__vite-optional-peer-dep:/,
        /node_modules/,
        /iframe\.html/,
        /index\.html/,
        './**/*.(mdx|json|map|stories.ts|tsx)',
        './**/@storybook/**/*',
        './.storybook/**/*',
        './**/__docs__/**/*',
      ],
      modules: [
        {
          dir: './modules/test',
          namespace: 'test',
        },
        {
          // dir: './modules/c',
          dir: './force-app/main/default/lwc',
          namespace: 'c',
        },
      ],
      disableSyntheticShadowSupport: false,
      // disableSyntheticShadowSupport: true,
      experimentalDynamicDirective: true,
      enableDynamicComponents: true,
      // allows using `await import()` with non-strict strings (dynamic values)
      experimentalDynamicComponent: {
        strictSpecifier: false,
      },
    }),
  ],
} satisfies UserConfig
