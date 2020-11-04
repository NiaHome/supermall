<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"/>
    <scroll class="content">
      <detail-swiper :top-imgs="topImgs"/>
      <detail-params-info :item-params="itemParams"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childrenComponents/DetailNavBar'
import DetailSwiper from './childrenComponents/DetailSwiper'
import DetailParamsInfo from './childrenComponents/DetailParamsInfo'
import {getDetail, GoodsInfo} from "../../network/detail";
import {itemListnerMixin} from "common/mixin";

import Scroll from 'components/common/scroll/Scroll'

export default {
      name: "Detail",
      data() {
        return {
          id: null,
          topImgs: [],
          goodsInfo: null,
          itemParams: {}
        }
      },
      mixins:[itemListnerMixin],
      components: {
        DetailNavBar,
        DetailSwiper,
        Scroll,
        DetailParamsInfo
      },
      created() {
        //保存商品id
        this.id = this.$route.params.id

        //根据id展示详情
        getDetail(this.id).then(res => {
          this.topImgs = res.topImgs
          this.goodsInfo = new GoodsInfo(res.goodsInfo)

          //this.itemParams = res.itemParams
          this.itemParams = {name:'huhu', created:'1535654729'}
        })
      }
    }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px);
    z-index: 9;
    background-color: #fff;
  }
  .nav-bar {
    position: relative;
  }
</style>
