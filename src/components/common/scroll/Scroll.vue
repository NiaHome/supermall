<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
      name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default() {
          return 0;
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1.创建对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })

      //2.监听滚动位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })

      //3.监听滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
        scrollTo(x, y, time=300) {
          this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
        },
      finishPullUp() {
          this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>
