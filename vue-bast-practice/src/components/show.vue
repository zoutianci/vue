<template>
  <div>Show
    {{ html }}
  </div>
</template>

<script>
import Bus from '@/common/bus.js'
export default {
  data () {
    return {
      html: '还没有点击'
    }
  },
  created () {
    // Bus.$on('getTarget', index => { // 实现一次订阅
    //   this.html = `第${index}个元素被点击了`
    // }) 
    this.$on('global:getTarget', index => {//使用vue-event-proxy插件之后的语法
      this.html = `第${index}个元素被点击了`
    }) 
  }
}
</script>

<style>

</style>
