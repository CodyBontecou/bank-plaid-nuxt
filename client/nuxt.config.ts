// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  modules: ['@sidebase/nuxt-auth', '@vueuse/nuxt'],
  ssr: true,
  srcDir: 'src/',
  runtimeConfig: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    PLAID_CLIENT_ID: process.env.PLAID_CLIENT_ID,
    PLAID_SANDBOX_SECRET_KEY: process.env.PLAID_SANDBOX_SECRET_KEY,
    PLAID_DEVELOPMENT_SECRET_KEY: process.env.PLAID_DEVELOPMENT_SECRET_KEY,
  },
})
