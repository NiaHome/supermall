<template>
  <div class="bottom-bar">
    <div @click="addToCart">加入购物车</div>
    <div>购买</div>
  </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
      methods: {
        addToCart() {
          this.$emit('addCart', )
        }
      }
    }
</script>

<style scoped>
 .bottom-bar {
   height: 49px;
   background-color: red;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
 }
</style>
