<template>
  <div id="app">
    <h3 v-if="!detail">我的订单</h3>
    <h3 v-if="detail">银行审贷订单</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="小额超市订单" name="first">
        <div v-for="(item,index) in list" :key="index" class="list" v-if="!detail" @click="detail=true">
          <div class="header">
            <span>订单号：{{item.No}}</span>
            <span class="list-status">{{item.status}}</span>
          </div>
          <div class="body">
            <img src="../../../static/img/manager.png" class="body-img">
            <div class="body-text">
              <span>{{item.Name}}</span>
              <br/>
              <span class="grey">{{item.text}}</span>
            </div>
          </div>
        </div>
        <div class="block" v-if="!detail">
          <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
          </el-pagination>
        </div>
        <div v-if="detail">
          <p class="detail-title">订单信息</p>
          <div class="Infobox">
            <label class="info-title">订单号：</label>
            <span>{{Info.Name}}</span>
          </div>
          <div class="Infobox">
            <label class="info-title">贷款名：</label>
            <span>{{Info.Name}}</span>
          </div>
          <div class="Infobox">
            <label class="info-title">姓名：</label>
            <span>{{Info.Name}}</span>
          </div>
          <div class="Infobox">
            <label class="info-title">电话：</label>
            <span>{{Info.Name}}</span>
          </div>
          <div class="Infobox">
            <label class="info-title">证件号码：</label>
            <span>{{Info.Name}}</span>
          </div>
          <div class="Infobox">
            <label class="info-title">创建时间：</label>
            <span>{{Info.Name}}</span>
          </div>
          <div class="Infobox">
            <label class="info-title">订单状态：</label>
            <span>{{Info.Name}}</span>
          </div>
          <div class="btnbox">
            <el-button type="primary" @click="detail=false">上一步</el-button>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="信贷经理超市订单" name="second">
        <div v-for="(item,index) in list" :key="index" class="list" v-if="!detail" @click="detail=true">
          <div class="header">
            <span>订单号：{{item.No}}</span>
            <span class="list-status">{{item.status}}</span>
          </div>
          <div class="body">
            <img src="../../../static/img/manager.png" class="body-img">
            <div class="body-text">
              <span>{{item.Name}}</span>
            </div>
          </div>
        </div>
        <div class="block" v-if="!detail">
          <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
          </el-pagination>
        </div>
        <div v-if="detail">
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">订单信息</p>
              <div class="Infobox">
                <label class="info-title">订单号：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">信贷经理：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">银行名：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">创建时间：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">订单状态：</label>
                <span>{{Info.Name}}</span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">用户信息</p>
              <div class="Infobox">
                <label class="info-title">姓名：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">证件：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">电话：</label>
                <span>{{Info.Name}}</span>
              </div>
            </el-col>
          </el-row>

          <div class="btnbox">
            <el-button type="primary" @click="detail=false">上一步</el-button>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="银行审贷订单" name="third">
        <div v-for="(item,index) in list" :key="index" class="list" v-if="!detail" @click="detail=true">
          <div class="header">
            <span>订单号：{{item.No}}</span>
            <span class="list-status">{{item.status}}</span>
          </div>
          <div class="body">
            <img src="../../../static/img/manager.png" class="body-img">
            <div class="body-text">
              <span>{{item.Name}}</span>
              <br/>
              <span class="grey">{{item.text}}</span>
            </div>
          </div>
        </div>
        <div class="block" v-if="!detail">
          <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
          </el-pagination>
        </div>
        <div v-if="detail">
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">订单信息</p>
              <div class="Infobox">
                <label class="info-title">姓名：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">手机号：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">申请金额：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">订单号：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">审贷银行：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">审贷类型：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">创建时间：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">审核状态：</label>
                <span>{{Info.Name}}</span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">审贷信息</p>
              <div class="Infobox">
                <label class="info-title">申请金额：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">身份证号：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">职业身份：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">月收入：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">有无本地社保：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">有无公积金：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">芝麻信用分：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">微粒贷款额度：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">是否商业保险：</label>
                <span>{{Info.Name}}</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">房产信息</p>
              <div class="Infobox">
                <label class="info-title">名下房产类型：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">房产所在位置：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">是否主贷人：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">房产月供时长：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">房产月供金额：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">名下是否有车：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">车牌所在地：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">车辆已使用年限： </label>
                <span>{{Info.Name}}</span>
              </div>
            </el-col>
          </el-row>
          <div class="btnbox">
            <el-button type="primary" @click="detail=false">上一步</el-button>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="信用卡超市订单" name="fourth">
        <div v-for="(item,index) in list" :key="index" class="list" v-if="!detail" @click="detail=true">
          <div class="header">
            <span>订单号：{{item.No}}</span>
            <span class="list-status">{{item.status}}</span>
          </div>
          <div class="body">
            <img src="../../../static/img/manager.png" class="body-img">
            <div class="body-text">
              <span>{{item.Name}}</span>
            </div>
          </div>
        </div>
        <div class="block" v-if="!detail">
          <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
          </el-pagination>
        </div>
        <div v-if="detail">
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">订单信息</p>
              <div class="Infobox">
                <label class="info-title">订单号：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">银行名称：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">创建时间：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">订单状态：</label>
                <span>{{Info.Name}}</span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">用户信息</p>
              <div class="Infobox">
                <label class="info-title">姓名：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">证件：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">电话：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">所在地：</label>
                <span>{{Info.Name}}</span>
              </div>
            </el-col>
          </el-row>

          <div class="btnbox">
            <el-button type="primary" @click="detail=false">上一步</el-button>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="车险超市订单" name="fiveth">
         <div v-for="(item,index) in list" :key="index" class="list" v-if="!detail" @click="detail=true">
          <div class="header">
            <span>订单号：{{item.No}}</span>
            <span class="list-status">{{item.status}}</span>
          </div>
          <div class="body">
            <img src="../../../static/img/manager.png" class="body-img">
            <div class="body-text">
              <span>{{item.Name}}</span>
              <br/>
              <span class="grey">{{item.text}}</span>
            </div>
          </div>
        </div>
        <div class="block" v-if="!detail">
          <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
          </el-pagination>
        </div>
        <div v-if="detail">
          <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">房产信息</p>
              <div class="Infobox">
                <label class="info-title">证件类型：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">证件号码：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">车辆初登日期：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">车辆识别代号：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">发动机号码：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">品牌类型:</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">核定载人数:</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">新车发票价: </label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">车辆所属性质: </label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">车辆使用性质：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">是否过户车：</label>
                <span>{{Info.Name}}</span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <p class="detail-title">订单信息</p>
              <div class="Infobox">
                <label class="info-title">订单号：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">创建时间：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">订单状态：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">地区：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">证件：</label>
                <span>{{Info.Name}}</span>
              </div>
              <div class="Infobox">
                <label class="info-title">车主：</label>
                <span>{{Info.Name}}</span>
              </div>
              <p class="detail-title">驾驶证</p>
                <img src="../../../static/img/vehicle_license.png" class="drivecard">
            </el-col>
          </el-row>
          <div class="btnbox">
            <el-button type="primary" @click="detail=false">上一步</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        detail: false,
        list: [{
            No: '123456789',
            status: '未审核',
            Name: '王经理',
            text: '宜人贷'
          },
          {
            No: '123456789',
            status: '未审核',
            Name: '王经理',
            text: '宜人贷'
          },
          {
            No: '123456789',
            status: '未审核',
            Name: '王经理',
            text: '宜人贷'
          }
        ],
        Info: {
          Name: '1111'
        },
        pageIndex: 1,
        pageCount: 10,
      }
    },
    mounted: function () {
      document.getElementsByTagName("body")[0].className = "add_bg";
    },
    computed: {
      currentPage: function () {
        return this.pageIndex
      }
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "add_bg");
    },
    methods: {
      handleCurrentChange(val) {
        this.filters.pageIndex = val;
      },
      handleClick(){
        this.detail = false;
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
    margin: 0;
  }

  .el-tabs {
    padding: 0 30px;

  }

  .list {
    margin-bottom: 20px;
    border: 1px solid #EEEEEE;
  }

  .header {
    width: 100%;
    background-color: #F5F5F5;
    padding: 10px;
    font-size: 16px;
  }

  .list-status {
    float: right;
    margin-right: 20px;
  }

  .body {
    padding: 10px;
  }

  .body-img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }

  .body span {
    vertical-align: middle;
  }

  .body-text {
    display: inline-block;
    margin-left: 20px;
  }

  .grey {
    color: #999999;
    font-size: 14px;
    margin-top: 10px;
  }

  .block {
    text-align: center;
    margin-top: 50px;
    padding-bottom: 80px;
    width: 100%;
  }

  /* 详情 */

  .Infobox {
    padding: 10px 0;
  }

  .Infobox label.info-title {
    width: 120px;
    display: inline-block;
  }

  .btnbox {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .detail-title {
    color: #CEAA70;
  }
  .drivecard{
    width: 300px;
    height: 200px;
    max-width: 100%;
  }

</style>
