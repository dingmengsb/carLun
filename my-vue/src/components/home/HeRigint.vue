<template>
    <div class="headRight">
        <div v-for="(item,index) in arr" :key="index" @click="clickInd(index)">{{item}}</div>
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
  computed: {
    ...mapState({
      arr:state=>{
         return state.home.arrs
      },
    })
  },
  methods:{
      clickInd(ind){
          this.updataNum(ind);
      },
      ...mapActions({
          updataNum:"home/updataNum",
      })
  }
}
</script>

<style>
.headRight{
    position: fixed;
    right: .3rem;
    top: 1rem;
    font-size: .3rem;
}
.headRight>div{
    height: .6rem;
    line-height: .6rem;
}
</style>
