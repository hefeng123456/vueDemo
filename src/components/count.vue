<template>
  <div>
    <h1>{{msg}}</h1>
    <h3> {{count}}</h3>
    <button @click="$store.commit('add',10)">+</button>
    <button @click="reduce">-</button>

    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>

    </p>
  </div>
</template>
<script>
import store from '../vuex/store'
import {mapState,mapMutations,mapGetters,mapActions}from 'vuex'
export default{
  data () {
    return {
      msg: " hello vuex"
    }
  },computed:{
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },

methods:{
  ...mapMutations(['add','reduce']),
  ...mapActions(['addAction','reduceAction'])
}
,
  store
}
</script>
<style scoped></style>
