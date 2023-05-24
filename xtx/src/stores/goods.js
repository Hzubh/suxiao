import { ref } from "vue";
import { getgoodsApi } from "@/apis/home";
import { defineStore } from "pinia";

export const usegoodstore = defineStore('good',() => {
    //state数据
    const goodList = ref([])
    //获取数据的方法
    const getgoods = async()=>{
        const res = await getgoodsApi()
        goodList.value= res.result
    }
    return {goodList,getgoods}
})

