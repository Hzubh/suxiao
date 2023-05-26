import http from "@/utils/http"

export function getBannerApi(params = {}) {
    const {distributionSite = '1'} =params
    return  http({
        url:'home/banner',
        params:{
            distributionSite
        }
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
