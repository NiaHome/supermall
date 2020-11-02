<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <div class="wrapper" ref="aaa">
    <div>
      <home-swiper :banners="banners"/>
      <home-recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" :titles="titles"
                   @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
      <ul>
        <li>分类1</li>
        <li>分类2</li>
        <li>分类3</li>
        <li>分类4</li>
        <li>分类5</li>
        <li>分类6</li>
        <li>分类7</li>
        <li>分类8</li>
        <li>分类9</li>
        <li>分类10</li>
        <li>分类11</li>
        <li>分类12</li>
        <li>分类13</li>
        <li>分类14</li>
        <li>分类15</li>
        <li>分类16</li>
        <li>分类17</li>
        <li>分类18</li>
        <li>分类19</li>
        <li>分类20</li>
        <li>分类21</li>
        <li>分类22</li>
        <li>分类23</li>
        <li>分类24</li>
        <li>分类25</li>
        <li>分类26</li>
        <li>分类27</li>
        <li>分类28</li>
        <li>分类29</li>
        <li>分类30</li>
        <li>分类31</li>
        <li>分类32</li>
        <li>分类33</li>
        <li>分类34</li>
      </ul>
    </div>

  </div>
</div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  // import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import HomeSwiper from './childrenComponents/HomeSwiper'
  import HomeRecommendView from './childrenComponents/HomeRecommendView'
  import FeatureView from './childrenComponents/FeatureView'

  import {getHomeMultiData,getHomeGoods} from "network/home";

  import BScroll from 'better-scroll'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList
      // Scroll
    },
    data() {
      return {
        scroll: null,
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
    mounted() {
      // console.log(this.$refs.aaa);
      // console.log(document.querySelector('.wrapper'));
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType: 3,
        pullUpLoad: true,
        click: true
      })
      this.scroll.on('scroll', (position) => {
        // console.log(position);
      })
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
      })
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
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
  }

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

  .wrapper {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }
</style>
