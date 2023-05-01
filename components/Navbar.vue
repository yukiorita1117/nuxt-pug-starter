<template lang="pug">
nav.Nav
  NuxtLink(to="/") Home
  NuxtLink(to="/about") About
  NuxtLink(to="https://google.com" target="_blank") Google
</template>

<style lang="scss" scoped>
.Nav {
  display: flex;
  justify-content: space-around;
}
</style>
