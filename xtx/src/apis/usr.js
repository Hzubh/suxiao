import http from "@/utils/http";
//封装所有用户相关的函数

export  const getLoginApi=({account,password})=>{
    return http({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}