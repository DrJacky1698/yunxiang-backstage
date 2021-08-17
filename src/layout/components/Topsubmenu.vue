<template>
<div>
  <el-menu class="submenu" mode="horizontal" router>
      <el-menu-item v-for="(item,index) in location" :key="index" :index="item.path">{{item.name}}</el-menu-item>
  </el-menu>
</div>

</template>

<script>
import {routes} from '@/router'
export default {
  data(){
    return{
      routes:routes
    }
  },

  computed:{
    location:function(){
      let i = []
      this.routes[2].children.forEach(element => {
        if (element.path === this.$route.path){
          i = element.children
        }        
      })
      return i
    }
  },

  methods:{
    print(){
      console.log(this.routes)
      console.log(this.routes[2].children);
    }
  },

  created(){
    this.print()
  }
}
</script>

