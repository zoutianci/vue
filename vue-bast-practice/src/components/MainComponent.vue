<template>
  <div>MainComponent
    <click-component v-for="i in 5" :key="i" :index="i"></click-component>
    <show-component></show-component>
  </div>
</template>

<script>
import clickComponent from '@/components/click'
import showComponent from '@/components/show'
export default {
  components: {
    clickComponent,
    showComponent
  }
}
</script>

<style>

</style>
