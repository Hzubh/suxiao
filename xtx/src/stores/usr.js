//管理用户相关
import { ref } from "vue";
import { getLoginApi } from "@/apis/usr";
import { defineStore } from "pinia";
export const useUserStore =  defineStore('usr',()=>{
    //1.定义管理用户的数据state
    const user = ref({})
    //2.定义获取接口数据的action函数
    const getUserInfo=async({account,password})=>{
        const res =  await getLoginApi({account,password})
        user.value =res.result
    }
    //退出登录
    const clearUser=()=>{
        user.value={}
    }
    //3.以对象的形式return
    return {
        user,
        getUserInfo,
        clearUser
    }
},{
    persist:true
}
)