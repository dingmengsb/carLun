<template>
 <div class="warp">
     <div class="hea">
         <div class="bor" @click="clickcolor">{{name?name:'颜色∨'}}</div>
         <div @click="clickcar">车款∨</div>
     </div>
     <div v-if="list[0]" class="heade_start">
         <div v-for="(item,index) in list" :key="index" class="warp-box">
            <div class="position" @click="clickmore(item.Id)">
                <p>{{item.Name}}</p>
                <p>{{item.Count}}></p>
            </div>
            <div v-for="(items,index) in item.List" :key="index" class="imgs">
                <img :src="items.Url.split('{')[0]+'3'+items.Url.split('{')[1].split('}')[1]" alt="">
            </div>
        </div>
     </div>
   
   <div v-else class="datas">数据不存在</div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
  name: 'DetailImg',
  data(){
      return {
          name:this.$route.query.name,
          ids:this.$route.query.ids
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
          this.color(this.ids)
          this.$router.push('/color')
      },
      clickcar(){
          console.log('1')
          this.car(this.ids)
          this.$router.push('/car')
      },
      clickmore(id:any){
          console.log(id)
          this.more({
              'SerialID':this.ids,
              'ImageID':id,
              'Page':1,
              'PageSize':30
          })
          this.$router.push({
              name:'moreImg'
          })
      }
  },
  computed:{
      ...mapState({
          list:(state:any)=>{return state.detailImg.data}
      })
      
  },
  created(){
      this.detail({
          SerialID:this.ids,
          ColorID:this.$route.query.id
      })
    //   this.name = this.$route.query.name
  }
});
</script>

<style>
    body,html,.warp{
        width:100%;
        height:100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: .14rem;
    }
    .warp{
        display: flex;
        flex-direction: column;
    }
    .datas{
        font-size: .35rem;
        margin: 60% auto;
        color:#aaa;
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
    .bor{
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
    .warp .hea{
        width: 100%;
        height: 1rem;
        display: flex;
        margin-bottom: .8rem;
        line-height: 1rem;
    }
    .hea>div{
        flex: 1;
        font-size: .30rem;
        display: flex;
        justify-content: center;
    }
</style>

