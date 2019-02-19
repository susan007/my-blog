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
      },
      methods: {
          add(a, b) {
              return a+b
          }
      }
  }
</script>

<style>
  .cpt-hello{
    color: red;
  }
</style>
