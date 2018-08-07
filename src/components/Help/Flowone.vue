<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <h3>信用卡申请流程</h3>
        <p>1、办理信用卡的条件：年满18周岁的成年人。如果没有信用卡，则要求提供本公司的财务证明你的收入状况等相关证明，要是已经拥有一张信用卡，则可以以卡办卡方便了
不少的步骤。必须提供本人的身份证。</p>
<p>1、办理信用卡的条件：年满18周岁的成年人。如果没有信用卡，则要求提供本公司的财务证明你的收入状况等相关证明，要是已经拥有一张信用卡，则可以以卡办卡方便了
不少的步骤。必须提供本人的身份证。</p>
<p>1、办理信用卡的条件：年满18周岁的成年人。如果没有信用卡，则要求提供本公司的财务证明你的收入状况等相关证明，要是已经拥有一张信用卡，则可以以卡办卡方便了
不少的步骤。必须提供本人的身份证。</p>
<p>1、办理信用卡的条件：年满18周岁的成年人。如果没有信用卡，则要求提供本公司的财务证明你的收入状况等相关证明，要是已经拥有一张信用卡，则可以以卡办卡方便了
不少的步骤。必须提供本人的身份证。</p>
<p>1、办理信用卡的条件：年满18周岁的成年人。如果没有信用卡，则要求提供本公司的财务证明你的收入状况等相关证明，要是已经拥有一张信用卡，则可以以卡办卡方便了
不少的步骤。必须提供本人的身份证。</p>
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
    padding: 30px 10%;
    width: 80%;
  }

  h3{
    text-align: center;
  }
  .main p{
    line-height: 40px;
  }
  

</style>
