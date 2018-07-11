<template>
    <div class="login-container">
        <el-form class="login-form" ref="loginForm" autoCoplete="on" :model="loginForm" :rules="loginRules" label-position="left">
            <div class="title-container">
                <h3 class="title">
                    系统登录
                </h3>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" palceholder="请输入密码"></el-input>
            </el-form-item>
            <el-button :disabled="disabled" :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
import {isvalidUsername} from '@/utils/validate'

export default {
    data() {
        const validateUsername = (rule, value, callback) => {
            if (!isvalidUsername(value)) {
                callback(new Error("请输入正确的用户名5"))
            }else {
                callback();
            }
        }
        const validatePassword = (rule, value, callback) => {
            if(value.length < 6) {
                callback(new Error('密码至少6位'));
            }else {
                callback();
            }
        }
        return {
            loading: false,
            disabled: true,
            loginRules: {
                username: [{
                    required: true,
                    trigger:'blur',
                    validator: validateUsername,

                }],
                password: [{
                    required: true,
                    trigger: 'blur',
                    validator: validatePassword,
                }]
            },
            loginForm: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        handleLogin() {
            // 要做什么? 要验证数据
            this.$refs.loginForm.validate(valid => {
                if(valid) {
                    this.disabled = false;
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        
                    },2000)
                    console.log('提交成功');
                }else {
                    console.log('error submit!');
                    return false;
                }
            })
        }
    },
    mounted: {
        // checked
    }
}
</script>

<style>

</style>

