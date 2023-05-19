<script setup>

</script>

<template>
  <!-- 一级出口路由组件 -->
  <RouterView/>
  <div class="test">
    test scss  
  </div>
</template>

<style scoped lang="scss">
  .test{
    color: $warnColor;
  }
</style>
