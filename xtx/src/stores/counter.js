import { ref} from 'vue'
import { defineStore } from 'pinia'
import { getcategaryApi } from '@/apis/layout'


export const usecategoryStore = defineStore('category', () => {
  //导航列表的数据管理
  //state数据
  const categorylist = ref([])

  //action获取导航数据方法
  const getcategory = async()=>{
    const res=await getcategaryApi()
    categorylist.value = res.result
  }
  return { categorylist, getcategory}
})



