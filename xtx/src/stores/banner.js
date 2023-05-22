import { ref} from 'vue'
import { defineStore } from 'pinia'
import { getBannerApi } from '@/apis/home'
export const useBannerStore = defineStore('Banner', () => {
    //导航列表的数据管理
    //state数据
    const Bannerlist = ref([])
  
    //action获取导航数据方法
    const getBanner = async()=>{
      const res=await getBannerApi()
      Bannerlist.value = res.result
    }
    return { Bannerlist,getBanner}
  })
  