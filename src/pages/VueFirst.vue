<template>
  <div>
    <p>1.双括号数据绑定：{{ msg }}</p>
    <p>2.使用 v-html 指令用于输出 html 代码：<span v-html="msg"></span></p>
    <p>3.HTML 属性中的值应使用 v-bind 指令：</p>
      <p class="bindAttr">a.绑定id：<span v-bind:id="'list-' + id">  id:  list-{{id}}</span></p>
      <p class="bindAttr">b.绑定class：<span v-bind:class="{'class1': ifShow}">
        <label><input type="checkbox" v-model="ifShow">勾选变化颜色</label></span></p>
      <p class="bindAttr">c.绑定href：<a v-bind:href="url" target="_blank">百度</a></p>
    <p>4.Vue.js 都提供了完全的 JavaScript 表达式支持：</p>
      <p class="bindAttr">a.加法 5 + 5 ：{{5+5}}</p>
      <p class="bindAttr">b.三目运算 ok ? 'YES' : 'NO'：{{ ifShow ? 'YES' : 'NO' }}</p>
      <p class="bindAttr">c.调用基础api "abcdef".split('').reverse().join('') ：{{ message.split('').reverse().join('') }}</p>

    <p>5.修饰符</p>
    <p class="bindAttr">a.事件修饰器.stop<a :href="url" v-on:click.stop="doSomething">baidu</a></p>
    <p class="bindAttr">a.阻止单击事件冒泡.stop<input type="button" value="点击" v-on:click="doSomething"></p>
    <p class="bindAttr">a.阻止单击事件冒泡.stop<input type="button" value="点击" v-on:click="doSomething"></p>
    <p class="bindAttr">a.按键修饰符.keyup.enter<input v-on:keyup.enter="doSomething" v-model="writeIn"></p>
  </div>
</template>

<script>

export default{
  name: 'VueFirst',
  data () {
    return {
      msg: '<span style="color: red;">v-html 输出</span>',
      id: 0,
      ifShow: false,
      url: 'http://www.baidu.com',
      message: 'abcdef',
      writeIn: ''
    }
  },
  methods: {
    doSomething: function () {
      console.info(this.writeIn)
      alert(0)
      confirm('确认删除吗')
    }
  },
  components: {

  }
}
</script>
<style>
  .bindAttr{
    text-indent: 2em;
  }
  .class1{
    color: red;
  }
</style>
