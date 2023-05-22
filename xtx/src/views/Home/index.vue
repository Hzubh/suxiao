<script setup>
import { getcategaryApi } from '@/apis/layout';
import { onMounted } from 'vue';
import { ref } from 'vue';
const list = ref([])
const getcategary= async()=> {
    const res= await getcategaryApi()
    list.value=res.result
}
onMounted(()=>{
    getcategary()
})
</script>
<template>
    
</template>