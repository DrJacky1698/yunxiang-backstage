<template>
  <div>
    <el-row class="topbar" type="flex" justify="space-between">

      <el-col :span="10" class="topl">
        <i class="el-icon-s-fold" style="padding-right:10px;margin-right:10px;border-right:1px solid black" @click="handleSidebar"></i>
        <i class="el-icon-arrow-left" @click="back"></i>
        {{menudata[this.$route.name]}}
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

   
  </div>
</template>

<script>
import { removeToken } from "@/utils/auth";
import store from "@/store";
import {menudata} from '@/menudata/menudata.js'


export default {
  components:{
  },

  model: {
    prop: 'OpenSidebar',
    event: 'click'
  },

  props: {
    OpenSidebar: Boolean
  },

  data() {
    return {
      activeIndex: "1",
      menudata:menudata
    };
  },


  methods: {
    handleSidebar(){
      this.$emit('click',!this.OpenSidebar)
    },

    back(){
      this.$router.go(-1)
    },

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