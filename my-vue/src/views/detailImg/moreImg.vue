<template>
 <div class="warp">
     
     <div class="position" v-if="open">
         <div ref='swiper' class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in moreImg.List" :key="index" @click="clickopen">
                    <img :src="item.Url.split('{')[0]+'3'+item.Url.split('{')[1].split('}')[1]" alt="">
                </div>
            </div>
            
         </div>
         <div class="swiper-pagination swiper-pagination-fraction num">
                <span class="swiper-pagination-current"></span> / <span class="swiper-pagination-total"></span>
            </div>
     </div>
     <div class="warp-bor" v-else>
             <div class="warp-imgs" v-for="(item,index) in moreImg.List" :key="index" @click="clickimg(index)">
                <img :src="item.Url.split('{')[0]+'3'+item.Url.split('{')[1].split('}')[1]" alt="">
            </div>
     </div>
 </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue';
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
  name: 'moreImg',
  data(){
      return {
          open:false
      }
  },
  methods:{
      ...mapActions({

      }),
      clickopen(){
          this.open = false
      },
      listenPullingDown() {
        console.log('1')
      },
      clickimg(index){
          this.open = true;
          this.$nextTick(()=>{
              let myswiper = new Swiper(this.$refs.swiper, {
                 pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                 },
              })
              myswiper.slideTo(index)
          })
      }
  },
  computed:{
      ...mapState({
          moreImg:(state)=>{return state.detailImg.moreImg}
      })
  },
  created(){
      
  }
});
</script>

<style scoped>
html,body,.warp{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.warp{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.warp-bor{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.swiper-container{
    width: 100%;
    height: 5rem;
    margin-top: 55%;
}
.num{
    font-size: .25rem;
    color: #fff;
}
.swiper-wrapper{
    width: 100%;
    height: 100%;
}
.swiper-slide{
    width: 100%;
    height: 100%;
}
.swiper-slide>img{
    width: 100%;
    height: 100%;
}
.position{
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
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

