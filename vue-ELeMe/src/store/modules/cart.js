
const mutations =  {
    pushProductToCart(state, {id}) {
        state.items.push({
            id: id,
            quantity: 1,
        }) 
    },
    incrementItemQuantity(state, {id}){
        const cartItem = state.items.find(item => item.id === id);
        cartItem.quantity++;
    },
};

// 对state 的计算或处理  vuex的store  是一棵树,  参数就是树根 找到product.all
const getters =  {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(product => product.id === id) 
            return {
                id: product.id,
                title: product.title,
                quantity,
                price: product.price,
            }            
        })
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total+product.quantity*product.price;
        }, 0);
    }
};

const state =  {
    items: [],
    checkoutStatus: null,
};
  
const actions = {
    addProductToCart({state, commit}, product) {
        console.log(product);
        if(product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id);
            if(!cartItem) {
                commit('pushProductToCart', {id: product.id});
            }else {
                commit('incrementItemQuantity', {id: product.id})
            }
            commit('decrementProductInventory', {id: product.id})
        }
    }
};

export default {
    state,
    actions,
    getters,
    mutations,
};