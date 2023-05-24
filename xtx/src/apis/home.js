import http from "@/utils/http"

export function getBannerApi() {
    return  http({
        url:'home/banner'
    })
}
export function getnewApi(){
    return http({
        url:'home/new'
    }) 
}
export function gethotApi(){
    return http({
        url:'home/hot'
    }) 
}
export function getgoodsApi(){
    return http({
        url:'home/goods'
    }) 
}
