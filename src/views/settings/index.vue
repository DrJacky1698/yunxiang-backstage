<template>
  <el-card class="settings">
    <h2>系统设置</h2>
  </el-card>
</template>

<script>
export default {
  name: "Settings",

  data() {
    return {
      form: {},
      timezones: [
        {
          value: "+8",
          label: "中国",
        },
        {
          value: "+13",
          label: "新西兰",
        },
      ],
    };
  },
};
</script>

<style scoped>
.settings {
  max-width: 960px;
}
.submit {
  padding-left: 80px;
}
</style>
