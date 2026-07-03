import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.4)',
        'modern': '0 10px 30px rgba(0, 0, 0, 0.3)',
        'modern-lg': '0 20px 40px rgba(0, 0, 0, 0.4)',
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.3)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [require('daisyui')],
}

export default config
