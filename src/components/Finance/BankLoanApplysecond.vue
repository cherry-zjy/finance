<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <div class="step">
          <el-steps :active="2">
            <el-step></el-step>
            <el-step></el-step>
            <el-step></el-step>
          </el-steps>
        </div>
        <p class="tip">*温馨提示：填写的资料越多，通过申请的机率越高</p>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="名下房产类型">
                <el-select v-model="ruleForm.HouseType" placeholder="请选择名下房产类型">
                  <el-option label="商品房" value="商品房"></el-option>
                  <el-option label="拆迁房" value="拆迁房"></el-option>
                  <el-option label="自建房" value="自建房"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="房产所在位置">
                <el-select v-model="ruleForm.HousePlace" placeholder="请选择房产所在位置">
                  <el-option label="户口当地" value="户口当地"></el-option>
                  <el-option label="现工作地" value="现工作地"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="是否主贷人">
                <el-select v-model="ruleForm.IsSelf" placeholder="请选择是否主贷人">
                  <el-option label="是" value="true"></el-option>
                  <el-option label="否" value="false"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="房产月供时间">
                <el-select v-model="ruleForm.MonthHouse" placeholder="请选择房产月供时间">
                  <el-option label="10年" value="10年"></el-option>
                  <el-option label="15年" value="15年"></el-option>
                  <el-option label="20年" value="20年"></el-option>
                  <el-option label="30年" value="30年"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="房产月供金额">
                <el-select v-model="ruleForm.MonthHousePrice" placeholder="请选择房产月供金额">
                  <el-option label="3千到6千" value="3千到6千"></el-option>
                  <el-option label="8千以上" value="8千以上"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="名下是否有车">
                <el-select v-model="ruleForm.IshaveCar" placeholder="请选择名下是否有车">
                  <el-option label="有" value="1"></el-option>
                  <el-option label="无" value="0"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="车辆所在地">
                <el-select v-model="ruleForm.CarPlace" placeholder="请选择活动区域">
                  <el-option label="本地" value="本地"></el-option>
                  <el-option label="外地" value="外地"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="车辆使用年限">
                <el-input v-model="ruleForm.CarAge"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm two">
              <el-form-item label="有无本地社保">
                <el-select v-model="ruleForm.socialsecurity" placeholder="请选择有无本地社保">
                  <el-option label="有" value="true"></el-option>
                  <el-option label="无" value="false"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="有无公积金">
                <el-select v-model="ruleForm.Accumulationfund" placeholder="请选择有无公积金">
                  <el-option label="有" value="true"></el-option>
                  <el-option label="无" value="false"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="芝麻信用分">
                <el-select v-model="ruleForm.ZhiM" placeholder="请选择芝麻信用分">
                  <el-option label="600以下" value="600以下"></el-option>
                  <el-option label="600以上" value="600以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="微粒贷款度">
                <el-input v-model="ruleForm.WeiL"></el-input>
              </el-form-item>
              <el-form-item label="是否有商业险">
                <el-select v-model="ruleForm.Businessinsurance" placeholder="请选择是否有商业险">
                  <el-option label="有" value="true"></el-option>
                  <el-option label="无" value="false"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="type" class="type" style="margin-left:-100px">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="阅读并同意《金融联盟服务协议》" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        <div class="text-center">
          <el-button @click="back()">上一步</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from "qs";
  export default {
    data() {
      return {
        ruleForm: {
          HouseType: '',
          HousePlace: '',
          IsSelf: '',
          MonthHouse: '',
          MonthHousePrice: '',
          IshaveCar: '',
          CarPlace: '',
          CarAge: '',
          socialsecurity: '',
          Accumulationfund: '',
          ZhiM: '',
          WeiL: '',
          Businessinsurance: '',
          type: []
        },
        rules: {
          type: [{
            type: 'array',
            required: true,
            message: '请先阅读并同意《金融联盟服务协议》',
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
      back() {
        this.$router.push("/Finance/BankLoanApplyfirst/id=" + window.location.href.split("id=")[1]);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: "Loading",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
            this.$http
              .post(
                "api/Web_SmailMarket/EditAmountSq",
                qs.stringify({
                  Token: getCookie("token"),
                  Price: -1,
                  IDCard: "-1",
                  Professional: "-1",
                  SalaryType: "-1",
                  HouseType: this.ruleForm.HouseType,
                  HousePlace: this.ruleForm.HousePlace,
                  IsSelf: this.ruleForm.IsSelf,
                  MonthHouse: this.ruleForm.MonthHouse,
                  MonthHousePrice: this.ruleForm.MonthHousePrice,
                  IshaveCar: this.ruleForm.IshaveCar,
                  CarPlace: this.ruleForm.CarPlace,
                  CarAge: this.ruleForm.CarAge,
                  socialsecurity: this.ruleForm.socialsecurity,
                  Accumulationfund: this.ruleForm.Accumulationfund,
                  ZhiM: this.ruleForm.ZhiM,
                  WeiL: this.ruleForm.WeiL,
                  Businessinsurance: this.ruleForm.Businessinsurance,
                  BankLoanID: this.ruleForm.BankLoanID,
                  BankID: window.location.href.split("id=")[1],
                })
              )
              .then(
                function (response) {
                  loading.close();
                  var status = response.data.Status;
                  if (status === 1) {
                    this.$message({
                      showClose: true,
                      type: "success",
                      message: response.data.Result
                    });
                    // this.dialogFormVisible = false
                  } else {
                    this.$message({
                      showClose: true,
                      type: "warning",
                      message: response.data.Result
                    });
                  }
                }.bind(this)
              )
              .catch(
                function (error) {
                  loading.close();
                  this.$notify.error({
                    title: "错误",
                    message: "错误：请检查网络"
                  });
                }.bind(this)
              );
          
          } else {
            this.$notify.error({
              title: "错误",
              message: "请输入手机号和验证码",
              offset: 100
            });
            return false;
          }
        });
        // this.$router.push("/Finance/BankLoanApplythird/id=" + window.location.href.split("id=")[1]);
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
    padding: 50px 0 0 0;
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
    padding-bottom: 50px;
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

  .tip {
    text-align: center;
    color: #F9183D;
    margin: 20px 0;
  }

</style>
