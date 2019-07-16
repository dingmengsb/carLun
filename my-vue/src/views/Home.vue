<template>
 <div>
   <HeAder></heAder>
   <HeRigint></HeRigint>
   <TeDan></TeDan>
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeAder from '@/components/home/HeAder.vue'
import HeRigint from '@/components/home/HeRigint.vue'
import TeDan from '@/components/home/TeDan.vue'
// import HelloWorld from '@/components/HelloWorld.vue';  @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components:{
   HeAder,
   HeRigint,
   TeDan
  }
});
</script>

<style>

</style>

