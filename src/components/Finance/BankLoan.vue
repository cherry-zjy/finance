<template>
  <div id="app">

    <div class="container">
      <h3>银行信贷</h3>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <img src="../../../static/img/housing_loan.png" class="background-img" @click="apply(0)">
          <h2 class="card-name">房屋贷款</h2>
          <div class="imgbox">
            <el-row>
              <el-col :span="6" :gutter="20" v-for="item in 4" :key="item">
                <img src="../../../static/img/fwdk_icbc.png">
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <img src="../../../static/img/car_loans.png" class="background-img" @click="apply(1)">
          <h2 class="card-name">车辆贷款</h2>
          <div class="imgbox">
            <el-row>
              <el-col :span="6" :gutter="20" v-for="item in 4" :key="item">
                <img src="../../../static/img/fwdk_icbc.png">
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <img src="../../../static/img/credit.png" class="background-img" @click="apply(2)">
          <h2 class="card-name">信用贷款</h2>
          <div class="imgbox">
            <el-row>
              <el-col :span="6" :gutter="20" v-for="item in 4" :key="item">
                <img src="../../../static/img/fwdk_icbc.png">
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {

    },
    methods: {
      apply(id) {
        this.$router.push("/Finance/BankLoanApplyfirst/id=" + id);
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    text-align: center;
    margin-top: 90px;
    font-family:MicrosoftYaHei;
    color:rgba(43,43,43,1);
  }

  .container {
    padding-bottom: 80px;
  }

  .product-title {
    border-bottom: 3px solid #CEAA70;
    padding: 0 10px 10px 10px;
  }

  .el-row {
    margin-top: 60px;
  }

  .el-card {
    width: 96%;
    margin-left: 2%;
    margin-top: 20px;
  }

  .background-img {
    width: 100%;
  }

  .el-col {
    cursor: pointer;
    position: relative;
  }

  .card-name {
    position: absolute;
    top: 90px;
    left: 40%;
    color: #fff;
  }

  .imgbox {
    position: absolute;
    bottom: 50px;
    left: 10%;
    width: 80%;
  }

  .el-col .el-col-6 {
    text-align: center;
  }

  .imgbox img {
    width: 60%;
  }

</style>
