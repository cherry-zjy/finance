<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <h3>填写信息详情</h3>
        <div class="dark">
          <el-row>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(o,index) in 4" :key="index">
              <el-card class="box-card">
                <div class="text item">
                  姓名：张先生
                  <img src="../../../static/img/tick.png" class="tick-icon" v-if="choose==index">
                  <img src="../../../static/img/tick_no.png" class="tick-icon" v-if="choose!==index" @click="choosethis(index)">
                </div>
                <div class="text item">
                  证件：332316199204075024
                </div>
                <div class="text item">
                  电话：275471255
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-checkbox v-model="checked">阅读并同意《金融联盟服务协议》</el-checkbox>
        </div>
        <div class="btnbox">
          <el-button>添加申请人信息</el-button>
          <el-button type="primary" @click="dialogFormVisible=true">下一步</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="交通银行" :visible.sync="dialogFormVisible" center>
  <el-form :model="form">
    <p>正在给张三手机号178***000办理信用卡,请认真核对信息</p>
    <p>内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容 内容内容内容内内容内容内容内容内容内</p>
    <el-form-item>
      <el-input v-model="form.name" placeholder="请输入验证码" class="form-input"></el-input><el-button type="primary" id="getcode">获取验证码</el-button>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        choose: 0,
        checked: true,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      }
    },
    computed: {

    },
    methods: {
      choosethis(index) {
        this.choose = index
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    background-color: #F5F5F5
  }

  .main {
    margin-top: 60px;
    background-color: #fff;
    margin-bottom: 60px;
  }

  h3 {
    padding: 20px 30px;
  }

  .dark {
    padding: 30px 0 80px 0;
    margin: 0 30px;
    color: #666666;
    font-family: MicrosoftYaHei;
    border-top: 1px solid #EEEEEE;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .el-card {
    width: 92%;
    margin-left: auto;
    margin-right: auto;
    background-color: #F5F5F5;
    color: #666666;
    position: relative;
    margin-top: 20px;
  }

  .tick-icon {
    position: absolute;
    right: 10px;
    top: 15px;
  }
  .el-checkbox{
    padding: 30px 10px;
  }
  .btnbox{
    text-align: center;
    margin-top: 30px;
    padding-bottom: 50px;
  }
  .form-input{
    width: 50%;
  }
  #getcode{
    margin-left: 10px;
  }
  

</style>
