<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    document.title = "后台管理系统模板"
  }
}
</script>
