import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    breakpoints: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    colors: {
      background: {
        DEFAULT: '#f1f5f9',
        dark: '#111115',
      },
      primary: {
        DEFAULT: '#0ea5e9',
        dark: '#0ea5e9',
        text: {
          DEFAULT: '#111115',
          dark: '#ffffff',
        },
      },
      secondary: {
        text: {
          DEFAULT: '#475569',
          dark: '#BCC9D3',
        },
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),

  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
