<template>
 <div class="warp">
     <div class="warp-header" @click="clickall">全部颜色</div>
     <div class="warp-year">
         <div @click="clickyear(key)" :class="key == year?'active':null" v-for="(value,key,index) in colors" :key="index">{{key}}</div>
     </div>
     <div class="warp-main">
         <div v-for="(item,index) in colors[year]" :key="index" @click="clickcol(item.ColorId,item.Name)">
             <span :style={background:item.Value}></span>
             <span>{{item.Name}}</span>
         </div>
     </div>
 </div>
</template>
<script>
import Vue from 'vue';
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
  name: 'color',
  data(){
      return {
          year:2016
      }
  },
  methods:{
      ...mapActions({

      }),
      clickyear(year){
          this.year = year
      },
      clickall(){
          this.$router.replace({
              name:'DeatilImg'
          })
      },
      clickcol(colorid,value){
          this.$router.replace({
              name:'DeatilImg',
              query:{
                  colorid:colorid,
                  name:value
              }
          })
      }
  },
  computed:{
      ...mapState({
          colors:(state)=>{return state.detailImg.colors}
      })
  }
});
</script>

<style scoped>
body,html,.warp{
        width:100%;
        height:100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: #f2f2f2;
    }
    html{
        font-size: .14rem;
    }
    .warp{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .active{
        color:skyblue;
    }
    .warp-header{
        width: 100%;
        height:.8rem;
        line-height: .8rem;
        text-align: center;
        color:skyblue;
        font-size: .35rem;
        background: #fff;
        margin-top: .2rem;
    }
    .warp-year{
        width: 100%;
        height: .8rem;
        display: flex;
        flex-wrap: nowrap;
        background: #fff;
        margin-top: .2rem;
        overflow: auto;
    }
    .warp-year>div{
        width: 15%;
        height: 100%;
        text-align: center;
        line-height: .8rem;
        font-size: .30rem;
    }
    .warp-main{
        width: 100%;
        height:auto;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        margin-top: .2rem;
    }
    .warp-main>div{
        width: 45%;
        height: .6rem;
        font-size: .30rem;
        line-height: .6rem;
        margin: .15rem 2%;
        border: 1px solid skyblue;
        display: flex;
    }
    .warp-main>div>span:nth-child(1){
        width: .4rem;
        height: .4rem;
        display: inline-block;
        margin: .1rem 5%;
        border: 1px solid #ccc;
    }
    .warp-main>div>span:nth-child(2){
        height: .6rem;
        line-height: .6rem;
    }

</style>

