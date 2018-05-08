<template>
  <div>
    <p>welcome user</p>
    <p>
      <!-- router-link 的to属性要注意，路由是先进入到home,然后才进入相应的子路由如 phone,
            所以书写时要把 home 带上 -->
      <router-link to="/home/run">跑步</router-link>
      <router-link to="/home/basketball">打球</router-link>
    </p>
    <div>-----------------------</div>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>
