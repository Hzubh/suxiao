import http from '@/utils/http'

export  function getcategary(){
    return  http({
        url:'home/category/head'
    })
}