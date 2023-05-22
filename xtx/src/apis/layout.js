import http from "@/utils/http"

export function getcategaryApi() {
    return  http({
        url:'home/category/head'
    })
}