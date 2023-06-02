import http from "@/utils/http";
export const getDetailApi =(id)=>{
 return http({
    url:'/goods',
    params:{
        id
    }
 })
}

//热榜接口
export const getDetailHotApi =  ({ id,  type=1, limit=3})=> {
    return http({
        url:'./goods/hot',
        params:{
            id,
            type,
            limit
        }
    })
    
}