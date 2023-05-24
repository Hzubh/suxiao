<script setup>
import HomePanel from '@/views/Home/component/HomePanel.vue';
import {gethotApi} from '@/apis/home'
import {ref} from 'vue'
import { onMounted } from 'vue';


//获取数据
const hotList = ref([])
const gethotlist = async()=>{
    const res = await gethotApi()
    hotList.value = res.result
}
onMounted(()=> gethotlist())
</script>

<template>
     <HomePanel title="人气推荐" subtitle="人气推荐 爆款特卖">
    <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
            <img v-img-lazy="item.picture" alt="" />
            <p class="name">{{ item.alt }}</p>
            <p class="price">{{ item.title }}</p>
        </RouterLink>
        </li>
        </ul>
    </HomePanel>    
    
   
  
 
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #d35b5b;
      font-size: 18px;
    }
  }
}
</style>