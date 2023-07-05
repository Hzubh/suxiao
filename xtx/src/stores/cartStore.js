//封装pinia购物车
import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
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
    //计算 总的数量 所有count的之和
    const allCount = computed(()=>cartlist.value.reduce((a,c)=> a+c.count,0 ))
    //计算总价，count*price
    const pricecount = computed(()=>cartlist.value.reduce( (a,c)=>a+c.count*c.price,0))  
    //已选择数量
    const selectedCount =computed(()=>cartlist.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0))
    //已选择商品总价 
    const selectedPrice = computed(()=>cartlist.value.filter(item=>item.selected).reduce((a,c)=>a+ c.count*c.price,0))
    //单选功能
    const singleCheck=(skuId,selected)=>{
        //通过skuId查找到修改的一项，然后把他的selected赋值
        const item  = cartlist.value.find((item)=>item.skuId===skuId)
        item.selected=selected
    }
    //全选功能
    const allCheck=(selected)=>{
        //把cartlist中的每一项的的selected全部设置为选择
        cartlist.value.forEach(item=>item.selected=selected)
    }

    //是否全选
    const isAll=computed(()=>cartlist.value.every((item)=>item.selected))

    
    return {
        cartlist,
        addcart,
        Delcart,
        allCount,
        pricecount,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice
    }
},
{
    persist:true
})