<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <home-swiper :banners="banners"/>
  <home-recommend-view :recommends="recommends"/>
  <feature-view/>
  <tab-control class="tab-control" :titles="titles"/>

  <ul>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
  </ul>
</div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import HomeSwiper from './childrenComponents/HomeSwiper'
  import HomeRecommendView from './childrenComponents/HomeRecommendView'
  import FeatureView from './childrenComponents/FeatureView'

  import {getHomeMultiData} from "network/home";


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选']
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultiData().then(res => {
        console.log(res.recommend);
        this.banners = res.banner;
        this.recommends = res.recommend
      })
    }
  }
</script>

<style scoped>
 .home-nav {
   background-color: var(--color-tint);
   color: white;

   position: fixed;
   left: 0;
   right:0;
   top: 0;
   z-index: 9;
 }

  .tab-control {
    position: sticky;
    top:44px;
  }
</style>
