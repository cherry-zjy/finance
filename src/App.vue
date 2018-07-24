<template>
  <div id="app">
    <header>
    <nav class="navbar navbar-default" >
      <div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand page-scroll" href="/"><img src="https://confidentcustomer.com/img/site/logo.png" class="img-responsive"></a>
    </div>
    <div class="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
      <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/" class="menu-box">首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title">金融服务</template>
          <el-menu-item index="SmallSupermarket">小额超市</el-menu-item>
          <el-menu-item index="CreditManager">信贷经理</el-menu-item>
          <el-menu-item index="BankLoan">银行借贷</el-menu-item>
          <el-menu-item index="CardSupermarket">信用卡超市</el-menu-item>
          <el-menu-item index="CarSupermarket">车险超市</el-menu-item>
          <el-menu-item index="POSSupermarket">POS超市</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">帮助说明</template>
          <el-menu-item index="Flow">流程说明</el-menu-item>
          <el-menu-item index="formmanual">平台手册</el-menu-item>
          <el-menu-item index="Help">帮助中心</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">查询服务</template>
          <el-menu-item index="CardInquiry">信用卡查询</el-menu-item>
          <el-menu-item index="Loaninquiry">贷款查询</el-menu-item>
        </el-submenu>
        <el-menu-item index="Find">发现</el-menu-item>
        <li class="menu-btn">
        <img src="../static/img/apxq_head_portrait@2x.png" class="menu-icon">
        <el-button size="small">退出</el-button>
        </li>
      </el-menu>
    </div>
</div>
    </nav>
</header>
    <router-view/>
    <div class="foot ">
      <div class="container">
      <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">客服热线：400-800-800 周一至周六（9:00-18:00）</el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">公司地址：江苏省无锡市太湖b区2幢905</el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"><span style="font-family:Arial;">©</span>2002-2017. 无锡太湖有限公司. 版权所有.</el-col>
      </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style>
  html,
  body {
    width: 100%;
    margin: 0;
  }
  .el-menu--horizontal>.el-submenu {
    float: unset;
  }
  .el-menu--horizontal>.el-menu-item {
    float: unset;
  }
  .el-menu {
      position: unset;
  }

  .text-center{
    text-align: center;
  }

  .menu-name,
  .menu-logo {
    height: 60px;
    line-height: 60px;
    margin: 0;
    float: left;
  }

  .menu-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .menu-btn {
    float: right;
    margin-right: 20px;
    margin-top: 10px;
  }

  .foot {
    background-color: #3B3B3B;
    color: #fff;
    margin: 0;
    padding: 50px 30px;
  }

  .foot .foot-text+.foot-text {
    margin-left: 120px;
  }

</style>
