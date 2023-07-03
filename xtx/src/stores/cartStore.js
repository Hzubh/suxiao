//封装pinia购物车
import {defineStore} from 'pinia'
import { ref } from 'vue'
export const useCartStore= defineStore('cart',()=>{
    //1.定义cart - cartlist
    const cartlist= ref([])
    //2.定义action - addcart
    const addcart= (goods)=>{
        //添加购物车action
        const item = cartlist.value.find((item)=>goods.skuId===item.skuId)
        if(item){
            //找到了
            item.count++
        }else{
            cartlist.value.push(goods)
        }
    }
    const Delcart=(skuId)=>{
        //1.找到删除项的下标 -splice
        //2.使用数组的过滤方法 -filter
        const index= cartlist.value.findIndex((item)=>skuId===skuId)
        cartlist.value.splice(index,1)
    }

    return {
        cartlist,
        addcart,
        Delcart
    }
})