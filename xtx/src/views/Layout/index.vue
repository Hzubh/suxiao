<script setup>

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeaderFloat from './components/LayoutHeaderFloat.vue';
</script>

<template>
  <LayoutHeaderFloat/>
  <LayoutNav />
  <LayoutHeader/>
  <RouterView />
  <LayoutFooter />
</template>