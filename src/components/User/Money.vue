<template>
  <div id="app">
    <h3>我的钱包</h3>
    <div class="info">
      <p class="mymoney">
        <span class="bigtext">{{Money}}</span>元</p>
      <el-button type="primary" @click="dialogFormVisible=true" class="withdraw" size="small">申请提现</el-button>
    </div>
    <div class="line"></div>
    <h3>历史明细</h3>
    <div class="list" v-for="(item,index) in list" :key="index">
      <p class="title">{{item.title}}</p>
      <p class="time">{{item.time}}</p>
      <span class="detail-money red" v-if="item.money.indexOf('+')!== -1">{{item.money}}</span>
      <span class="detail-money green" v-if="item.money.indexOf('-')!== -1">{{item.money}}</span>
    </div>
    <div class="block">
      <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        Money: 500,
        pageIndex: 1,
        pageCount: 10,
        list: [{
          title: '扣款',
          time: '2018-7-25 09:00:00',
          money:'+100'
        },{
          title: '扣款',
          time: '2018-7-25 09:00:00',
          money:'+100'
        },{
          title: '扣款',
          time: '2018-7-25 09:00:00',
          money:'-100'
        }]
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

  .mymoney {
    padding: 30px;

  }

  .line {
    height: 20px;
    background-color: #F5F5F5;
  }

  .info {
    position: relative;
  }

  .bigtext {
    font-size: 35px;
    font-weight: 600;
    margin-right: 20px;
  }

  .withdraw {
    position: absolute;
    right: 30px;
    top: 20px;
  }

  .title {
    color: #333333;
  }

  .time {
    font-size: 14px;
    color: #BBBBBB;
  }
  .list{
    position: relative;
    padding: 10px 30px;
    border-bottom: 1px solid #EEEEEE;
  }
  .detail-money{
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .green{
    color: #5ED9BB
  }
  .red{
    color: #D9675E;
  }
  .block {
    text-align: center;
    margin-top: 50px;
    padding-bottom: 80px;
    width: 100%;
  }

</style>
