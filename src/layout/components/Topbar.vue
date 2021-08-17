<template>
  <div>
    <el-row class="topbar" type="flex" justify="space-between">

      <el-col :span="10" class="topl">
        <i class="el-icon-s-fold" style="padding-right:10px;margin-right:10px;border-right:1px solid black"></i>
        <i class="el-icon-arrow-left"></i>
        会员管理
      </el-col>

      <el-col :span="3" class="topr">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            当前用户: {{ getUsername() }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">修改档案</el-dropdown-item>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

    </el-row>

    <el-row>
      <el-menu class="submenu" mode="horizontal" router>
        <el-menu-item v-for="(item,index) in location" :key="index" :index="item.path">{{item.name}}</el-menu-item>
      </el-menu>
    </el-row>
   
  </div>
</template>

<script>
import { removeToken } from "@/utils/auth";
import Topsubmenu from "./Topsubmenu.vue"
import store from "@/store";
import {routes} from '@/router'

export default {
  components:{
    Topsubmenu
  },

  data() {
    return {
      activeIndex: "1",
      routes:routes
    };
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

  methods: {
    handleCommand(command){
      if(command === "logout"){
        removeToken();
        this.$router.push("login");
      }
      else{
        if (this.$route.path !== "/" + command) {
          this.$router.push(command);
        }
        
      }
    },

    getUsername() {
      return store.getters.fullname;
    },

    print(){
      console.log(this.routes)
      console.log(this.routes[2].children);
    }
  },

  created(){
    this.print()
  }
};
</script>

<style>

.topr {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}

.topl {
  height: 50px;
  line-height: 50px;
}
</style>