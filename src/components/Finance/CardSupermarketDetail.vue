<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <div class="dark">
          <el-row :gutter="20" style="position: relative;">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <img src="../../../static/img/larger_map.png" class="card-img">
            </el-col>
            <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
              <p class="big-text">招商信用卡</p>
              <p class="small-text">单位名称：招商银行中心</p>
              <el-button type="primary" class="applybtn" size="small" @click="dialogFormVisible = true">免费申请</el-button>
            </el-col>
          </el-row>
          <div class="dark">
        <p style="font-weight: 600">告知说明</p>
        <p>本人向交通银行申请信用卡，承诺填写的各项信息均真实、完整、业务申请是否获批及信用卡额度以交通银行信用卡最终审核为准</p>
      </div>
        </div>
      </div>
    </div>
    <el-dialog title="交通银行申请提醒" :visible.sync="dialogFormVisible" center>
  <el-form :model="form">
    
    <p>如果您目前持有交通银行信用卡，或在其他平台机构同时申请信用卡，
将会影响你的征
信记录影响下卡率以及卡片额度</p>
    
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
     mounted: function() {
      document.getElementsByTagName("body")[0].className="add_bg"; 
    },
    beforeDestroy: function() {
        document.body.removeAttribute("class","add_bg");
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
  #app {
    background-color: #F5F5F5
  }

  .main {
    margin-top: 60px;
    background-color: #fff;
    margin-bottom: 60px;
  }

  .form-input{
    width: 50%;
  }
  #getcode{
    margin-left: 10px;
  }
  .card-img{
    width:100%
  }
  .big-text{
    font-size: 20px;
    color: #333333;
  }
  .small-text{
    color: #BBBBBB;
    font-size: 15px;
  }
  @media (min-width:768px) {
    .applybtn{
      position: absolute;
      bottom: 70px;
    }
  }
  .el-row{
    padding: 50px 20px;
  }
  .dark{
    padding: 20px 20px 80px 20px;
    color: #666666;
    font-family:MicrosoftYaHei; 
    border-top: 1px solid #EEEEEE;
    
  }

</style>
