<template>
  <div class="background">
    <div class="loginbox">
      <div class="main">
        <img src="../../static/img/logo.png">
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="请输入验证码" v-model="loginForm.password" class="psw"></el-input>
            <span class="sendcode">发送验证码</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          username: "",
          password: ""
        },
        rules: {
          username: [{
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }],
          password: [{
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }]
        }
      }
    },
    mounted: function () {
      document.getElementsByTagName("body")[0].className = "login";
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "login");
    },
    methods: {
      submitForm(formName) {
        // var tt = this;
        // this.$refs[formName].validate(async valid => {
        //   if (valid) {
        //     this.$http
        //       .post(
        //         "api/Admin/Login",
        //         qs.stringify({
        //           Name: this.loginForm.username,
        //           Password: md5(this.loginForm.password)
        //         })
        //       )
        //       .then(
        //         function (response) {
        //           var status = response.data.Status;
        //           if (status === 1) {
        //             setCookie("token", response.data.Result);
        //             setCookie("username", this.loginForm.username);
        //             this.$message({
        //               showClose: true,
        //               type: "success",
        //               message: "登陆成功"
        //             });
        //             setTimeout(() => {
        //               this.$router.push({
        //                 path: "/"
        //               });
        //             }, 1000);
        //           } else {
        //             this.$message({
        //               showClose: true,
        //               type: "warning",
        //               message: response.data.Result
        //             });
        //           }
        //         }.bind(this)
        //       )
        //       .catch(
        //         function (error) {
        //           this.$notify.error({
        //             title: "错误",
        //             message: "错误：请检查网络"
        //           });
        //         }.bind(this)
        //       );
        //   } else {
        //     this.$notify.error({
        //       title: "错误",
        //       message: "请输入用户名和密码",
        //       offset: 100
        //     });
        //     return false;
        //   }
        // });
      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background {
    width: 100%;
    height: 100%;
    background-image: url("../../static/img/dl.png");
    background-size: 100% 100%;
    position: relative;
  }

  .loginbox {
    background-color: #fff;
    position: absolute;
    height: 70.5%;
    width: 31%;
    top: 14.6%;
    left: 49.5%;
    text-align: center;
  }

  .main {
    padding: 20%;
  }

  .el-form {
    margin-top: 20%;
  }

  .submit_btn {
    width: 100%;
    margin-top: 10%;
  }

  .psw {
    position: relative;
  }

  .sendcode {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 12px;
    color: #CEAA70;
    cursor: pointer;
  }

  @media (max-width:1024px) {
    .loginbox {
      height: 72.5%;
      width: 62%;
      top: 13.6%;
      left: 18.5%;
      text-align: center;
    }
    .main {
      padding: 10%;
    }
    .el-form {
    margin-top: 10%;
  }
  }

  @media (max-width:768px) {
    .loginbox {
      height: 72.5%;
      width: 80%;
      top: 13.6%;
      left: 10%;
      text-align: center;
    }
    .main {
      padding: 5%;
    }
    .el-form {
    margin-top: 5%;
  }
  }

</style>
