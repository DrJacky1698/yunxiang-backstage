<template>
  <el-container>
    <div class="register">
      <el-form
        ref="ruleform"
        :model="ruleform"
        :rules="rules"
        label-width="80px"
      >
        <h2>用户注册</h2>
        <el-form-item label="用户名" prop="username">
          <el-input
            placeholder="可以填写字母或_ 不能包含空格"
            v-model="ruleform.username"
          ></el-input>
        </el-form-item>

        <el-form-item label="名字" prop="fullname">
          <el-input
            placeholder="例如：张三"
            v-model="ruleform.fullname"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="密码不能低于6位"
            v-model="ruleform.password"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码确认" prop="password_confirm">
          <el-input
            placeholder="请再一次填写密码"
            v-model="ruleform.password_confirm"
          ></el-input>
        </el-form-item>

        <el-form-item label="当前时区">
          <el-select v-model="ruleform.timezone" placeholder="请选择时区">
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
          <el-button type="primary" @click="submitForm('ruleform')" round
            >注册</el-button
          >
        </div>
      </el-form>
    </div>
  </el-container>
</template>

<script>
import { validateRealName } from "@/utils/validate";
import { signup } from "@/api/user";

export default {
  name: "Register",
  data() {
    return {
      ruleform: {
        username: "",
        fullname: "",
        password_confirm: "",
        password: "",
        timezone: "+8",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        fullname: [{ required: true, message: "请输入姓名", trigger: "blur", validator: validateRealName }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        password_confirm: [
          { required: true, message: "密码确认不能为空", trigger: "blur" },
        ],
      },
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
  methods: {
    async save() {
      if (
        this.ruleform.password_confirm != "" &&
        this.ruleform.password != "" &&
        this.ruleform.password_confirm === this.ruleform.password
      ) {
        delete this.ruleform.password_confirm;
        const response = await signup(this.ruleform);
        this.$message({
          message: response.data.message,
          type: "success",
        });
        this.$router.push("login");
      } else {
        this.$message.error("密码不能为空，或两次密码输入不一致，请重新输入。");
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.save();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>


<style lang="scss">
.register h2 {
  text-align: center;
}
.register {
  margin: 0 auto;
  width: 500px;
}
.submit {
  padding-left: 80px;
}
</style>
