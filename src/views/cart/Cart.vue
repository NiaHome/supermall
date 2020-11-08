<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
    export default {
        name: "Cart",
      components: {
        NavBar
      }
    }
</script>

<style scoped>
 .nav-bar {
   background-color: var(--color-background);
 }
</style>
