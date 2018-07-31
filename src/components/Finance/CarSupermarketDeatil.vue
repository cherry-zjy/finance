<template>
  <div id="app">
    <div class="container" v-if="!success">
      <div class="main">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <el-form-item label="证件类型" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择证件类型">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号码" prop="Phone">
                <el-input v-model="ruleForm.Phone"></el-input>
              </el-form-item>
              <el-form-item label="车辆初登日期" prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
                <div class="circle">1</div>
              </el-form-item>
              <el-form-item label="车辆识别代号" prop="Phone">
                <el-input v-model="ruleForm.Phone"></el-input>
                <div class="circle">2</div>
              </el-form-item>
              <el-form-item label="品牌类型" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择品牌类型">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <div class="circle">3</div>
              </el-form-item>
              <el-form-item label="核定载人数" prop="Phone">
                <el-input v-model="ruleForm.Phone"></el-input>
                <div class="circle">4</div>
              </el-form-item>
              <el-form-item label="新车发票价" prop="Phone">
                <el-input v-model="ruleForm.Phone"></el-input>
              </el-form-item>
              <el-form-item label="车辆所属性质" prop="Phone">
                <el-input v-model="ruleForm.Phone"></el-input>
              </el-form-item>
              <el-form-item label="车辆使用性质" prop="Phone">
                <el-input v-model="ruleForm.Phone"></el-input>
              </el-form-item>
              <el-form-item label="是否过户车" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="是"></el-radio>
                  <el-radio label="否"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item prop="type" style="margin-left: -150px">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox label="阅读并同意《金融联盟服务协议》" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <!-- <img src="../../../static/img/yoload.png"> -->
            <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <el-form-item prop="Image" style="margin-left:-150px;">
                <el-upload v-model="ruleForm.Image" class="avatar-uploader" :action="action" :show-file-list="false" :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <img v-else src="../../../static/img/yoload.png" class="avatar">
                </el-upload>
              </el-form-item>
              <div class="el-upload el-upload--text">
                <img src="../../../static/img/vehicle_license.png" class="avatar">
              </div>
            </el-form>
          </el-col>
        </el-row>
        <div class="text-center">
          <el-button @click="back()">返回</el-button>
          <el-button type="primary" @click="submitForm()">确认</el-button>
        </div>
      </div>
    </div>
    <div class="container success" v-if="success">
      <div class="main">
        <img src="../../../static/img/order_submitted_successfully.png" class="successi-icon">
        <p>投保成功</p>
        <p class="grey-text">请等待工作人员回复</p>
        <div class="succecc-btn">
          <el-button @click="look()">查看订单</el-button>
          <el-button type="primary" @click="home()">进入首页</el-button>
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
          region: '',
          type: true,
          Phone: '',
          resource: '',
          date1: '',
          region: '',
          Image: ''
        },
        imageUrl: "",
        dialogVisible: false,
        dialogImageUrl: '',
        action: "",
        success: false,
        rules: {
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          type: [{
            type: 'array',
            required: true,
            message: '请先阅读并同意《金融联盟服务协议》',
            trigger: 'change'
          }],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          Phone: [{
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          }, ],
          resource: [{
            required: true,
            message: '请选择是否过户车',
            trigger: 'change'
          }],
        }
      }
    },
    mounted: function () {
      this.mainurl = mainurl;
      this.action = this.mainurl + "/api/Photo/UpdateForImage?type=0",
        document.getElementsByTagName("body")[0].className = "add_bg";
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "add_bg");
    },
    computed: {

    },
    methods: {
      back() {
        this.$router.push("/Finance/CarSupermarket");
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.getList.Image = res.Result[0];
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isLt2M;
      },
      //图片放大
      handlePictureCardPreview(url) {
        this.dialogImageUrl = this.mainurl + url;
        this.dialogVisible = true;
      },
      submitForm(formName) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
        this.success = true;
      },
      home() {
        this.$router.push("/");
      },
      look() {
        // this.$router.push("/Home");
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
    width: 80%;
    margin-left: 10%;
  }

  .two {
    padding-top: 20px;
  }

  .step {
    padding: 100px 0 0 0;
    width: 50%;
    margin-left: 25%;
  }

  .text-center {
    padding: 20px 0;
  }

  @media (max-width:768px) {
    .step {
      padding: 100px 0 0 0;
      width: 90%;
      margin-left: 5%;
    }
  }

  .avatar {
    width: 100%;
  }

  .circle {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: -30px;
    color: #EA2828;
    border: 1px solid #EA2828;
  }

  .container.success {
    text-align: center;

  }

  .successi-icon {
    padding: 80px 0 0 0;
    width: 100px;
    height: 100px;
  }

  .grey-text {
    font-size: 16px;
    color: #BBBBBB;
  }

  .succecc-btn {
    padding-bottom: 80px;
  }

</style>
