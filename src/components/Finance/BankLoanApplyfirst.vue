<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <div class="step">
          <el-steps :active="1">
            <el-step></el-step>
            <el-step></el-step>
            <el-step></el-step>
          </el-steps>
        </div>
        <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="证件" prop="zj">
            <el-input v-model="ruleForm.zj"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code"></el-input><el-button type="primary" id="getcode">获取验证码</el-button>
          </el-form-item>
          <el-form-item prop="type" class="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="阅读并同意《金融联盟服务协议》" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item style="text-align: center;padding-bottom: 80px;" class="type">
            <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
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
        ruleForm: {
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          zj: [{
            required: true,
            message: '请输入证件',
            trigger: 'blur'
          }, ],
          phone: [{
            required: true,
            message: '请输入电话',
            trigger: 'blur'
          }, ],
          code: [{
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }, ],
          type: [{
            type: 'array',
            required: true,
            message: '请先阅读并同意《金融联盟服务协议》',
            trigger: 'change'
          }],
        }
      }
    },
    mounted: function() {
      document.getElementsByTagName("body")[0].className="add_bg"; 
    },
    beforeDestroy: function() {
        document.body.removeAttribute("class","add_bg");
    },
    computed: {

    },
    methods: {
      submitForm(formName) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
        this.$router.push("/Finance/BankLoanApplysecond/id=" + window.location.href.split("id=")[1]);
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    margin-top: 60px;
    background-color: #fff;
    margin-bottom: 60px;
  }
  

  form {
    padding: 100px 0 0 0;
    width: 90%;
    margin-left: 5%;
  }

  @media (min-width:768px) {
    #getcode {
      position: absolute;
      margin-left: 20px;
    }
    form {
      padding: 100px 0 0 0;
      width: 40%;
      margin-left: 30%;
    }
    .step{
      padding: 100px 0 0 0;
      width: 50%;
      margin-left: 30%;
    }
  }
  @media (max-width:768px) {
    .type{
      margin-left: -100px;
    }
    .step{
      padding: 100px 0 0 0;
      width: 90%;
      margin-left: 5%;
    }
  }

</style>
