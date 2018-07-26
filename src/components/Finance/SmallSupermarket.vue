<template>
  <div id="app">
    
    <div class="container">
      <h3>小额超市</h3>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-card class="box-card" shadow="hover">
            <div class="header">
              <img src="../../../static/img/touxiang.png" class="header-icon">
              <span class="header-icon">宜人贷</span>
            </div>
            <div class="body">
              <p class="card-money">10000</p>
              <p class="card-title">最高额度</p>
              <el-tag v-for="tag in tags" :key="tag.name">
                {{tag.name}}
              </el-tag>
              <el-button type="primary" class="card-btn" @click="apply('1')">免费申请</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-card class="box-card" shadow="hover">
            <div class="header">
              <img src="../../../static/img/touxiang.png" class="header-icon">
              <span class="header-icon">宜人贷</span>
            </div>
            <div class="body">
              <p class="card-money">10000</p>
              <p class="card-title">最高额度</p>
              <el-tag v-for="tag in tags" :key="tag.name">
                {{tag.name}}
              </el-tag>
              <el-button type="primary" class="card-btn">免费申请</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-card class="box-card" shadow="hover">
            <div class="header">
              <img src="../../../static/img/touxiang.png" class="header-icon">
              <span class="header-icon">宜人贷</span>
            </div>
            <div class="body">
              <p class="card-money">10000</p>
              <p class="card-title">最高额度</p>
              <el-tag v-for="tag in tags" :key="tag.name">
                {{tag.name}}
              </el-tag>
              <el-button type="primary" class="card-btn">免费申请</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-card class="box-card" shadow="hover">
            <div class="header">
              <img src="../../../static/img/touxiang.png" class="header-icon">
              <span class="header-icon">宜人贷</span>
            </div>
            <div class="body">
              <p class="card-money">10000</p>
              <p class="card-title">最高额度</p>
              <el-tag v-for="tag in tags" :key="tag.name">
                {{tag.name}}
              </el-tag>
              <el-button type="primary" class="card-btn">免费申请</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-card class="box-card" shadow="hover">
            <div class="header">
              <img src="../../../static/img/touxiang.png" class="header-icon">
              <span class="header-icon">宜人贷</span>
            </div>
            <div class="body">
              <p class="card-money">10000</p>
              <p class="card-title">最高额度</p>
              <el-tag v-for="tag in tags" :key="tag.name">
                {{tag.name}}
              </el-tag>
              <el-button type="primary" class="card-btn">免费申请</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <el-card class="box-card" shadow="hover">
            <div class="header">
              <img src="../../../static/img/touxiang.png" class="header-icon">
              <span class="header-icon">宜人贷</span>
            </div>
            <div class="body">
              <p class="card-money">10000</p>
              <p class="card-title">最高额度</p>
              <el-tag v-for="tag in tags" :key="tag.name">
                {{tag.name}}
              </el-tag>
              <el-button type="primary" class="card-btn">免费申请</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- 分页 -->
    <div class="block">
      <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next,jumper" :page-count="pageCount" :current-page="currentPage">
      </el-pagination>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageIndex:1,
        pageCount: 10,
        tags: [{
            name: '标签一'
          },
          {
            name: '标签二'
          },
          {
            name: '标签三'
          },
          {
            name: '标签四'
          },
          {
            name: '标签五'
          }
        ]
      }
    },
    computed: {
      currentPage: function () {
        return this.pageIndex
      }
    },
    methods:{
      apply(id){
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
    margin-top: 150px;
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
  .header-icon{
    vertical-align: middle;
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
