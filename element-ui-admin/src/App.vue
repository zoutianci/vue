<template>
  <div id="app">
    <!-- <login></Login> -->
    <!-- <Comment></Comment> -->
    <!-- <ArticleTable></ArticleTable> -->
    <el-alert :title="title" type="success" v-if="hasErr" @close="doAlertClose"></el-alert>
  </div>
</template>

<script>
// @ 表示 alias 地址短连接, 在哪里都指向src 让地址引入更轻松
// import Login from '@/views/Login'
// import Comment from '@/components/Comment'
// import ArticleTable from "@/views/ArticleTable"
import elAlert from '@/components/Alert'

export default {
  // <------elAlert------>
  data() {
    return{
      hasErr: false,
      title:'成功输出这一句话',
    }
  },
  components: {
    elAlert,
  },
  mounted() {
    setTimeout(() => {
      this.hasErr = true;
    }, 2000);
  },
  methods: {
    doAlertClose() {
      console.log('close');
    },
  },

  // <------ArticleTable----->
  // components: {
  //   ArticleTable,
  // }

  // <------Comment------>
  // components: {
  //   Comment,
  // }

  // <------Login------->
  // isLoading: false,
  // disabled: false,
  // name: 'App',
  // components: {
  //   Login
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.disabled = true;
  //   }, 2000);
  // }
}
</script>

<style>
/* <------Comment-----> */
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
