<template>
  <div id="app">
    <span v-for="item in types" :key="item"><input type="button" :value=item @click="changeType(item)"></span>
    <p>
      <span v-if="type === 'vue 详解'">
        <h1>vue 的简单应用</h1>
        <vue-detail></vue-detail>
      </span>
      <span v-else-if="type === 'eCharts'">
        <h1>vue 的简单应用</h1>
        <!--<vue-detail></vue-detail>-->
      </span>
      <span v-else-if="type === 'C'">C</span>
      <span v-else>Not A/B/C</span>
    </p>
    <div v-if="true">

    </div>

  </div>
</template>

<script>

import VueDetail from './pages/VueDetail'

export default {
  name: 'App',
  data () {
    return {
      types: ['vue 详解', 'eCharts', 'C'],
      type: 'vue 详解'
    }
  },
  methods: {
    changeType: function (item) {
      this.type = item
    }
  },
  components: {
    Storage, VueDetail
  }
}
</script>
<style scoped>
  input{
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: #8ac007;
    border: 1px solid #8ac007;
    margin-right: 30px;
  }
  input:hover{
    opacity: 0.5;
  }
</style>
