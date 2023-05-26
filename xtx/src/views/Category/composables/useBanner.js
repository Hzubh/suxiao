import { ref ,onMounted } from "vue";
import { getBannerApi } from "@/apis/home";


export function useBanner() {
    //state数据
    const Bannerlist = ref([])
  
    //action获取导航数据方法
    const getBanner = async()=>{
    const res=await getBannerApi({
        distributionSite:'2'
    })
    Bannerlist.value = res.result
    }
    onMounted(()=>{
        getBanner()
      })
    return{
        Bannerlist
    }
}