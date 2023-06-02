import http from "@/utils/http";

//一级分类页面接口
export function getcategoryApi(id) {
    return http({
        url:'category',
        params:{
            id
        }
        
    })
}

//二级导航栏接口
export function getsubcategoryFilterApi(id) {
    return http({
        url:'category/sub/filter',
        params:{
            id
        }
    })
}

//二级页面接口
//POST请求方法
export function getsubcategoryApi(data) {
    return http({
        url:'category/goods/temporary',
        method:'POST',
        data
        
    })
}

