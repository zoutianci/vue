<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>
          计划版
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/Home">首页</router-link>
          </li>
          <li>
            <router-link to="/TimeEntries">计划列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar/>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components: {
    sidebar
  }
}
</script>

<style>

</style>
