<template>
 <div class="warp">
     <div class="warp-bor">
         <div class="warp-imgs" v-for="(item,index) in moreImg.List" :key="index">
            <img :src="item.Url.split('{')[0]+'3'+item.Url.split('{')[1].split('}')[1]" alt="">
        </div>
     </div>
   
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
  name: 'moreImg',
  methods:{
      ...mapActions({

      })
  },
  computed:{
      ...mapState({
          moreImg:(state:any)=>{return state.detailImg.moreImg}
      })
  },
  created(){
      
  }
});
</script>

<style>
html,body,.warp{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.warp-bor{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.warp-imgs{
    width: 33%;
    height: 2.5rem;
}
.warp-imgs>img{
    width: 100%;
    height: 100%;
}
</style>

