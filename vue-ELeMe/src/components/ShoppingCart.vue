<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length"><i>Please add some products to cart</i></p>
        <ul>
            <li v-for="item in products" :key="item.id">{{item.title}}--{{item.price|currency}}x{{item.quantity}}件</li>
            <p>{{total|currency}}</p>
        </ul>        
    </div>
</template>

<script>
import {mapstate, mapState, mapGetters} from 'vuex';

export default {
    computed: {
        // items(e){
        //     return e.cart.items;
        // },
        // items(state){
        //     return state.cart.checkoutStatus;
        // },
        ...mapState({
            items: e => e.cart.items,
            checkoutStatus: state => state.cart.checkoutStatus,
        }),
        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotalPrice',
        })
    }
}
</script>

<style>

</style>
