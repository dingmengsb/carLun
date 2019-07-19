<template>
    <div>
        <div class="warp-header" @click="clickall">全部车型</div>
       <div class="type_header">
         <div  @click="clickFun(index)" :class="ind===index?'active':null" v-for="(item,index) in list" :key="index">{{item}}</div>
      </div>
      <div  class="car_type">
           <SetDetail :arr=obj :choois=false @btnInquiry="inquiryy"></SetDetail>
      </div>
    </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
import SetDetail from "../../components/SetDetail.vue"
export default {
    data(){
      return {
          ind:0,
          list:[],
          obj:{},
      }
    },
      components:{
        SetDetail,
    },
    methods:{
        clickall(){
          console.log("全部")
        },
      clickFun(ind){
          this.ind=ind;
           let arr=JSON.parse(window.localStorage.getItem("arr")).filter(item=>item.market_attribute.year===this.list[this.ind]);
            this.obj= this.processingData(arr);
            this.obj=this.sort_OBJECT( this.obj);
            this.obj=this.sortYear(this.obj);
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
                  return  b.market_attribute.year-a.market_attribute.year
                 }else{
                     return a.exhaust-b.exhaust
                 }
             })
          }
          return obj
        },
        inquiryy(){
             this.$router.replace({
             name:"DeatilImg"
         })
        }
    },
    created() {
       this.list = JSON.parse(window.localStorage.getItem("list"));
       let arr=JSON.parse(window.localStorage.getItem("arr")).filter(item=>item.market_attribute.year===this.list[this.ind]);
        this.obj= this.processingData(arr);
        this.obj=this.sort_OBJECT( this.obj);
        this.obj=this.sortYear(this.obj);
    },
}
</script>

<style>
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
.type_header{
    display: flex;
    font-size: .3rem;
    height: .6rem;
    line-height: .6rem;
    background: #fff;
}
.type_header>div{
    margin: 0px .2rem;
}
</style>
