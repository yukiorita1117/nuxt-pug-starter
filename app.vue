<template lang="pug">
div
  NuxtLayout(:name="layout")
    NuxtPage
div
  h2 ここはPages全部に共通
</template>

<script setup lang="ts">
const admin = false;
const layout = admin ? 'custom' : 'default';
</script>
