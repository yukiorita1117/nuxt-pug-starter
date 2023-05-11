<template lang="pug">
h1 Main Page
h2 {{ $prefix('World!?') }}
button(@click="handleClick") Coupon Get
LazyCoupon(ref="show" v-if="show")
.Wrapper
  img.Image(src="~/assets/img/oricoin.jpg" width='140' height="140" alt="orita")
  div Count: {{ count }}
  button.Btn(@click="()=> inc()") increase
  button.Btn(@click="()=> dec()") descrease
div TEST: {{ comment }}
button.Btn(@click="()=> handleEditComment()") Edit

</template>

<script lang="ts" setup>
const show = ref<boolean>(false);

const handleClick = () => {
  show.value = !show.value;
};

const { count, comment, inc, dec, handleEditComment } = useCounter(
  100,
  'test test'
);

const { $prefix } = useNuxtApp();
</script>

<style lang="scss" scoped>
.Wrapper {
  display: flex;
  flex-direction: column;
}
.Image {
  margin-top: 24px;
}
.Btn {
  width: 360px;
  margin-top: 24px;
}
</style>
