import Vue from 'vue'
import VueX from 'vuex'

import mutations from './mutations'
import actions from './actions'

//1.安装插件
Vue.use(VueX)

//2.创建实例
const state = {
  cartList:[]
}
const store = new VueX.Store({
  state,
  mutations,
  actions
})

//3.导出
export default store
