<template>
  <div :class="flag ? 'active' : 'active2'">
    <div class="right">
      <div class="eve" v-for="(item,index) in list" :key="index">
        <span>{{item.GroupName}}</span>
        <div v-for="(citem,cindex) in item.GroupList" :key="cindex" class="eveXia"  >
          <img :src="citem.Picture" alt="">
          <div class="eveRight" @click="JumDetile(citem.SerialID)">
            <span>{{citem.AliasName}}</span>
            <span>{{citem.DealerPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import {mapActions,mapState} from "vuex"

export default Vue.extend({
  data(){
    return{
      master:''
    }
  },
  computed:{
      ...mapState({
         list:state=>{
           return state.home.lists
         },
         flag:state=>{
             return state.home.choos
         }
      })
  },
  methods:{
    JumDetile(id){
      this.$router.push({
        name:"detil",
        query:{
          id,
        }
      })
    }
  },
})
</script>

<style scoped lang="scss">
.active{
  width: 80%;
  height: 100%;
  position: fixed;
  right: 0%;
  top: 0px;
  animation:myfirst 0.5s;
  border-left: 1px solid #ccc;
  font-size: 14px;
  background: white;
  color: #000;
}
@keyframes myfirst{
  0%   {right: -80%;}
  100% {right:  0%;}
}
.active2{
  top: 0px;
  width: 80%;
  height: 100%;
  position: fixed;
  right: -80%;
  animation:myfirst1 0.5s;
  border-left: 1px solid #ccc;
  font-size: 14px;
  background: white;
}
@keyframes myfirst1{
  0%   {right:  0%;}
  100% {right:  -80%;}
}
.right{
  height: 100%;
  overflow-y: scroll;
}
.eve{
  width: 100%;
}
.eve>span{
  width: 100%;
  height: 20px;
  background: #ccc;
  display: inline-block;
}
.eveXia{
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
}
.eveXia{
  display: flex;
}
.eveXia img{
  width: 100px;
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
}
.eveRight{
  display: flex;
  flex-direction: column;
}
.eveRight span:nth-child(1){
  margin-top: 10px;
  margin-left: 10px;
}
.eveRight span:nth-child(2){
  color: red;
  margin-top: 5px;
  margin-left: 10px;
}
</style>
