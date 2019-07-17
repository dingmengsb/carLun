<template>
    <div class="car">
        <div class="cent">
         <div class="img" @click="imgclick(getDetil.SerialID)">
           <img :src="getDetil.CoverPhoto" alt="">
           <div>{{getDetil.pic_group_count}}张照片</div>
         </div>
         <div class="info">
             <div v-if="getDetil.market_attribute">
                 <div>{{getDetil.market_attribute.dealer_price}}</div>
                 <div>指导价:{{getDetil.market_attribute.official_refer_price&&getDetil.market_attribute.official_refer_price}}</div>
             </div>
             <div>{{getDetil.BottomEntranceTitle}}</div>
         </div>
         <div class="car_list">
           <div>
             <div  @click="clickFun(index)" :class="ind===index?'active':null" v-for="(item,index) in list" :key="index">{{item}}</div>
           </div>
           <div class="car_type">
               <SetDetail :arr=arr :choois=true @btnInquiry="inquiryy"></SetDetail>
           </div>
         </div>
          
        </div>
         <div class="botton_flex">
             <div>{{getDetil.BottomEntranceTitle}}</div>
             <div>本地经营商为你报价</div>
         </div>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import SetDetail from "../components/SetDetail.vue"
import index from '@/store';
export default {
    data(){
        return {
          ind:0,
          str:[],
          arr:{}
        }
    },
    components:{
        SetDetail,
    },
 computed:{
     ...mapState({
         getDetil:state=>{
             return state.home.getDetil;
         },
         list:state=>{
             let str=[];
              state.home.getDetil.list&&state.home.getDetil.list.forEach(item=>{
                str.push(item.market_attribute.year);
             })
             str=[...new Set(str)]
             str.unshift("全部")
             return str
         }
     })
 },
 methods:{
    ...mapActions({
       getDetile:"home/getDetile"
    }),
    clickFun(ind){
        this.arr=this.Croutput(this.list[ind])
        this.ind=ind
    },
     Croutput(val){
       if(val==="全部"){
           let obj= this.processingData(this.getDetil.list);
           obj=this.sort_OBJECT(obj);
           obj=this.sortYear(obj);
         return obj;
       }else{
        let obj=this.processingData(this.getDetil.list.filter(item=>item.market_attribute.year==val));
        obj=this.sort_OBJECT(obj);
        obj=this.sortYear(obj);
         return obj;
       }
     },
     sort_OBJECT(obj){ //对象排序
        var arr = new Array();
        var num = 0;
        for (var i in obj) {
            arr[num] = i;
            num++;
        }
        var sortArr = arr.sort();
        var sortObj = {};
        for (var i in sortArr) {
            sortObj[sortArr[i]] = obj[sortArr[i]];
        }
        return sortObj;
        },
        processingData(list){ //处理数据
            let obj={};
           list.forEach(item=>{
               let a = item.max_power_str;
              if(obj[a]){
                  obj[a].push(item)
              }else{
                obj[a]=[item]
              }
           })
           return obj
        }, 
        sortYear(obj){
            let arr=[];
          for(let i in obj){
             obj[i].sort(function(a,b){
                   arr.push(a.market_attribute.year);
                 if(Array.from(new Set(arr)).length>1){
                  return a.market_attribute.year-b.market_attribute.year
                 }else{
                     return a.exhaust-b.exhaust
                 }
             })
          }
          return obj
        },
     inquiryy(id){
         console.log(id);
         this.$router.push({
             name:"cheapPrice",
             query:{
                 id,
             }
         })
     },
     imgclick(ids){
         this.$router.push({
             name:"DeatilImg",
             query:{
                 ids,
             }
         })
     }
 },
 created(){
    this.getDetile(this.$route.query.id);
    setTimeout(() => {
       this.arr=this.Croutput("全部");  
    }, 1000);
  
 },
}
</script>

<style>
.car{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.cent{
    width: 100%;
    height: 100%;
}
.img{
    position: relative;
    height: 3.29rem;
    overflow: hidden;
}
.img>div{
    position: absolute;
    bottom: .3rem;
    right: .3rem;
    color: #fff;
    padding: 1px .1rem;
    border-radius: .2rem;
    background: rgba(0,0,0,.6);
    font-size: .24rem;
}
.img>img{
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
}
.info{
    padding: .36rem .2rem .3rem;
    background: #fff;
    position: relative;
    display: flex;
    font-size: .26rem;
    justify-content: space-between;
}
.info>div:nth-child(1)>div:nth-child(1){
    font-size: .36rem;
    color: red;
    font-weight: 500;
}
.info>div:nth-child(1)>div:nth-child(2){
    color: silver;
}
.info>div:nth-child(2){
    width: 50%;
    height: .8rem;
    background: #00afff;
    color: #fff;
    font-size: .36rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.botton_flex{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 99;
    background: #3aacff;
    height: 1rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.botton_flex>div:nth-child(1){
    font-size: .32rem;
    margin-top: .12rem;
    font-weight: 500;
}
.botton_flex>div:nth-child(2){
        font-size: .24rem;
}
.car_list{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
}
.car_list>div:nth-child(1){
    border-top: .15rem solid #f4f4f4;
    padding: 0 .3rem;
    font-size: .32rem;
    height: .77rem;
    line-height: .77rem;
    background: #fff;
    display: flex;
}
.car_list>div:nth-child(1)>div{
        padding-right: .46rem;
}
.car_list>div .active{
    color: #00afff;
}
.car_type>div:last-child{
 margin-bottom: 1rem;
}
.car_type .head_div{
    padding: 0 .2rem;
    height: .5rem;
    line-height: .5rem;
    font-size: .26rem;
    color: #999;
    background: #f4f4f4;
}
.car_type .car_types{
    font-size: .3rem;
    background: #fff;
    margin-bottom: .1rem;
}
.car_types>div:nth-child(1){
    padding: .26rem 0 .18rem;
    font-size: .3rem;
    line-height: 1;
    color: #3d3d3d;
}
.car_types>div:nth-child(2){
    color: #bdbdbd;
    font-size: .26rem;
}
.car_types>div:nth-child(3){
    display: flex;
    padding-bottom: .1rem;
    font-size: .24rem;
    justify-content: flex-end;
    align-items: center;
    color: #818181;
   border-bottom: .02rem solid #f4f4f4;
}
.car_types>div:nth-child(3)>div:nth-child(2){
    font-size: .3rem;
    color: #ff2336;
    margin-left: .1rem;
}
.car_types>div:nth-child(4){
    border: none;
    border-top: 1px solid #eee;
    height: .8rem;
    font-size: .32rem;
    color: #00afff;
    background: #fff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
