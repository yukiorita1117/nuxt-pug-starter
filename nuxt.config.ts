// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/style/global.scss'],
  app: {
    head: {
      title: 'Nuxt Pug Starter',
      meta: [{ name: 'description', content: 'Nuxt Pug Starter' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
});
