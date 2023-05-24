<script setup>
import { onMounted } from 'vue';
import HomeCategory from './component/HomeCategory.vue';
import HomeBanner from './component/HomeBanner.vue'
import HomeNew from './component/HomeNew.vue'
import HomeHot from './component/HomeHot.vue'
import HomeProduct from './component/HomeProduct.vue'
import {useBannerStore} from '@/stores/banner'
import { usegoodstore } from '@/stores/goods';
const Bannerstore = useBannerStore()
const Goodstore = usegoodstore()
onMounted(()=>{
    Bannerstore.getBanner(),
    Goodstore.getgoods()
}
    
)  

</script>
<template>
    <div class="container">
    <HomeCategory/>
    <HomeBanner/>
    </div>
    <HomeNew/>
    <HomeHot/>
    <HomeProduct/>
</template>