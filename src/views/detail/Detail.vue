<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" ref="nav" @titleClick="titleClick"/>
    <scroll ref="scroll" class="content" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-imgs="topImgs"/>
      <detail-params-info ref="params" :item-params="itemParams"/>
      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
        <li>列表21</li>
        <li>列表22</li>
        <li>列表23</li>
        <li>列表24</li>
        <li>列表25</li>
        <li>列表26</li>
        <li>列表27</li>
        <li>列表28</li>
        <li>列表29</li>
        <li>列表30</li>
        <li>列表31</li>
        <li>列表32</li>
        <li>列表33</li>
        <li>列表34</li>
        <li>列表35</li>
        <li>列表36</li>
        <li>列表37</li>
        <li>列表38</li>
        <li>列表39</li>
        <li>列表40</li>
        <li>列表41</li>
        <li>列表42</li>
        <li>列表43</li>
        <li>列表44</li>
        <li>列表45</li>
        <li>列表46</li>
        <li>列表47</li>
        <li>列表48</li>
        <li>列表49</li>
        <li>列表50</li>
      </ul>
    </scroll>

    <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from './childrenComponents/DetailNavBar'
import DetailSwiper from './childrenComponents/DetailSwiper'
import DetailParamsInfo from './childrenComponents/DetailParamsInfo'
import DetailBottomBar from './childrenComponents/DetailBottomBar'
import {getDetail, GoodsInfo} from "../../network/detail";
import {itemListnerMixin} from "common/mixin";
import {debounce} from "common/utils";

import Scroll from 'components/common/scroll/Scroll'

export default {
      name: "Detail",
      data() {
        return {
          id: null,
          topImgs: [],
          goodsInfo: null,
          itemParams: {},
          topYs: [],
          getTopY: null,
          currentIndex: 0
        }
      },
      mixins:[itemListnerMixin],
      components: {
        DetailNavBar,
        DetailSwiper,
        Scroll,
        DetailParamsInfo,
        DetailBottomBar
      },
      created() {
        //保存商品id
        this.id = this.$route.params.id

        //根据id展示详情
        getDetail(this.id).then(res => {
          this.topImgs = res.topImgs
          this.goodsInfo = new GoodsInfo(res.goodsInfo)

          //this.itemParams = res.itemParams
          this.itemParams = {name:'参数', created:'1535654729'}
        })

        //debounce防抖
        this.getTopY = debounce(() => {
          //暂时放在这里，应该等等图片加载完成之后执行
          this.$nextTick(() => {
            this.topYs.push(0);
            this.topYs.push(this.$refs.params.$el.offsetTop);
            this.topYs.push(0);
            this.topYs.push(this.$refs.params.$el.offsetTop);
            this.topYs.push(Number.MAX_VALUE);

            console.log(this.$refs.params.$el);
          })
        }, 100)

      },
      methods: {
        addToCart() {
          console.log('addToCart');
          const product = {}
          product.image = this.topImgs[0]
          product.title = this.goodsItem.title
          product.desc = this.goodsInfo.desc
          product.price = this.goodsInfo.newPrice
          product.lid = this.goodsInfo.lid

          //同步
          // this.$store.commit('addCart', product)

          //异步
          this.$store.dispatch('addCart', product)

        },
        titleClick(index) {
          this.$refs.scroll.scrollTo(0, -this.topYs[index], 200)
        },
        contentScroll(position) {
          const positionY = -position.y;
          const length = this.topYs.length;
          for (let i=0; i<length; i++) {
            if (this.currentIndex !== i && (i<length-1 && positionY >= this.topYs[i] && positionY < this.topYs[i+1])
              || (i === length && positionY >= this.topYs[i]))  {
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex;
            }
          }

          // if (this.currentIndex !== i) {
          //
          // }
        }
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
    height: 200px;
    z-index: 9;
    background-color: #fff;
    overflow: hidden;
  }
  .nav-bar {
    position: relative;
  }
</style>
