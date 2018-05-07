<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <!--<hello-world></hello-world>-->
    <div class="container">
      <ul>
        <li>
          <v-link href="/">主页</v-link>
          <v-link href="/about">About</v-link>
          <v-link href="/haha">Haha</v-link>
        </li>
      </ul>

      <slot></slot>
      <div>---------------------------------------------------</div>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Detail from './components/Detail'
import VLink from './components/VLink'

export default {
  components: {
    // Detail,
    // HelloWorld,
    VLink
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
