import shop from '@/api/shop'

// mudules是Store 里面的一间库房 modules 搬运:actions 一个动作(一般由生命周期触发) 搬运的是state 一个状态数据  getters 获取状态的get方法  mutation 改变(会计,记账)

const state = {
    all: [],
}

const getters = {

}

const actions = {
    getAllProducts({commit}) {
        shop.getProducts((products) => {
            commit('setProducts', products);
        });
    },
    addProductToCart({commit}) {

    },
}

const mutations = {
    setProducts(state, products) {
        state.all = products;
    },
    decrementProductInventory(state, {id}) {
        const product = state.all.find(product => product.id === id);
        product.inventory--;
        
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}