// 注册一个自定义组件
<template>
  <div class="cpt-hello" id="content">
    Hello Kitty
  </div>
</template>

<script>
  export default {
      name: 'hello',
      mounted() {
          this.add(1,2)
          this.reduce(5, 2)
      },
      methods: {
          add(a, b) {
              return a+b
          },
          reduce(x, y) {
              return x-y
          }
      }
  }
</script>

<style>
  .cpt-hello{
    color: red;
  }
</style>
