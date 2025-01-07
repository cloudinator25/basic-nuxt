// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // Nitro configuration for standalone output
  nitro: {
    preset: 'node-server', // Use 'node-server' for Node.js deployment
    output: {
      dir: '.output', // Output directory (default is '.output')
      standalone: true, // Enable standalone output
    },
  },
})
