<script setup>

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeaderFloat from './components/LayoutHeaderFloat.vue';
import { usecategoryStore } from '@/stores/counter'; 

import { onMounted } from 'vue';

const categorystore = usecategoryStore()
onMounted(()=>
  categorystore.getcategory()

)  
</script>

<template>
  <LayoutHeaderFloat/>
  <LayoutNav />
  <LayoutHeader/>
  <RouterView />
  <LayoutFooter />
</template>