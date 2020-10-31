<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <home-swiper :banners="banners"/>
  <home-recommend-view :recommends="recommends"/>
  <feature-view/>
  <tab-control class="tab-control" :titles="titles"
      @tabClick="tabClick"/>
  <goods-list :goods="showGoods"/>
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
  import GoodsList from 'components/content/goods/GoodsList'

  import HomeSwiper from './childrenComponents/HomeSwiper'
  import HomeRecommendView from './childrenComponents/HomeRecommendView'
  import FeatureView from './childrenComponents/FeatureView'

  import {getHomeMultiData,getHomeGoods} from "network/home";


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentGoodsType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentGoodsType].list
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultiData();

      //2.请求goods
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      tabClick(index) {
        switch (index) {
          case 0 :
            this.currentGoodsType = 'pop';
            break;
          case 1 :
            this.currentGoodsType = 'new';
            break;
          case 2 :
            this.currentGoodsType = 'sell';
            break;
        }
        console.log(this.currentGoodsType);
      },
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banners = res.banner;
          this.recommends = res.recommend
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res);
          this.goods[type].page += 1;
        })
      }
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
