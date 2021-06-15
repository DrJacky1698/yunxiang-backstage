<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    background-color="#304156"
    text-color="#fff"
    router
    @select="handleSelect"
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/users">
      <i class="el-icon-s-tools"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <i class="el-icon-s-tools"></i>
      <span slot="title">系统设置</span>
    </el-menu-item>
  </el-menu>
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      removeToken();
      this.$router.push("login");
      console.log("logout");
    },
    getUsername() {
      return store.getters.fullname;
    },
  },
};
</script>

<style>
.el-menu a {
  text-decoration: none;
}
</style>