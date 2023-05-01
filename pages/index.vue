<template lang="pug">
h1 Main Page
button(@click="handleClick") Coupon Get
LazyCoupon(ref="show" v-if="show")
.Wrapper
  img.Image(src="~/assets/img/oricoin.jpg" width='140' height="140" alt="orita")
</template>

<script lang="ts" setup>
const show = ref<boolean>(false);

const handleClick = () => {
  show.value = !show.value;
};
</script>

<style lang="scss" scoped>
.Wrapper {
  display: flex;
}
.Image {
  margin-top: 24px;
}
</style>
