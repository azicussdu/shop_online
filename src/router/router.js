import Vue from 'vue'
import Router from 'vue-router'

/* import login from '../views/sample-pages/login'
import register from '../views/sample-pages/register' */

import admin from '../views/layouts/admin'
/*
import store from '../vuex/store'
*/
import addFilterGroup from '../views/layouts/admin-components/filter/add-filter-group'
// Admin page components
import listProduct from '../views/layouts/admin-components/products/list-products'
import listOrders from '../views/layouts/admin-components/orders/list-orders'
import orderDetail from '../views/layouts/admin-components/orders/order-detail'
import listCategories from '../views/layouts/admin-components/categories/list-categories'
import categoryDetail from '../views/layouts/admin-components/categories/category-detail'
import listBrands from '../views/layouts/admin-components/brands/list-brands'
import addBrand from '../views/layouts/admin-components/brands/add-brand'
import editBrand from '../views/layouts/admin-components/brands/edit-brand'
import listUsers from '../views/layouts/admin-components/users/list-users'
import listFilters from '../views/layouts/admin-components/filter/list-filters'
import addProduct from '../views/layouts/admin-components/products/add-product'
import productDetail from '../views/layouts/admin-components/products/product-detail'
import editFilterGroup from '../views/layouts/admin-components/filter/edit-filter-group'
import listFiltersAttributes from '../views/layouts/admin-components/filter/list-filter-attributes'
import addFilterAttributes from '../views/layouts/admin-components/filter/add-filter-attribute'
import editFilterAttributes from '../views/layouts/admin-components/filter/edit-filter-attribute'
import addUser from '../views/layouts/admin-components/users/add-user'
import editUser from '../views/layouts/admin-components/users/edit-user'
import mainPage from '../views/layouts/admin-components/mainPage/dashboard'
import categoryCatalog from '../views/layouts/shop-components/category/category-catalog'
import productCatalog from '../views/layouts/shop-components/product/product-catalog'
import main from '../views/layouts/shop-components/main/main'
import signin from '../views/layouts/signin'
import signup from '../views/layouts/signup'
import contact from '../views/layouts/shop-components/contact/contact'
import profileMain from '../views/layouts/shop-components/profile/profile-main'
import profileOrders from '../views/layouts/shop-components/profile/profile-orders'
import profileSettings from '../views/layouts/shop-components/profile/profile-settings'
import cart from '../views/layouts/shop-components/cart/cart'
import payment from '../views/layouts/shop-components/payment/payment'
import about from '../views/layouts/shop-components/about/about'
import shopProductDetail from '../views/layouts/shop-components/product/product-detail'
import profile from '../views/layouts/shop-components/profile/profile'
import profileOrdersDetail from '../views/layouts/shop-components/profile/profile-orders-detail'
Vue.use(Router)

const ifAdmin = (to, from, next) => {
  if (localStorage.getItem('user_role') === 'admin') {
    next()
    return
  }
  next('/')
}

let router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'sigin',
      component: signin
    },
    {
      path: '/register',
      name: 'signup',
      component: signup
    },
    {
      path: '/profile',
      name: 'profile-main',
      component: profile,
      children: [
        {
          path: 'main',
          name: 'profile-main',
          component: profileMain
        },
        {
          path: 'settings',
          name: 'profile-settings',
          component: profileSettings
        },
        {
          path: 'orders',
          name: 'profile-orders',
          component: profileOrders
        },
        {
          path: 'orders/detail',
          name: 'profile-orders-detail',
          component: profileOrdersDetail
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      beforeEnter: ifAdmin,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: mainPage
        },
        {
          path: 'products',
          name: 'list-product',
          component: listProduct
        },
        {
          path: 'add_product',
          name: 'add-product',
          component: addProduct
        },
        {
          path: 'products/detail/:id',
          name: 'product-detail',
          component: productDetail
        },
        {
          path: 'categories',
          name: 'list-categories',
          component: listCategories
        },
        {
          path: 'categories/detail/:id',
          name: 'category-detail',
          component: categoryDetail
        },
        {
          path: 'brands',
          name: 'list-brands',
          component: listBrands
        },
        {
          path: 'add_brand',
          name: 'add-brand',
          component: addBrand
        },
        {
          path: 'brands/detail/:id',
          name: 'edit-brand',
          component: editBrand
        },
        {
          path: 'orders',
          name: 'list-orders',
          component: listOrders
        },
        {
          path: 'orders/detail/:id',
          name: 'order-detail',
          component: orderDetail
        },
        {
          path: 'users',
          name: 'list-users',
          component: listUsers
        },
        {
          path: 'user/add',
          name: 'add-user',
          component: addUser
        },
        {
          path: 'user/edit/:id',
          name: 'edit-user',
          component: editUser
        },
        {
          path: 'filters',
          name: 'list-filter',
          component: listFilters
        },
        {
          path: 'filters/add/group',
          name: 'add-filter-group',
          component: addFilterGroup
        },
        {
          path: 'filters/edit/group/:id',
          name: 'edit-filter-group',
          component: editFilterGroup
        },
        {
          path: 'filters/attributes',
          name: 'filter-attribute',
          component: listFiltersAttributes
        },
        {
          path: 'filters/attribute/add',
          name: 'add-filter-attribute',
          component: addFilterAttributes
        },
        {
          path: 'filters/edit/attribute/:id',
          name: 'edit-filter-attribute',
          component: editFilterAttributes
        }
      ]
    },
    {
      path: '/categories/:id',
      name: 'category-catalog',
      component: categoryCatalog
    },
    {
      path: '/products/category/:id',
      name: 'product-catalog',
      component: productCatalog
    },
    {
      path: '/contacts',
      name: 'contact',
      component: contact
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/products/:id/detail',
      name: 'productDetail',
      component: shopProductDetail
    }
    /* {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }, */
  ]
})

export default router
