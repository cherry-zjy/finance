<template>
  <div id="app">

    <div class="container">
      <h3>小额超市</h3>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="(item,index) in list" :key="index">
          <el-card class="box-card" shadow="hover">
            <div class="header">
              <img :src="mainurl+item.Logo" class="header-icon">
              <span class="header-icon">{{item.Name}}</span>
            </div>
            <div class="body">
              <p class="card-money">{{item.Price}}</p>
              <p class="card-title">最高额度</p>
              <el-tag v-for="tag in item.Condition" :key="tag">
                {{tag}}
              </el-tag>
              <el-button type="primary" class="card-btn" @click="apply(item.ID)">免费申请</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 分页 -->
      <div class="block">
        <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        pageIndex: 1,
        pageCount: 10,
      }
    },
    computed: {
      currentPage: function () {
        return this.pageIndex
      }
    },
    mounted() {
      this.mainurl = mainurl;
      this.getInfo();
    },
    methods: {
      getInfo() {
        const loading = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        this.$http
          .get("api/Web_SmailMarket/AmountLis", {
            params: {
              pageIndex: this.pageIndex,
              pageSize: 6,
            }
          })
          .then(
            function (response) {
              loading.close();
              var status = response.data.Status;
              if (status === 1) {
                this.list = response.data.Result.list;
                this.pageCount = response.data.Result.page;
              } else {
                this.$message({
                  showClose: true,
                  type: "warning",
                  message: response.data.Result
                });
              }
            }.bind(this)
          )
          // 请求error
          .catch(
            function (error) {
              loading.close();
              this.$notify.error({
                title: "错误",
                message: "错误：请检查网络"
              });
            }.bind(this)
          );
      },
      apply(id) {
        this.$router.push("/Finance/SmallSupermarketDetail/id=" + id);
      },
      // 分页
      handleCurrentChange(val) {
        this.filters.pageIndex = val;
        // this.getInfo();
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    text-align: center;
    margin-top: 90px;
    font-family: MicrosoftYaHei;
    color: rgba(43, 43, 43, 1);
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

  .item {
    margin-bottom: 18px;
  }

  .header {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .header-icon {
    vertical-align: middle;
  }

  .img.header-icon {
    width: 48px;
    height: 48px;
  }

  .body {
    text-align: center;
  }

  .card-money {
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0 0 0 !important;
  }

  .card-title {
    color: #BBBBBB;
    font-size: 15px;
    margin: 0 !important;
  }

  .body .el-tag+.el-tag {
    margin-left: 10px;
  }

  .el-tag {
    margin-top: 20px;
    background-color: #fff;
    color: #CEAA70;
    border: 1px solid #CEAA70;
  }

  .card-btn {
    width: 80%;
    margin-top: 50px;
  }

  .el-pagination {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 100px;
  }

</style>
