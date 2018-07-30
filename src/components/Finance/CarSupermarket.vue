<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="车牌" prop="cp">
            <el-input v-model="ruleForm.cp"></el-input>
            <el-checkbox-group v-model="ruleForm.type" class="switch">
              <el-checkbox label="未上线" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="车主" prop="Name">
            <el-input v-model="ruleForm.Name"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center;padding-bottom: 300px;" class="type">
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
          Name: '',
          cp: ''
        },
        rules: {
          cp: [{
            required: true,
            message: '请输入车牌',
            trigger: 'blur'
          }, ],
          Name: [{
            required: true,
            message: '请输入车主',
            trigger: 'blur'
          }, ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
        }
      }
    },
    mounted: function () {
      document.getElementsByTagName("body")[0].className = "add_bg";
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "add_bg");
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
      width: 60%;
      margin-left: 20%;
    }
    .switch {
      position: absolute;
      top: 0;
      right: -80px;
    }
  }

  @media (max-width:768px) {
    .type {
      margin-left: -100px;
    }
  }

</style>
