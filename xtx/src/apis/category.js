import http from "@/utils/http";
export function getcatetoryApi(id) {
    return http({
        url:'category',
        params:{
            id
        }
        
    })
}