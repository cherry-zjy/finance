<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="证件" prop="zj">
            <el-input v-model="ruleForm.zj"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="ruleForm.code"></el-input><el-button type="primary" id="getcode">获取验证码</el-button>
          </el-form-item>
          <el-form-item prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="阅读并同意《金融联盟服务协议》" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item style="text-align: center;">
            <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
          </el-form-item>
        </el-form>
        <div class="dark">
        <p>选择添加申请人信息: </p>
        <p>请确保选择或添加的申请人信息与贷款申请表所填信息保持真实一致，以免影响信用贷款进度；本平台对此信息保密。</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }, ],
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
    computed: {

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    background-color: #F5F5F5
  }

  .main {
    margin-top: 60px;
    background-color: #fff;
    margin-bottom: 60px;
  }

  form {
    padding: 100px 0 0 0;
    width: 40%;
    margin-left: 30%;
  }

  #getcode {
    position: absolute;
    margin-left: 20px;
  }

  .dark{
    padding: 50px 20px 80px 20px;
    margin: 0 30px;
    color: #666666;
    font-family:MicrosoftYaHei; 
    border-top: 1px solid #EEEEEE;
  }

</style>
