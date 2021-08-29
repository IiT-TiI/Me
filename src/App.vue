<template>
  <div class="main">
    <div class="header">要做的事</div>
    <hr style="height: 10px; background-color: white" />
    <div class="content">
      <ul>
        <li v-for="(item,index) in me_data" :key="index">
          time:{{(new Date(item.createTime)).toLocaleString()}}
        </li>
      </ul>
    </div>
    <div class="nav-bar">
      <button class="shift" @click="shift_item">-</button>
      <button class="toggoleOptions" @click="toggoleOptions">+</button>
      <button class="pop" @click="pop_item">-</button>
    </div>
    
    <div>
      <div class="add-type" v-if="toggleType">
        <div @click="toggoleOptions" class="toggoleOptions">X</div>
      </div>
      <div class="shadowLayer" v-if="toggleType" @click="toggoleOptions"></div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dt from "./data/dataOperations.js";

export default defineComponent({
  name: 'App',
  data(){
    return {
      me_data:[],
      toggleType:false
    }
  },
  methods:{
    toggoleOptions() {
      this.toggleType=!this.toggleType;
    },
    shift_item() {
      dt.shift_item();
      dt.init_data();
      this.me_data=dt.get_data();

    },
    pop_item() {
      dt.pop_item();
      dt.init_data();
      this.me_data=dt.get_data();
    }
  },
  created(){
    this.me_data=dt.get_data();
  },
  setup(props, context) {
  }
})
</script>

<style>
* {
  border: 0;
  margin: 0;
}
.main {
  width: 100%;
  background-color: lightgray;
}
.header {
  width: 100%;
  height: 60px;
  background-color: lightpink;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 100%;
  height: 500px;
  background-color: lightblue;
}
.nav-bar {
  width: 100%;
  height: 60px;
  background-color: lightgreen;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggoleOptions {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.add-type{
  width: 100%;
  height: 200px;
  transition: all .5;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  background-color: grey;
}
.add-type .toggoleOptions{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 5px 0;
  background-color: white;
}
.shadowLayer{
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: black;
  opacity: .3;
}
</style>
