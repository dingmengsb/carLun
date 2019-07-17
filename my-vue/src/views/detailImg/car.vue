<template>
 <div class="warp">
     <div class="warp-header" @click="clickall">全部车型</div>
     <div class="warp-year">
         <div>2019</div>
     </div>
     <div class="warp-main">
         
     </div>
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapState,mapActions} from 'vuex'
export default Vue.extend({
  name: 'car',
  methods:{
      ...mapActions({

      }),
      clickall(){
          this.$router.push({
              name:'DeatilImg'
          })
      },
  },
  computed:{
      ...mapState({
          cars:(state:any)=>{return state.detailImg.cars}
      })   
  },
  created(){
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
        background: #fff;
        margin-top: .2rem;
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
</style>

