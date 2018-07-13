<template>
  <div>Click
    <a href="#" class="click" :data-index="index" @click.prevent="doClick($event)">点击我</a>
  </div>
</template>

<script>
// import Bus from '@/common/bus.js'

export default {
  props: {
    index: Number
  },
  methods: {
    doClick(e) {
      console.log(e.target.dataset.index)
      // Bus.$emit('getTarget', e.target.dataset.index) // 发布一个名为getTarget的事件, 并传入一个值
      this.$emit('global:getTarget', e.target.dataset.index) // 使用vue-event-proxy插件之后的语法
    }
  }
}
</script>

<style>

</style>
