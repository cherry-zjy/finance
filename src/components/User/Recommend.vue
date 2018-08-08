<template>
  <div id="app">
    <h3 >专属推荐人</h3>
    <div class="info">
      <img src="../../../static/img/apxq_head_portrait@2x.png">
      <p>姓名：张三</p>
      <p>姓名：张三</p>
      <p>姓名：张三</p>
      <p>姓名：张三</p>
      <p>姓名：张三</p>
    </div>
    <div class="tip">
      <p class="tip-tltle">温馨提示</p>
      <p class="tip-connect">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
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

  .info{
    text-align: center;
  }
  .tip{
    padding: 0 30px;
    font-size: 14px;
    margin-top: 100px;
    border-top: 1px solid #EEEEEE;
    padding-bottom: 30px;
  }
  .tip-connect{
    color: #999999;
    line-height: 40px;
  }

</style>
