<template>
    <div class="box">
     <div v-for="(val,ind) in arr" :key='ind'>
       <p :ref="ind===num?'pref':null" @click="openFasle" >{{val}}</p>
       <div v-if="item.Spelling===val" v-for="(item,index) in list" :key='index'>
         <div @click="clickFun(item.MasterID)">
              <img :src="item.CoverPhoto" alt="">
              <div>{{item.Name}}</div>
         </div>
        </div>
     </div>
    </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from "vuex"
export default {
  computed: {
    ...mapState({
      list:state=>{
        return state.home.list
      },
      arr:state=>{
         return state.home.arrs
      },
      num:state=>{
        return state.home.num
      }
    })
  },
  methods:{
   ...mapActions({
     addList:"home/addList",
     rightUp:"home/rightUp"
   }),
   ...mapMutations({
     openFasles:"home/choos"
   }),
   clickFun(id){
     this.rightUp(id);
   },
   openFasle(){
    this.openFasles(false);
   }
  },
  created() {
    this.addList()
  },
  updated() {
    window.scrollTo(0,this.$refs.pref[0].offsetTop)
  },
}
</script>

<style>
.box{
  width: 100%;
  font-size: 0.4rem;
}
.box>div>p{
    background: #f4f4f4;
    padding-left: .3rem;
    color: #aaa;
}
.box>div>div>div{
  display: flex;
  height: 1rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  align-items: center;
}
.box>div>div>div>div{
   padding-left: .3rem;
}
.box img{
  width: .7rem;
  height: .7rem;
}
</style>
