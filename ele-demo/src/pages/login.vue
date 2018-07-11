<template>
    <div class="loginContainer">        
        <head-top head-title="登录" goBack="true" >
            <!-- <span slot="logo" class="head_logo">ele.me</span> -->
            <slot name="button">button</slot>
        </head-top>
        <img style="margin-top:10rem" :src="captchaCodeImg" v-if="captchaCodeImg" alt="">
    </div>
</template>

<script>
import headTop from '@/components/headTop'
import {getcaptchas} from '@/api/getData'
// 业务经验一: 对于nanvigationBar的封装
// history  title  居中  右边的buttons

export default {
    data() {
        return{
            captchaCodeImg: '',
            codeNumber: null,
        }
    },
    components: {
        headTop,
    },
    methods: {
        async getCaptchaCode() {
            const res = await getcaptchas();
            console.log(res);
            this.captchaCodeImg = res.code;
        }
    },
    mounted() {
        this.getCaptchaCode()
    }
}
</script>

<style>
/* .login {
    width: 100%;
    height: 2rem;
    border: 1rem solid red;
    background-color: blue;
    z-index: 999;
} */
</style>
