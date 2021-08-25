<template>
  <div class="main">
    <div class="header">要做的事</div>
    <hr style="height: 10px; background-color: white" />
    <div class="content">
      <ul>
        <li v-for="(item,index) in me_data" :key="index">
          time:{{item.time}}
        </li>
      </ul>
    </div>
    <div class="nav-bar">
      <button class="shift" @click="shift_item">-</button>
      <button class="add" @click="add">+</button>
      <button class="pop" @click="pop_item">-</button>
    </div>
    
    <div class="add-type"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dt from "./data/dataOperations.js";

export default defineComponent({
  name: 'App',
  setup(props, context) {
    dt.init_data();
    let me_data=dt.get_data();
    for (const iterator of me_data) {
      iterator.time=new Date(iterator.createTime).toLocaleString()
    }
    function add() {
      dt.push_item({});
      dt.init_data();
    }
    function shift_item() {
      dt.shift_item();
      dt.init_data();
    }
    function pop_item() {
      dt.pop_item();
      dt.init_data();
    }
    return { add,me_data,shift_item,pop_item };
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
.add {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
