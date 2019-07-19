<template>
 <div class="warp">
      <div class="positions" v-if="open">
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
     <div v-else class="boxer">
         <div class="heaa">
            <div class="borro" @click="clickcolor">{{name?name:'颜色∨'}}</div>
            <div @click="clickcar">车款∨</div>
        </div>
        <div v-if="list[0]" class="heade_start">
            <div v-for="(item,index) in list" :key="index" class="warp-box">
                <div class="position" @click="clickmore(item.Id)">
                    <p>{{item.Name}}</p>
                    <p>{{item.Count}}></p>
                </div>
                <div v-for="(items,index) in item.List" :key="index" class="imgs" @click="clickimg(index,item)">
                    <img :src="items.Url.split('{')[0]+'3'+items.Url.split('{')[1].split('}')[1]" alt="">
                </div>
            </div>
        </div>
        <div v-else class="datas">数据不存在</div>
     </div>
 </div>
</template>

<script>
import Swiper from 'swiper'
import Vue from 'vue';
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
  name: 'DetailImg',
  data(){
      return {
          name:this.$route.query.name,
          open:false,
          moreImg:[]
      }
  },
  methods:{
      ...mapActions({
          detail:'detailImg/detail',
          more:'detailImg/more',
          color:'detailImg/color',
          car:'detailImg/car'
      }),
      clickcolor(){
          this.color(window.localStorage.getItem('id'))
          this.$router.push('/color')
      },
      clickimg(index,item){
          this.moreImg = item
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
      },
      clickopen(){
          this.open = false
      },
      clickcar(){
          console.log('1')
          this.car(window.localStorage.getItem('id'))
          this.$router.push('/car')
      },
      clickmore(id){
          console.log(id)
          this.more({
              'SerialID':window.localStorage.getItem('id'),
              'ImageID':id,
              'Page':1,
              'PageSe':30,
              'ColorID':this.$route.query.colorid
          })
          this.$router.push({
              name:'moreImg'
          })
      }
  },
  computed:{
      ...mapState({
          list:(state)=>{return state.detailImg.data}
      })
  },
  created(){
      if(this.$route.query.ids){
          window.localStorage.setItem('id',this.$route.query.ids)
      }
      console.log()
      this.detail({
          SerialID:window.localStorage.getItem('id'),
          ColorID:this.$route.query.colorid
      })
    //   this.name = this.$route.query.name
  }
});
</script>

<style scoped>
    html,body,.warp{
        width:100%;
        height:100%;
        margin: 0;
        padding: 0;
    }
    .positions{
        width: 100%;
        height: 13.5rem;
        background: #000;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    .boxer{
        width: 100%;
        height: 100%;
    }
    .datas{
        font-size: .35rem;
        margin: 60% auto;
        color:#aaa;
        text-align: center;
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

    .warp-box{
        width: 100%;
        height: 4.2rem;
        display: flex;
        flex-wrap: wrap; 
        margin-top: .1rem;
    }
    .heade_start{
       float: 1;
    }
    .imgs{
        width: 33%;
        height: 2.1rem;
    }
    .imgs>img{
        width:98%;
        height: 98%;
    }
    .borro{
        border-right: 1px solid #000;
    }
    .position{
        width: 32%;
        height: 2.05rem;
        background: rgba(0, 0, 0, .5);
        position: absolute;
        font-size: .25rem;
        line-height: .5rem;
        text-align: center;
        color: #fff;
    }
    .heaa{
        width: 100%;
        height: 1rem;
        display: flex;
        line-height: 1rem;
    }
    .heaa>div{
        flex: 1;
        font-size: .30rem;
        display: flex;
        justify-content: center;
    }
</style>

