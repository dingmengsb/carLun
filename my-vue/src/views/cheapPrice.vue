<template>
 <div class="con" v-if="cList.details">
   <div class="ding">可向多个商家询问最低价，商家及时回复</div>
   <div class="topCon">
    <img :src="cList.details.serial.Picture" alt="">
    <div class="topConZ">
      <span>{{cList.details.serial.AliasName}}</span>
      <span>{{cList.details.market_attribute.year}}款 {{cList.details.car_name}}</span>
    </div>
    <span>></span>
   </div>
   <div class="conInfo">
     <span>个人信息</span>
     <div class="evee">
       <span>姓名</span>
       <input type="text" placeholder="输入您的真实中文姓名">
     </div>
     <div class="evee">
       <span>手机</span>
       <input type="text" placeholder="输入您的真实手机号码">
     </div>
     <div class="evee">
       <span>城市</span>
       <span>{{this.cId.CityName}}></span>
     </div>
     <button>询问底价</button>
   </div>
   <div class="conBot">
     <span>选择报价经销商</span>
     <div class="botEve" v-for="(item,index) in cList.list" :key="index">
       <label for="radio">
         <input type="checkbox">
       </label>
       <div class="botEveZ">
         <span>{{item.dealerShortName}}</span>
         <span>{{item.address}}</span>
       </div>
       <div class="botEveR">
         <span>{{item.vendorPrice}}万</span>
         <span>售全国</span>
       </div>
     </div>
   </div>
   <button>询最低价</button>
 </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {mapActions,mapState} from "vuex"

export default Vue.extend({ 
  components:{
   
  },
  computed:{
    ...mapState({
      cId:(state:any) => {
          return state.cheap.cityIds
      },
      cList:(state:any) => {
          return state.cheap.conList
      },
    })
  },
  methods:{
      ...mapActions({
          cheap:"cheap/cheapList",
          city:"cheap/city",
          Con:'cheap/ConList'
      })
  },
  created(){
      this.cheap();
      this.city();
      this.Con({
          cityId:201,
          carId: this.$route.query.id,
          _1563276200625: ''
      })
      console.log('qqqqqqqqqqqq',this.cId)
    //   console.log(this.$route.query.cityid)
  }
});
</script>

<style>
body,html{
  margin: 0;
  padding: 0;
}
.con{
  width: 100%;
  height: 100%;
  font-size: 0.14rem;
}
.con>button{
  width: 100%;
  height: 1rem;
  background: blue;
  color: white;
  font-size: 0.4rem;
  outline: none;
  border:0;
}
.ding{
  width: 100%;
  height: 0.6rem;
  background: lightgreen;
  font-size: 0.3rem;
  line-height: 0.6rem;
  text-align: center;
  color: white;
}
.topCon{
  width: 100%;
  height: 2rem;
  display: flex;
}
.topCon img{
  width: 2.2rem;
  height: 1.4rem;
  border: 1px solid #e6e6e6;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}
.topCon>span{
  line-height: 2rem;
  font-size: 0.4rem;
  margin-left: 0.3rem;
}
.topConZ{
  display: flex;
  flex-direction: column;
  font-size: 0.3rem;
  margin-left: 0.2rem;
}
.topConZ span{
  margin-top: 0.3rem;
}
.conInfo{
  width: 100%;
  height: 4.2rem;
}
.conInfo>span{
  width: 100%;
  height: 0.4rem;
  background: #e6e6e6;
  display: block;
  line-height: 0.4rem;
}
.conInfo button{
  width: 70%;
  height: 0.7rem;
  margin-left: 15%;
  background: blue;
  border: 0;
  border-radius: 0.15rem;
  color: white;
  outline: none;
  margin-top: 0.25rem;
}
.evee{
  width: 95%;
  height: 0.85rem;
  border-bottom: 1px solid #e6e6e6;
  margin-left: 2.5%;
}
.evee span{
  font-size: 0.3rem;
  line-height: 0.85rem;
}
.evee input{
  border: 0;
  outline: none;
  margin-left: 0.1rem;
}
.conInfo :nth-child(4){
  display: flex;
  justify-content: space-between;
}
.conBot{
  width: 100%;
}
.conBot>span{
  width: 100%;
  height: 0.4rem;
  background: #e6e6e6;
  display: block;
  line-height: 0.4rem;
} 
.botEve{
  width: 95%;
  height: 1.6rem;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  margin-left: 2.5%;
  justify-content: space-around;
}
.botEve label{
  line-height: 1.6rem;
  flex: 1;
}
.botEveZ{
  display: flex;
  flex-direction: column;
  flex: 7.5;
}
.botEveZ span:nth-child(1){
   margin-top: 0.2rem;
  font-size: 0.3rem;
}
.botEveZ span:nth-child(2){
  color: #cccccc;
}
.botEveZ span{
  margin-top: 0.1rem;
}
.botEveR{
  display: flex;
  flex: 1.5;
  flex-direction: column;
}
.botEveR span:nth-child(1){
  margin-top: 0.2rem;
  color: red;
}
.botEveR span:nth-child(2){
  color: #ccc;
}
.botEveR span{
  margin-top: 0.1rem;
}
</style>

