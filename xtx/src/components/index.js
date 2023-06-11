//把components中所有的组件进行全局化注册
//通过插件的方式
import imgView from './imgView/index.vue'
import sku from './XtxSku/index.vue'
export const componentPlugin ={
    install(app){
        //app.compoent('组件名字',组件配置对象)
        app.component('imgView',imgView)
        app.component('sku',sku)
    }
}