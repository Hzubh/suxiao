import http from "@/utils/http";
export function getcategoryApi(id) {
    return http({
        url:'category',
        params:{
            id
        }
        
    })
}