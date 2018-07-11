import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import cart from './modules/cart';
Vue.use(Vuex);

// Vuex 管理着Vue大型项目中的数据流, 小型项目不要用vuex,
// 自此 , vue项目将分为两部分: vue和vue-router负责页面构建组件化,  Vuex

export default new Vuex.Store({
    modules: {
        products,
        cart,
    }
})