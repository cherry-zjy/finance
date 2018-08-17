
<template>
  <div>
    <el-carousel indicator-position="none" arrow="always" height="500px">
      <el-carousel-item v-for="item in bannerlist" :key="item.url">
        <img :src="mainurl+item.Image" class="banner-img">
      </el-carousel-item>
    </el-carousel>
    <h3>
      <span class="product-title">推荐产品</span>
    </h3>
    <div class="container">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="(item,index) in list" :key="index">
          <el-card class="box-card" shadow="hover">
            <div class="header">
              <img :src="mainurl+item.Logo" class="header-icon row-img">
              <span class="header-icon">{{item.Name}}</span>
            </div>
            <div class="body">
              <p class="card-money">{{item.Price}}</p>
              <p class="card-title">最高额度</p>
              <div>
                <el-tag v-for="item in item.tag" :key="item">
                  {{item}}
                </el-tag>
              </div>
              <el-button type="primary" class="card-btn">免费申请</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="dark">
      <h3>
        <span class="product-title advantage">六大优势</span>
      </h3>
      <div class="container">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-card class="box-card" shadow="hover">
              <div class="body">
                <img src="../../static/img/apxq_head_portrait@2x.png" class="advantage-icon">
                <p>高校专业</p>
                <p class="advantage-text">优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势</p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-card class="box-card" shadow="hover">
              <div class="body">
                <img src="../../static/img/apxq_head_portrait@2x.png" class="advantage-icon">
                <p>高校专业</p>
                <p class="advantage-text">优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势</p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-card class="box-card" shadow="hover">
              <div class="body">
                <img src="../../static/img/apxq_head_portrait@2x.png" class="advantage-icon">
                <p>高校专业</p>
                <p class="advantage-text">优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势</p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-card class="box-card" shadow="hover">
              <div class="body">
                <img src="../../static/img/apxq_head_portrait@2x.png" class="advantage-icon">
                <p>高校专业</p>
                <p class="advantage-text">优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势</p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-card class="box-card" shadow="hover">
              <div class="body">
                <img src="../../static/img/apxq_head_portrait@2x.png" class="advantage-icon">
                <p>高校专业</p>
                <p class="advantage-text">优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势</p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <el-card class="box-card" shadow="hover">
              <div class="body">
                <img src="../../static/img/apxq_head_portrait@2x.png" class="advantage-icon">
                <p>高校专业</p>
                <p class="advantage-text">优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势优势</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <h3>
      <span class="product-title">关于我们</span>
    </h3>
    <div class="container">
<p class="aboutus">
  金融 指货币的发行、流通和回笼，贷款的发放和收回，存款的存入和提取，汇兑的往来等经济活动。<br/>
  金融（FINANCE）就是对现有资源进行重新整合之后，实现价值和利润的等效流通。（专业的说法是：实行从储蓄到投资的过程，狭义的可以理解为金融是动态的货币经济学。）<br/>
金融是人们在不确定环境中进行资源跨期的最优配置决策的<br/>
金融的本质是价值流通。金融产品的种类有很多，其中主要包括银行、证券、保险、信托等。金融所涉及的学术领域很广，其中主要包括：会计、财务、投资学、银行学、证<br/>
券学、保险学、信托学等等。<br/>
金融是一种交易活动，金融交易本身并未创造价值，那为什么在金融交易中就有赚钱的呢？按照陈志武先生的说法，金融交易是一种将未来收入变现的方式，也就是明天的钱<br/>
今天来花。<br/>
简单地说金融交易的频繁程度就是反映一个地区、区域、乃至国家经济繁荣能力的重要指标。
</p>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        bannerlist: [],
        list:[],
        mainurl:''
      }
    },
    mounted() {
      this.mainurl = mainurl;
      this.getInfo();
      this.getsSmall()
    },
    methods:{
      getInfo() {
        this.$http
          .get("api/Web_Home/HomeBanner", {
            params: {
              pageIndex: 1,
              pageSize: 999,
            }
          })
          .then(
            function (response) {
              var status = response.data.Status;
              if(status === 1){
                this.bannerlist = response.data.Result.list;
              }else {
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
              this.$notify.error({
                title: "错误",
                message: "错误：请检查网络"
              });
            }.bind(this)
          );
      },
      getsSmall() {
        const loading = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        this.$http
          .get("api/Web_SmailMarket/AmountLis", {
            params: {
              pageIndex: 1,
              pageSize: 6,
            }
          })
          .then(
            function (response) {
              loading.close();
              var status = response.data.Status;
              if (status === 1) {
                this.list = response.data.Result.list;
                for (var i = 0; i < this.list.length; i++) {
                  this.list[i].tag = new Array()
                  this.list[i].tag = this.list[i].Condition.split(",");
                }
                this.Imgresize()
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
              console.log(error)
              loading.close();
              this.$notify.error({
                title: "错误",
                message: "错误：请检查网络"
              });
            }.bind(this)
          );
      },
      Imgresize() {
        // window.onresize = function () {
        //   $(".row-img").css("height", $(".row-img").width() * 1.5)
        // }
        // $(".row-img").css("height", $(".row-img").width() * 1.5)
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* banner */
  .banner-img {
    width: 100%;
    height: 100%;
  }
  /* banner居中显示，不受屏幕大小失真 */
  .el-carousel__container{
    position: relative;
  }
  .el-carousel__item.is-animating {
    width: 1920px;
    position: absolute;
    left: 50%;
    margin-left: -960px;
  }

  /* 推荐产品 */

  h3 {
    text-align: center;
    margin-top: 50px;
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
  .row-img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
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

  /* 优势 */

  .dark {
    background: url(../../static/img/sy_bj.png);
    color: #eee;
    background-size: 100% 100%;
    padding: 80px 0;
    margin-top: 50px;
  }

  .advantage-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .advantage-text {
    text-align: left
  }

  .advantage{
    color:#fff;
    border-bottom: 3px solid #fff;
  }
  .dark h3{
    margin-top: 0;
  }
  .dark .el-card {
    background-color:unset;
    color: #fff;
  }
  .aboutus{
    font-size: 18px;
    font-family: MicrosoftYaHei;
    color: rgba(102,102,102,1);
    line-height: 25px;
    margin-top: 50px;
    padding-bottom: 200px;
  }

</style>
