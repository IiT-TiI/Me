<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {provide,ref} from 'vue'
import {router} from './router'

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVisiable = ref(width > 500 ? true:false)
    provide('asideVisiable',asideVisiable)
    router.afterEach(()=>{
      if (width>500) {
        return
      }
      asideVisiable.value=false
    })
  }
}
</script>
