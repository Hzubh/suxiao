import { ref ,onMounted } from "vue";
import { getcategoryApi } from "@/apis/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
    const categoryList = ref({})
    const route = useRoute()
    const getcategory = async (id = route.params.id)=>{
    const res = await getcategoryApi(id)
    categoryList.value =  res.result
    }

    //目标:路由参数发生变化，可以将分类数据接口重新发送
    onBeforeRouteUpdate((res)=>{
    getcategory(res.params.id)
    })

    onMounted(()=>{
        getcategory()
      })

    return {
        categoryList,
    }
}
    