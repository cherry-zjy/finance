<template>
  <div id="app">
    <h3>实名认证</h3>
    <!-- <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form-item label="姓名">
            <el-input v-model="form.Name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form-item label="身份证号">
            <el-input v-model="form.IDCad"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <p>身份证正面</p>
          <img src="../../../static/img/positive.png" class="card-img">
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <p>身份证反面</p>
          <img src="../../../static/img/reverse.png" class="card-img">
        </el-col>
      </el-row>
    </el-form>
    <div class="btnbox">
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button @click="back">返回</el-button>
    </div> -->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          Name: '',
          IDCad: '',
        },
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
      submitForm(onSubmit) {

      },
      back() {
        this.$router.push("/User/Info");
      }
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
    position: relative;
  }

  h3 {
    padding: 20px 30px;
    border-bottom: 1px solid #EEEEEE;
  }

  .main p {
    line-height: 40px;
  }

  .btnbox {
    text-align: center;
    margin-top: 20px;
    padding-bottom: 20px;
  }

  .el-form {
    padding: 20px 30px;
  }

  .card-img {
    max-width: 100%;
  }

</style>
