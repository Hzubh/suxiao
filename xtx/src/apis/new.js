import http from "@/utils/http"
export function getnewApi(){
    return http({
        url:'home/new'
    }) 
}