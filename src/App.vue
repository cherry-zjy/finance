<template>
  <div id="app">
    <header>
    <nav class="navbar navbar-default" >
      <div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand page-scroll" href="/"><img src="../static/img/logo_big.png" class="img-responsive"></a>
    </div>
    <div class="collapse navbar-collapse text-center" id="bs-example-navbar-collapse-1">
     <ul class="nav navbar-nav">
        <li :class="{active:linum=='Home'}"><a @click="navto('/')">首页 </a></li>
        <li class="dropdown" :class="{active:linum=='Finance'}">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">金融服务 <i class="el-submenu__icon-arrow el-icon-arrow-down"></i></a>
          <ul class="dropdown-menu">
            <li><a @click="navto('/Finance/SmallSupermarket')">小额超市</a></li>
            <li><a @click="navto('/Finance/CreditManager')">信贷经理</a></li>
            <li><a @click="navto('/Finance/BankLoan')">银行借贷</a></li>
            <li><a @click="navto('/Finance/CardSupermarket')">信用卡超市</a></li>
            <li><a @click="navto('/Finance/CarSupermarket')">车险超市</a></li>
            <li><a @click="navto('/Finance/POSSupermarket')">POS超市</a></li>
          </ul>
        </li>
        <li class="dropdown" :class="{active:linum=='Help'}">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">帮助说明 <i class="el-submenu__icon-arrow el-icon-arrow-down"></i></a>
          <ul class="dropdown-menu">
            <li><a @click="navto('/Help/Flow')">流程说明</a></li>
            <li><a @click="navto('/Help/Formmanual')">平台手册</a></li>
            <li><a @click="navto('/Help/HelpCenter')">帮助中心</a></li>
          </ul>
        </li>
        <li class="dropdown" :class="{active:linum=='Select'}">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">查询服务 <i class="el-submenu__icon-arrow el-icon-arrow-down"></i></a>
          <ul class="dropdown-menu">
            <li><a @click="navto('/Select/CardInquiry')">信用卡查询</a></li>
            <li><a @click="navto('/Select/Loaninquiry')">贷款查询</a></li>
          </ul>
        </li>
        <li :class="{active:linum=='Find'}"><a @click="navto('/Find')">发现</a></li>
        <li class="menu-btn">
        <img src="../static/img/apxq_head_portrait@2x.png" class="menu-icon">
        <el-button size="small">退出</el-button>
        </li>
      </ul>
    </div>
</div>
    </nav>
</header>
<div class="shelter"></div>
    <router-view/>
    <div class="foot ">
      <div class="container">
      <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"><img src="../static/img/customer_service_hotline.png" class="foot-icon">客服热线：400-800-800 周一至周六（9:00-18:00）</el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8"><img src="../static/img/place.png" class="foot-icon">公司地址：江苏省无锡市太湖b区2幢905</el-col>
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
        linum:'Home',
      };
    },
    mounted:function(){
      var path = window.location.href;
       if(path.indexOf('Find')>0){
          this.linum = 'Find'
        }else if(path.indexOf('Finance')>0){
          this.linum = 'Finance'
        }else if(path.indexOf('Select')>0){
          this.linum = 'Select'
        }else if(path.indexOf('Help')>0){
          this.linum = 'Help'
        }else{
          this.linum = 'Home'
        }
    },
    methods: {
      navto(path){
        this.$router.push(path);
        if (path=='/Home'||path=='/') {
          this.linum = 'Home'
        }else if(path=='/Find'){
          this.linum = 'Find'
        }else if(path.indexOf('Finance')>0){
          this.linum = 'Finance'
        }else if(path.indexOf('Select')>0){
          this.linum = 'Select'
        }else if(path.indexOf('Help')>0){
          this.linum = 'Help'
        }
      }
    }
  }

</script>

<style>
  .text-center{
    text-align: center;
  }

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

  .menu-btn button{
    
    margin: 13px 0;
    padding: 5px 20px;
  }
  
  @media (max-width: 768px) {
    .menu-btn button{
      position: absolute;
    }
  }
  
  @media (min-width: 768px) {
    .menu-btn {
      float: right;
    }
    .menu-btn button{
      float: right;
    }
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
  .el-submenu__icon-arrow {
    position: unset;
  }
  .shelter{
    height: 60px;
  }
  .foot-icon{
    vertical-align: middle;
    width: 25px;
    height: 25px;
  }

</style>
