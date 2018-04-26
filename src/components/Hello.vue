<template>
  <div class="hello">
    <input v-model="msg">
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<!--   // import Vue, {ComponentOptions} from 'vue'
  // export default {
  //   name: 'hello',
  //   data() {
  //     return {
  //       msg: 'vue + typescript'
  //     }
  //   }
  // } as ComponentOptions<Vue>

  // import Vue from 'vue'
  // import Component from 'vue-class-component'
  // @Component
  // // @Component 修饰符注明了此类为一个 Vue 组件
  // // @Component({
  // // })
  // export default class Hello extends Vue {
  //   // 初始数据可以直接声明为实例的属性
  //   message: string = 'Hello!'
  //   // 组件方法也可以直接声明为实例的方法
  //   onClick (): void {
  //     window.alert(this.message)
  //   }
  // } -->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Hello extends Vue {
  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, '

  // lifecycle hook
  mounted () {
    console.log('test');
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    console.log('greeting: ' + this.msg)
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
