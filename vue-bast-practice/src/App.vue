<template>
  <div id="wrapper">
    <p>
      FullName: {{ fullName }}
    </p>
    <p>
      FirstName: <input type="text" v-model="firstName">
    </p>
    <p>obj.a {{ obj.a }} <input type="text" v-model="obj.a"></p>
    <main-component></main-component>
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
import MainComponent from '@/components/MainComponent'
import sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  data () {
    return {
      firstName: '小明',
      lastName: '朱',
      fullName: '',
      obj: {
        a: 123
      }
    }
  },
  watch: {
    firstName: {
      handler(newName, oldName) {
        console.log('firstName')
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true,
    },
    obj: {
      handler(newData, oldData) {
        console.log(newData.a)
        console.log(oldData)
      },
      deep: true,
      // immediate: true
    }
    // firstName (newName, oldName) {
    //   console.log(newName, oldName)
    //   this.fullName = newName + ' ' + this.lastName
    // }
  },
  // computed: {
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // },
  components: {
    sidebar,
    MainComponent
  }
}
</script>

<style>

</style>
