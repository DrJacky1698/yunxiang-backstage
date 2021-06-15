<template>
<div>

  <div class="topr">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        当前用户: {{ getUsername() }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="profile">修改档案</el-dropdown-item>
        <el-dropdown-item command="logout">注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>系统设置</el-breadcrumb-item>
  </el-breadcrumb>


</div>
</template>

<script>
import { removeToken } from "@/utils/auth";
import store from "@/store";

export default {
  data() {
    return {
      activeIndex: "1",
    };
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
  },
};
</script>

<style>
</style>