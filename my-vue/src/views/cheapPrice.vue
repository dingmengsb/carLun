<template>
 <div class="con" v-if="cList.details">
   <div class="ding">
      <span>
        可向多个商家询问最低价，商家及时回复
      </span>
     <img src="../image/icon-help.png" alt="">
   </div>
   <div class="topCon" @click="jumType">
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
       <input style="direction: rtl;" type="text" v-model="nameModel" placeholder="输入您的真实中文姓名">
     </div>
     <div class="evee">
       <span>手机</span>
       <input  style="direction: rtl;" maxlength="11" type="text" v-model="phoneModel" placeholder="输入您的真实手机号码">
     </div>
     <div class="evee" @click="Clickcity">
       <span>城市</span>
       <span>{{CityName!=""?CityName:"北京"}}></span>
     </div>
     <button @click="btnDi">询最低价</button>
   </div>
   <div class="conBot">
     <span>选择报价经销商</span>
     <div class="botEve" v-for="(item,index) in cList.list" :key="index">
       <label for="radio">
         <input type="checkbox" :data-items=item.dealerId>
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
   <button v-show="xunwen" @click="btnDi">询最低价</button>
   <div class="city" v-if="choois">
      <div>自动定位</div>
      <div @click="btnZi">{{this.cId.CityName}}</div>
      <div>省市</div>
      <div class="city_list">
        <div v-for="(item,index) in cityLists" :key="index" @click="itemCity(item.CityID)">
          <div>{{item.CityName}}</div>
          <div>></div>
        </div>
      </div>
      <div class="city_right" v-if="chooisCity" @click="btnCkick($event)">
         <div>
            <div @click="cityDuang(item)" v-for="(item,index) in dataRight" :key="index">
             {{item.CityName}}
            </div>
          </div>
      </div>
   </div>
   <div v-if="popUpGood" class="popUp">
      <div>
          <div>{{popUpName}}</div>
          <div @click="good">好</div>
      </div>
   </div>
 </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {mapActions,mapState} from "vuex"

export default Vue.extend({ 
  data(){
    return {
      choois:false,
      chooisCity:false,
      dataRight:[],
      CityName:"",
      nameModel:"",
      phoneModel:"",
      popUpName:"",
      popUpGood:false,
      xunwen:false,
    }
  },
  computed:{
    ...mapState({
      cId:(state:any) => {
          return state.cheap.cityIds
      },
      cList:(state:any) => {
          
          return state.cheap.conList
      },
      cityLists:(state:any)=>{
        return state.cheap.cityList
      }
    })
  },
  methods:{
      ...mapActions({
          cheap:"cheap/cheapList",
          city:"cheap/city",
          Con:'cheap/ConList',
          citylist:"cheap/citylist",
          cityRights:"cheap/cityRights",
          setBao:"cheap/setBao"
      }),
      jumType(){
        this.$router.replace({name:"typecar"})
      },
       async Clickcity(){
       let data= await this.citylist();
       if(data.length>0){
         this.choois=true;
       }
      },
      btnZi(){
        this.choois=false;
      },
     async itemCity(val:number){
        this.chooisCity=true;
        let data = await this.cityRights(val);
        this.dataRight=data;
      },
      btnCkick(e:any){
       if(e.target.className){
         this.chooisCity=false;
       }
      },
      cityDuang(val:any){
        this.CityName=val.CityName
        this.Con({
          carId:  this.$route.query.id,
          cityId: val.CityID,
        });
        this.choois=false;
         this.chooisCity=false;
      },
     async btnDi(){
        let arr:any="";
        let input = document.querySelectorAll("input[type=checkbox]:checked")
        this.popUpGood=true;  
        if(this.nameModel==""){
            this.popUpName="请输入名字"
        }else if(!(/^1[3456789]\d{9}$/.test(this.phoneModel))){
            this.popUpName="请输入正确的手机号"
        }else if(input.length<0){
           this.popUpName="请先选择报价经济商"
        }else{
            input.forEach((item:any)=>{
            arr+=item.dataset.items+','
          })
        let data = await this.setBao({
            carid: this.cList.details.car_id,
            mobile: this.phoneModel,
            dealerids: arr,
            location: this.CityName,
            carname: `${this.cList.details.market_attribute.year}款${this.cList.details.car_name}`,
            locationid: 201,
            name: this.nameModel,
            channelid: 0,
            ordertypeid: 1,
            flag: 1,
            openUDID: "4ac84102-07c5-4842-bbc9-707c882edd48",
            appChannel:"",
            os: "ios",
            app:"",
            systemVersion:"",
            model:"",
            cl_from: null
          })
          if(data.code==1){
             this.popUpName="提交成功"
          }
        }
      },
      good(){
          this.popUpGood=false;  
          this.popUpName=""
      },
      scrollTo(){
        if(document.documentElement.scrollTop>200){
          this.xunwen=true;
        }else{
          this.xunwen=false; 
        }
      }
  },
  created(){
      this.cheap();
      this.city();
      this.Con({
          cityId:201,
          carId: this.$route.query.id,
          _1563276200625: ''
      })
  },
  mounted(){
    window.addEventListener("scroll",this.scrollTo)
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
  font-size: 0.14rem;
  height: 100%;
}
.con>button{
  width: 100%;
  height: 1rem;
 background: #3aacff;
  color: white;
  font-size: 0.4rem;
  outline: none;
  border:0;
  position: fixed;
  bottom: 0rem;
}
.ding{
  width: 100%;
  height: 0.6rem;
  background: #79cd92;
  font-size: 0.3rem;
  line-height: 0.6rem;
  text-align: center;
  color: white;
}
.ding>img{
   width: .3rem;
   margin-left: .1rem;
}
.topCon{
  width: 100%;
  height: 2rem;
  display: flex;
  background: #fff;
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
  background: #fff;
}
.conInfo>span,.conBot>span{
  box-sizing: border-box;
  width: 100%;
  height: 0.5rem;
  line-height: .5rem;
  display: block;
  font-size: .24rem;
  color: #666;
  background: #eee;
  padding-left: .2rem;
}
.conInfo button{
  width: 80%;
  height: 0.7rem;
  margin-left: 10%;
  background: #3aacff;
  border: 0;
  border-radius: 0.1rem;
  color: white;
  outline: none;
  margin-top: 0.25rem;
   font-size: .32rem;
}
.evee{
  width: 100%;
  height: 0.85rem;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
  display: flex;
  justify-content: space-between;
  font-size: .32rem;
}
.evee span{
  line-height: 0.85rem;
  margin-left: .2rem;
}
.evee input{
  border: 0;
  outline: none;
  margin-left: 0.1rem;
  font-size: .32rem;
}
.evee>span:nth-child(2){
  margin-right: 0.5rem;
}
.conInfo :nth-child(4){
  display: flex;
  justify-content: space-between;
}
.conBot{
  width: 100%;
}
.botEve{
  box-sizing: border-box;
  width: 100%;
  padding: 0px .2rem;
  height: 1.6rem;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  background: #fff;
}
.botEve:last-child{
  margin-bottom: 1rem;
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
  max-width: 4.6rem;
  font-size: .24rem;
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
  font-size: .24rem;
}
.botEveR span:nth-child(2){
  color: #ccc;
   font-size: .24rem;
}
.botEveR span{
  margin-top: 0.1rem;
}
.city{
  width: 100%;
  height: 350%;
  font-size: .28rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
  background: #fff;
}
.city>div:nth-child(1),.city>div:nth-child(3){
    height: .4rem;
    line-height: .4rem;
    font-size: .24rem;
    padding-left: .2rem;
    background: #f4f4f4;
}
.city>div:nth-child(2),.city_list>div{
    padding-left: .2rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    background: #fff;
}
.city_list>div{
  display: flex;
  justify-content: space-between;
  padding: 0px .2rem;
  border-bottom: 1px solid #eee;
}
.city_right{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0rem;
  left: 0rem;
  background: rgba(0,0,0,.6);
}
.city_right>div{
  position: absolute;
  right: 0rem;
  width:  75%;
  height: 100%;
  background: #fff;
  animation:Mycity_right .5s;
}
.city_right>div>div{
  height: .6rem;
  line-height: .6rem;
  font-size: .4rem;
}
@keyframes Mycity_right{
  0%   {width:  0%;}
  100% {width:  75%;}
}
.popUp{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0rem;
  left: 0rem;
  background: rgba(0, 0, 0, .4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popUp>div{
  width:70%;
  font-size: .3rem;
  height: 2rem;
  background: #fff;
  border-radius: .2rem;
}
.popUp>div>div:nth-child(1){
  display: flex;
  justify-content: center;
  border-bottom: .05rem solid #eee;
  padding: .3rem 0;
}
.popUp>div>div:nth-child(2){
  display: flex;
  justify-content: center;
  margin-top: .2rem;
  color: #3aacff;
  font-size: .38rem;
}
</style>

