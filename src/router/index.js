import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

//1.安装插件
Vue.use(Router)

//2.创建路由对象
const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/cart',
    name: '购物车',
    component: Cart
  },
  {
    path: '/profile',
    name: '档案',
    component: Profile
  },
  {
    path: '/category',
    name: '分类',
    component: Category
  },
  {
    path: '/detail/:id',
    name: '详情',
    component: Detail
  }
]

const router = new Router({
  //配置路径和组建的应用关系
  routes,
  //去掉url中的#号
  mode: 'history'
})

//3.导出
export default router
