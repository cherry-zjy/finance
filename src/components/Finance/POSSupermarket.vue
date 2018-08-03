
<template>
  <div id="app">
    
    <div class="container">
      <h3>POS超市</h3>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="item in 6" :key="item">
            <div class="card" @click="apply(1)">
            <img src="../../../static/img/product_map.png" class="row-img">
            <div class="row-name">POS机POS机POS机POS机POS机POS机POS机POS机</div>
            <div class="row-price">￥68</div>
            </div>
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
        pageIndex:1,
        pageCount: 10,
      }
    },
    computed: {
      currentPage: function () {
        return this.pageIndex
      }
    },
    methods:{
      apply(id){
        this.$router.push("/Finance/POSSupermarketDetail/id=" + id);
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
    font-family:MicrosoftYaHei;
    color:rgba(43,43,43,1);
  }

  .product-title {
    border-bottom: 3px solid #CEAA70;
    padding: 0 10px 10px 10px;
  }

  .el-row {
    margin-top: 60px;
  }
  .card{
    background-color: #EEEEEE;
    margin-top: 20px;
  }
  .row-img{
      width: 100%;
  }
  .row-name{
      color: #2B2B2B;
      padding: 10px 40px;
  }
  .row-price{
    color: #FF2736;
    padding: 0 40px 20px 40px;
    font-size: 25px;
  }
  .el-pagination {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 100px;
}

</style>
