import {ADD_CART} from './mutations-types';

const key = 'b';
const obj = {
    'a': 1,
    [key]: 2
}
obj[key];

export default {
    // [ADD_CART]:(state, {}) => {}

    [ ADD_CART ](state, {
        shopid,
        food_id,
    }) {

    },
    // [ a ](a,{a}){a,b},
}