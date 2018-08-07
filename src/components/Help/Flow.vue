<template>
  <div id="app">
    <div class="container">
      <div class="main">

        <div class="step flex" @click="one()">
          <div class="step-main">
            <img src="../../../static/img/credit_card.png">
            <i class="el-icon-arrow-right"></i>
          </div>
          <div class="step-text">信用卡申请流程</div>
        </div>

        <div class="step flex">
          <div class="step-main">
            <img src="../../../static/img/illegal.png">
            <i class="el-icon-arrow-right"></i>
          </div>
          <div class="step-text">违章操作步骤说明</div>
        </div>

        <div class="step">
          <img src="../../../static/img/merchants_gathering.png">
          <div class="step-text">商户收款说明</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

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
      one() {
        this.$router.push("/Help/Flowone");
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
    display: flex;
  }

  .step {
    display: inline-block;
    cursor: pointer;
  }

  @media (min-width:768px) {
    .main {
      width: 60%;
      padding: 25% 20%;
    }
    .step.flex {
      flex-basis: 50%;
    }
  }

  @media (max-width:768px) {
    .main {
      width: 100%;
      padding: 25% 0;
    }
    .step {
      width: 33%
    }
    .step img {
      max-width: 100%;
    }
    .el-icon-arrow-right {
      display: none;
    }
  }

  .el-steps--simple {
    background-color: #fff;
  }

  .step-main {
    position: relative;
    width: 100%;
  }

  .el-icon-arrow-right {
    position: absolute;
    top: 65px;
    right: 20%;
  }
  .step .step-text{
    text-align: center;
    margin-top: 20px;
  }

  .step.flex .step-text {
    margin-left: 5%;
    text-align: left;
    font-family: MicrosoftYaHei;
    color: rgba(43, 43, 43, 1);
  }
  

</style>
