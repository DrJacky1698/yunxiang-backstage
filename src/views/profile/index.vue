<template>
  <el-card class="settings">
    <h2>系统参数设置</h2>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名"> {{ form.username }} </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.fullname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" show-password placeholder="不少于6位  (不修改密码，本栏留空即可)"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input
          placeholder="请再一次输入你的密码  (不修改密码，本栏留空即可)"
          show-password
          v-model="form.password_confirm"
        ></el-input>
      </el-form-item>

      <el-form-item label="当前时区">
        <el-select v-model="form.timezone" placeholder="请选择时区">
          <el-option
            v-for="item in timezones"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <div class="submit">
        <el-button type="primary" @click="saveProfile" round>保存</el-button>
      </div>
    </el-form>
  </el-card>
</template>

<script>
import { getInfo, postProfile } from "@/api/user";
export default {
  name: "Profile",
  created() {
    this.getUserinfo();
  },
  methods: {
    async getUserinfo() {
      const response = await getInfo();
      this.form = response.data;
      console.log(response.data);
    },
    async saveProfile(){
      console.log(this.form);
      if(this.form.password_confirm != "" && this.form.password_confirm === this.form.password){
        const response = await postProfile(this.form);
        this.$message.success(response.data)
        console.log(response.data);
      }else{
        this.$message.error("两次密码输入不一致，请重新输入。")
      }


    }
  },

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
