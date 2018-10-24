// 注册一个自定义组件
<template>
  <div class="cpt-hello">
    <el-container>
      <!--head-->
      <el-header>
        静静是小花
      </el-header>
      <!--content-->
      <el-main>

      </el-main>
      <!--footer-->
      <el-footer>

      </el-footer>

    </el-container>
  </div>
</template>

<script>
  export default {
      name: 'my-hello'
  }
</script>

<style>
  .cpt-hello{
    color: red;
  }
</style>
