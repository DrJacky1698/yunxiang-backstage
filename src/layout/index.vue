<template>
  <el-container>
    <el-aside width="200px">
      <h1><span>VUE STARTER</span> 后台管理系统模板</h1>
      <navbar />
    </el-aside>
    <el-container>
      <el-header height="40">
        <topbar />

      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>
<script>
import { Navbar, Topbar } from "./components";

export default {
  name: "Layout",
  components: {
    Navbar,
    Topbar,
  },
};
</script>

<style>
/* latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(~@/assets/work-sans.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html,
body,
#app,
.el-container {
  height: 100%;
}
.el-header {
  height: 40px;
  line-height: 40px;
  border-bottom: #304156 solid 1px;
}
.el-header .el-breadcrumb {
  line-height: 40px;
}
.el-header .topr {
  width: 400px;
  height: 40px;
  line-height: 40px;
  text-align: right;
  font-size: 14px;
  float: right;
}
.el-aside {
  background-color: #304156;
}
.el-aside h1 {
  font-family: "Work Sans", sans-serif;
  margin: 0;

  line-height: 26px;
  padding: 14px 0 0 0;
  letter-spacing: 2px;
  width: 200px;
  height: 70px;
  font-size: 16px;
  background-color: #455467;
  color: #eef0f3;
  text-align: center;
}
.el-aside h1 span {
  letter-spacing: 4px;
  display: block;
  color: #9bcbec;
}

.el-main {
  background-color: #eef0f3;
}

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
