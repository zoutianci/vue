<template>
    <ul>
        <li v-for="(product, index) in products" :key="index">
            {{product.title}} - {{product.price | currency}}
            <br>
            <button :disabled="!product.inventory" @click="addProductToCart(product)">Add To Cart</button>
        </li>
    </ul>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
export default {
    // disabled: Boolean,
    // data() {
    //     return{
    //         products: [],
    //     }
    // },
    // props:{
    //     products: Array,
    // },
    computed:{

    },
    methods: mapActions([
        'addProductToCart',
    ]),
    computed : mapState({
        // products: (s) => {
        //     console.log(e);
        //     console.log(typeof(s));
        //     console.log(s instanceof Object);
        //     return s.products.all;
        // },
        products : p => p.products.all,
    }),
    created() { 
        this.$store.dispatch('getAllProducts')
    }
}
</script>

<style>

</style>
