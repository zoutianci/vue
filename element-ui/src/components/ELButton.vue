<template>    
    <button class="el-button" :class="[type? 'el-button--'+type : '',{'is-disabled':buttonDisabled,'is-loading':loading}]" @click="doLoading" >
      <i class="el-icon-loading" v-if='loading'></i>
      <i v-if="icon&&!loading" :class="icon" ></i>
      <slot></slot>
    </button>       
</template>

<script>
export default {
  name: "ElButton",
  props: {
    loading: String,
    disable: Boolean,
    type: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    callback: ""
  },

  computed: {
    buttonDisabled() {
      return this.disable;
    }
  },
  methods: {
    setName: function() {
      var input = this.input;
      if (input.trim() == "") {
        alert("empty");
      } else {
        Api.searchTest(this.input, this.success);
      }
    },
    success(responseData) {
      this.callback(responseData);
    }
  }
};
</script>

<style>
</style>
