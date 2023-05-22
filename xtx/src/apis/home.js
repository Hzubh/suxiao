import http from "@/utils/http"

export function getBannerApi() {
    return  http({
        url:'home/banner'
    })
}