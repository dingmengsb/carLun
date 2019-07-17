import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Detile from '../views/detile.vue'
import CheapPrice from '../views/cheapPrice.vue'
import TypeCar from '../views/typeCar.vue'

import Car from '../views/detailImg/car.vue'
import Color from '../views/detailImg/color.vue'
import DetailImg from '../views/detailImg/DetailImg.vue'
import Moreimg from '../views/detailImg/moreImg.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:"/detil",
      name:"detil",
      component:Detile
    },
    {
      path:"/cheapPrice",
      name:"cheapPrice",
      component:CheapPrice,
    },
    {
      path:"/typecar",
      name:"typecar",
      component:TypeCar,
    },
    {
      path:"/car",
      name:"car",
      component:Car,
    },
    {
      path:"/color",
      name:"color",
      component:Color,
    },
    {
      path:"/detailImg",
      name:"DeatilImg",
      component:DetailImg,
    },
    {
      path:"/more",
      name:"moreImg",
      component:Moreimg,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]
})
