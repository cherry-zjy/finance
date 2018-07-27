<template>
  <div id="app">
    <div class="container">
      <div class="box"></div>
        <div class="main">
      <div class="dark">
        <h4>宜人贷</h4>
        <p>申请人数：19356566人&nbsp;&nbsp;&nbsp;&nbsp;可借贷款：1万-2万&nbsp;&nbsp;&nbsp;借款期限：24个月以上&nbsp;&nbsp;&nbsp;平均办理时间：1-3天</p>
      </div>
      <div class="dark">
        <h4>申请条件</h4>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <h4>费用说明</h4>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
        <p>年龄要求：18周岁以上</p>
      </div>
      <div class="dark bottom">
        <h4>如何快速申请</h4>
        <p>1、内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>1、内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>1、内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <el-button type="primary" size="small">立即申请</el-button>
      </div>
      
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageIndex: 1,
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
    methods: {
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
  #app{
    background-color: #F5F5F5
  }
  .box{
    height: 60px;
  }
  .main{
    margin-top: 60px;
    background-color: #fff
  }
  .dark{
    padding: 50px 20px 10px 20px;
    margin: 0 30px;
    color: #666666;
    font-family:MicrosoftYaHei; 
  }
  .dark+.dark{
    padding-top: 10px;
    border-top: 1px solid #EEEEEE;
  }
  .dark.bottom{
    padding-bottom: 80px;
  }
  .dark.bottom button{
    margin-top: 20px;
  }
  h3{
    font-weight: 400;
    
  }

</style>
