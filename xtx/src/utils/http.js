import router from "@/router";
import { useUserStore } from "@/stores/usr";
import axios from "axios"
import { ElMessage } from'element-plus';
import 'element-plus/theme-chalk/el-message.css'
// 创建axios实例
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
  })
  
  // axios请求拦截器
  http.interceptors.request.use(config => {
    const userstore = useUserStore()
    const Token = userstore.user.token
    if(Token){
      config.headers.Authorization = `Bearer ${Token}`
    }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  http.interceptors.response.use(res => res.data, e => {
    const userstore = useUserStore()
    ElMessage({
      type:'warning',
      message:e.response.data.message 
    })
    //.token失效
    if(e.response.status===401){
      userstore.clearUser()
      router.push('/login')
    }
    return Promise.reject(e)
  })
  
  
  export default http