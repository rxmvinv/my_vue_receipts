import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import OneProduct from '@/components/OneProduct'
import NewProduct from '@/components/NewProduct'
import EditProduct from '@/components/EditProduct'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: OneProduct
    },
    {
      path: '/products/new',
      name: 'NewProduct',
      component: NewProduct
    },
    {
      path: '/products/edit/:id',
      name: 'EditProduct',
      component: EditProduct
    }
  ]
})
