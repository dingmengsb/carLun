<template>
    <div>
        <div v-for="(item,index) in arr" :key="index">
                <div class="head_div">{{item[0].exhaust_str}}/{{index}} {{item[0].inhale_type}}</div>
                <div v-for="(val,ind) in item" :key="ind" class="car_types">
                    <div>{{val.market_attribute.year}}款{{val.car_name}}</div>
                    <div>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</div>
                    <div>
                        <div>指导价:{{val.market_attribute.official_refer_price}}</div>
                        <div>{{val.market_attribute.dealer_price_min}}起</div>
                    </div>
                    <div v-if="choois" @click="inquiry(val.car_id)">询问底价</div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
 props:["arr","choois"],
 methods:{
     inquiry(id){
       this.$emit("btnInquiry",id)
     },
 }
}
</script>

<style>

</style>
