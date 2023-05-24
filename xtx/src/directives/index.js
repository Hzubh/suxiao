import { useIntersectionObserver } from '@vueuse/core'
//定义加载插件
export const lazyPlugins = {
    install(app){
        //懒加载指令
        app.directive(('img-lazy'),{
            mounted(el,binding){
                const {stop} =useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if(isIntersecting){
                            el.src=binding.value
                            stop()
                        }
        
                    },
                  )
            }
        })
    }
}