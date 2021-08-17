<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    background-color="#304156"
    text-color="#fff"
    router
  >
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="Pagemaking">
      <i class="el-icon-s-tools"></i>
      <span slot="title">商城制作页</span>
    </el-menu-item>
    <el-menu-item index="/membermanage">
      <i class="el-icon-s-tools"></i>
      <span slot="title">会员管理页</span>
    </el-menu-item>
    <el-menu-item index="/commodymanage">
      <i class="el-icon-s-tools"></i>
      <span slot="title">商品管理页</span>
    </el-menu-item>
    <el-menu-item index="/wearingmanage">
      <i class="el-icon-s-tools"></i>
      <span slot="title">穿法管理页</span>
    </el-menu-item>
    <el-menu-item index="/articlemanage">
      <i class="el-icon-s-tools"></i>
      <span slot="title">文章管理页</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <i class="el-icon-s-tools"></i>
      <span slot="title">系统设置页</span>
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