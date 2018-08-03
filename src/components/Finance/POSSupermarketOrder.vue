<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <div class="dark">
          <el-row :gutter="20" style="position: relative;">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <img src="../../../static/img/product_small.png" class="card-img">
            </el-col>
            <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
              <p class="big-text">pos机pos机pos机pos机pos机pos机pos机pos机pos机pos机pos 机pos机pos机</p>
              <p class="small-text">库存：30</p>
              <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              <p class="small-price">￥68</p>
              <el-button type="primary" class="applybtn" size="small">立刻购买</el-button>
            </el-col>
          </el-row>
          <div class="dark">
            <p class="title">
              <img src="../../../static/img/left.png" class="detail-img">
              商品详情
              <img src="../../../static/img/right.png" class="detail-img">
            </p>
            <img src="../../../static/img/product_figure.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        choose: 0,
        checked: true,
        num1: 1,
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
      handleChange(index) {
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

  .form-input {
    width: 50%;
  }

  #getcode {
    margin-left: 10px;
  }

  .card-img {
    width: 100%
  }

  .big-text {
    font-size: 20px;
    color: #333333;
  }

  .small-text {
    color: #BBBBBB;
    font-size: 15px;
  }

  @media (min-width:768px) {
    .applybtn {
      position: absolute;
      bottom: 70px;
    }
  }

  .el-row {
    padding: 50px 20px;
  }
  .small-price{
    font-size: 25px;
    color: #FF2736
  }

  .dark {
    padding: 20px 20px 80px 20px;
    color: #333333;
    font-family: MicrosoftYaHei;
    border-top: 1px solid #EEEEEE;

  }
  .dark img{
    max-width: 100%;
  }
  .dark .detail-img{
    vertical-align: middle;
  }
  .dark .title{
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    vertical-align: middle;
  }

</style>
