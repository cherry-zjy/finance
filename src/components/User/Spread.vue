<template>
  <div id="app">
    <h3 v-if="!detail">推广管理</h3>
    <h3 v-if="detail">推广管理详情页</h3>
    <el-row :gutter="10" v-if="!detail">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="(item,index) in list" :key="index">
        <div class="list-box" @click="gotodetail()">
          <img :src="item.img" class="row-img">
          <p>{{item.Name}}</p>
        </div>
      </el-col>
      
    </el-row>
    <div class="block" v-if="!detail">
      <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
      </el-pagination>
    </div>
    <div v-if="detail" class="detail">
      <img src="../../../static/img/insets.png" class="detail-img">
      <p>海报</p>
      <div class="sharebox">
        <p class="share">分享至</p>
        <img src="../../../static/img/sharewechat.png">
        <img src="../../../static/img/circle_friends.png">
        <div class="btnbox">
          <el-button type="primary" @click="detail=false">上一步</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detail: false,
        list: [{
          img: '../../../static/img/insets.png',
          Name: '海报'
        }, {
          img: '../../../static/img/insets.png',
          Name: '海报'
        }, {
          img: '../../../static/img/insets.png',
          Name: '海报'
        }, {
          img: '../../../static/img/insets.png',
          Name: '海报'
        }, {
          img: '../../../static/img/insets.png',
          Name: '海报'
        }, {
          img: '../../../static/img/insets.png',
          Name: '海报'
        }],
        pageIndex: 1,
        pageCount: 10,
      }
    },
    mounted: function () {
      document.getElementsByTagName("body")[0].className = "add_bg";
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "add_bg");
    },
    computed: {
      currentPage: function () {
        return this.pageIndex
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.filters.pageIndex = val;
      },
      gotodetail() {
        this.detail = true
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

  .el-row {
    padding: 10px 30px;
  }

  .el-row p {
    line-height: 0;
    text-align: center;
  }

  .row-img {
    width: 100%;
  }

  .list-box {
    padding: 10px;
    cursor: pointer;
  }

  .detail {
    text-align: center;
    width: 100%;
  }

  .sharebox {
    margin-top: 20px;
  }

  .sharebox .share {
    font-weight: 600;
  }

  .sharebox img {
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
  .btnbox{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .block {
    text-align: center;
    margin-top: 20px;
    padding-bottom: 80px;
    width: 100%;
  }

</style>
