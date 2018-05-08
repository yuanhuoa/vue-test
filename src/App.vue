<template>
  <div id="app">
    <h1>vue 的简单应用</h1>
    <!--<img src="./assets/logo.png">-->
    <div class="container">
      <ul>
          <!-- router-link 定义点击后导航到哪个路径下 -->
          <li><router-link to="/">HelloWorld</router-link></li>
          <li><router-link to="/vuefirst">vue 起步</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/haha">Haha</router-link></li>
          <li><router-link to="/error">404</router-link></li>
          <li><router-link to="/detail">Detail</router-link></li>

          <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
          <li><router-link to="/user/zhangsan">Welcome User: zhang</router-link></li>
          <li style="border: 0px;"><router-link to="/user/lisi">Welcome User: li</router-link></li>
      </ul>
    </div>
    <!-- 对应的组件内容渲染到router-view中 -->
    <div class="contain-main"><router-view></router-view></div>

    <div style="clear: both;"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      user: 'zhangsan',
      dynamicSegment: ''
    }
  },
  components: {

  },
  // computed: {
  //   dynamicSegment () {
  //     return this.$route.params.id
  //   }
  // },
  watch: {
    $route (to, froms) {
      // to表示的是你要去的那个组件，
      // from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
      // console.log(to)
      // console.log(froms)
      // this.dynamicSegment = to.params.id
      // console.log(this.$router)
      // console.log(to.params)
      // console.log(this.dynamicSegment)
      // this.$router.push("home")  跳转home组件界面
    }
  }
}
</script>
