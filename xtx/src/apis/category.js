import http from "@/utils/http";
export function getcategoryApi(id) {
    return http({
        url:'category',
        params:{
            id
        }
        
    })
}


export function getsubcategoryFilterApi(id) {
    return http({
        url:'category/sub/filter',
        params:{
            id
        }
    })
}


export function getsubcategoryApi() {
    return http({
        url:'category/goods/temporary',
        method:'POST',
        data
    })
}