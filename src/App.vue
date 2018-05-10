<template>
  <div id="app">
    <h1>vue 的简单应用</h1>
    <!--<img src="./assets/logo.png">-->
    <div class="container">
      <ul>
          <!-- router-link 定义点击后导航到哪个路径下 -->
          <li v-for="(item, index) in routers" v-bind:key="item.name" v-on:click="changeColor(index)">
            <router-link :routers="routers" v-bind:id="'list-' + index" v-bind:to=item.router v-bind:class="{ 'container-a':true,'container-a-click':item.checked }">{{item.name}}</router-link>
          </li>

          <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
          <!--<li><router-link to="/user/zhangsan" class="container-a">Welcome User: zhang</router-link></li>-->
          <!--<li><router-link to="/user/lisi" class="container-a">Welcome User: li</router-link></li>-->
      </ul>
    </div>
    <!-- 对应的组件内容渲染到router-view中 -->
    <div class="contain-main"><router-view></router-view></div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>

import Storage from './components/localstorage'
export default {
  name: 'App',
  components: {
    Storage
  },
  created () {
    var preIndex = Storage.fetchNum()
    if (preIndex != null) {
      this.routers[preIndex].checked = true
    } else {
      var path = this.$route.path
      var router = this.routers
      router.forEach(function (value, index) {
        if (value.router === path) {
          router[index].checked = true
          Storage.saveNum(index)
        }
      })
    }
  },
  data () {
    return {
      routers: [
        {
          name: 'HelloWorld',
          router: '/',
          checked: false
        }, {
          name: 'vue 起步',
          router: '/vuefirst',
          checked: false
        }, {
          name: 'vue 条件语句',
          router: '/vIf',
          checked: false
        }, {
          name: 'vue 循环语句',
          router: '/vFor',
          checked: false
        }, {
          name: 'Vue 计算属性',
          router: '/computed',
          checked: false
        }, {
          name: 'vue 监听属性',
          // router: {
          //   name: 'Listen',
          //   params: {num: 5}
          // },
          router: '/listen',
          checked: false
        }, {
          name: 'Vue 样式绑定',
          router: '/class',
          checked: false
        }, {
          name: 'Vue 事件处理',
          router: '/vOn',
          checked: false
        }, {
          name: 'Detail',
          router: '/detail',
          checked: false
        }, {
          name: 'Welcome User: zhang',
          router: '/user/zhangsan',
          checked: false
        }, {
          name: 'Welcome User: li',
          router: '/user/lisi',
          checked: false
        }
      ],
      dynamicSegments: ''
    }
  },
  // computed: {
  //   dynamicSegment () {
  //     return this.$route.params.id
  //   }
  // },
  methods: {
    changeColor: function (index) {
      this.routers[index].checked = true
      var preIndex = Storage.fetchNum()
      if (preIndex != null) {
        if (index === preIndex) return
        this.routers[preIndex].checked = false
      }
      Storage.saveNum(index)
    }
  },
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
