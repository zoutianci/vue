<template>
    <div>
        <head-top signinUp="home">
            <span slot="logo" class="head_logo">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位的城市:</span>
                <span>定位不准, 请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/'+guessCityid" class="guess_city">
                <span>{{guessCity}}</span>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="cityListul clear">
                <router-link :to="'/city/' + item.id" v-for="item in hotcity" :key="item.id" tag="li">{{item.name}}</router-link>
            </ul>
        </section>
    </div>
</template>

<script>
import headTop from '@/components/headTop.vue'
import {cityGuess, hotcity} from '@/api/getData'
export default {
    data() {
        return{
            guessCityid: '123',
            guessCity: '南昌',
            hotcity: [],
        }
    },
    components: {
        'head-top': headTop,
    },
    async mounted() {
        const cityData = await cityGuess();
        this.guessCityid = cityData.id;
        this.guessCity = cityData.name;
        this.hotcity = await hotcity();
    }
}
</script>

<style lang="stylus" scoped>
@import "../style/mixin"
.city_nav 
    padding-top 2.35rem
    border-top 1px solid $bc
    background-color #ffffff
    margin-bottom 0.4rem

    .city_tip
        fj()
        line-height 1.45rem
        padding 0 0.45em
        span:nth-of-type(1)
            sc(0.55rem, #666666)
        span:nth-of-type(2)
            font-weight 900
            sc(0.475rem, #9f9f9f)
</style>
