<template>
  <!-- <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div> -->

  <!-- < ------ try shoppingCart ----- > -->
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <!-- <product-list :products="products"></product-list>给专门的文件去打理 -->
    <hr>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
// import header from '@/components/header/header';
// const response = require('@/common/data/seller.json');
// import {urlParse} from '@/common/js/util';
// const ERR_OK = 0;

// <------try shoppingCart----->
import productList from '@/components/ProductList';
import shoppingCart from '@/components/ShoppingCart';
// import shop from "@/api/shop.js";  给专门的文件去打理
// import Vuex from 'vuex';
// vue.use(Vuex);

export default {
  // <------try shoppingCart----->
  name: 'App',
  data() {
    return{
      // products: [],  给专门的文件去打理
    }
  },
  components: {
    productList,
    shoppingCart,  
  },
  // created() {   给专门的文件去打理
  //   shop.getProducts((res) => {
  //     this.products = res;
  //   })
  // }  


  // data() {
  //   return{
  //     seller: {
  //       id: (() => {
  //         let queryParam = urlParse();
  //         return queryParam.id;
  //       })()
  //     },
  //   }
  // },
  // created() {
  //   if (response.errno === ERR_OK) {
  //     this.seller = Object.assign({},this.seller, response.data);
  //   }
  // },
  // components: {
  //   vHeader: header,
  // }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// @import "./common/stylus/index.styl"
//   .tab
//     display: flex
//     width: 100%
//     height: 40px
//     line-height: 40px
//     // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
//     border-1px(rgba(7, 17, 27, 0.1))
//     .tab-item
//       flex: 1
//       text-align: center
//       & > a
//         display: block
//         font-size: 14px
//         color: rgb(77, 85, 93)
//         &.active
//           color: rgb(240, 20, 20)


// <------try shoppingCart----->
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
