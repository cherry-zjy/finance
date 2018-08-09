<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <h3>收货地址</h3>
        <div class="dark">
          <div>收货地址：杨女士</div>
          <div>联系方式：12345678910</div>
          <div>收货地址：浙江省杭州市杭州大道1500号</div>
          <div class="btnbox">
            <el-button size="small" @click="dialogFormVisible=true">修改地址</el-button>
            <br/>
            <el-button type="primary" size="small" @click="dialogFormVisible1=true">更换地址</el-button>
          </div>
        </div>
      </div>
      <div class="main">
        <h3>商品明细</h3>
        <div class="dark">
          <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column label="商品信息" width="300">
              <template slot-scope="scope">
                <img src="../../../static/img/product_small.png" class="pro-img" />
                <span>pos机pos机pos机pos机pos机pos机pos机pos机 pos机pos机</span>
              </template>
            </el-table-column>
            <el-table-column prop="price" label="商品单价">
            </el-table-column>
            <el-table-column prop="number" label="数量">
            </el-table-column>
            <el-table-column label="实付款">
              <template slot-scope="scope">
                <span style="color:#FF2736">{{scope.row.pay}}</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="right">
            <div>
              <label class="value">商品单价：</label>
              <div>￥20.00</div>
            </div>
            <div>
              <label class="value">商品件数：</label>
              <div>1件</div>
            </div>
            <div>
              <label class="value pay">实付款：</label>
              <div class="pay">￥20.00</div>
            </div>
            <el-button type="primary" size="small" @click="submit()">提交订单</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="修改地址" :visible.sync="dialogFormVisible" center>
      <el-form ref="form" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="所在地：" prop="selectedOptions">
          <el-cascader :options="CityInfo" v-model="form.selectedOptions" :change-on-select="true" :clearable="true" :filterable="true"
            @change="handleChange">
          </el-cascader>
          <!-- <span>所在地：{{form.city | myAddressCity}}{{form.erae|myAddressErae}}{{form.minerae|myAddressMinerae}}</span> -->
        </el-form-item>
        <el-form-item label="详细地址：" prop="address">
          <el-input type="textarea" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="收货人：" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式：" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="设置默认地址" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="更换地址" :visible.sync="dialogFormVisible1" center>
      <div v-for="(item,index) in 3" :key="index" class="card">
        <P>收货人：张三</P>
        <P>联系方式：15812455678</P>
        <P>收货地址：浙江省杭州市航海区7幢504号</P>
        <img src="../../../static/img/tick.png" class="tick-img" v-if="tick == index">
        <img src="../../../static/img/tick_no.png" class="tick-img" v-if="tick !== index" @click="tick = index">
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import qs from "qs";
  export default {
    data() {
      var checkselecte = (rule, value, callback) => {
        console.log(this.form.city)
        console.log(this.form.erae)
        console.log(this.form.minerae)
        if (this.form.city == '' || this.form.city == undefined) {
          callback(new Error("请选择省"));
        } else if (this.form.erae == '' || this.form.erae == undefined) {
          callback(new Error("请选择市"));
        } else if (this.form.minerae == '' || this.form.minerae == undefined) {
          callback(new Error("请选择区"));
        } else {
          callback();
        }
      };
      return {
        choose: 0,
        checked: true,
        num1: 1,
        tick:0,
        tableData: [{
          price: '￥68',
          number: 1,
          pay: '￥68',
        }],
        dialogFormVisible: false,
        dialogFormVisible1:false,
        /*数据源*/
        CityInfo: [], //地区数据
        form: {
          city: '',
          erae: '',
          minerae: '',
          selectedOptions: [], //地区筛选数组
          address: '',
          name: '',
          phone: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入收货人',
            trigger: 'blur'
          }, ],
          phone: [{
            required: true,
            message: '请输入联系电话',
            trigger: 'blur'
          }, ],
          address: [{
            required: true,
            message: '请输入详细地址',
            trigger: 'blur'
          }, ],
          selectedOptions: [{
            type: 'array',
            required: true,
            trigger: 'change',
            validator: checkselecte
          }],
        }
      }
    },
    mounted: function () {
      this.CityInfo = CityInfo;
      document.getElementsByTagName("body")[0].className = "add_bg";
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "add_bg");
    },
    computed: {

    },
    methods: {
      handleChange(index) {},
      submit() {
        this.$http
          .post("api/Web_POSMarket/POSDD?Token="+getCookie("token")+"&prodID="+window.location.href.split("id=")[1].split("&")[0]+"&count="+window.location.href.split("num=")[1],
            // qs.stringify({
            //   Token: getCookie("token"),
            //   count:window.location.href.split("num=")[1],
            //   prodID:window.location.href.split("id=")[1].split("&")[0],
            // })
          )
          .then(
            function (response) {
              var status = response.data.Status;
              if (status === 1) {
                
              } else if (status === 40001) {
                this.$message({
                  showClose: true,
                  type: "warning",
                  message: response.data.Result
                });
                setTimeout(() => {
                  this.$router.push({
                    path: "/Login"
                  });
                }, 1500);
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
                this.$notify.error({
                  title: "错误",
                  message: "错误：请检查网络"
              });
            }.bind(this)
          );
        // this.$router.push("/Finance/POSSupermarketSubmitOrder/id=" + window.location.href.split("id=")[1]);
      },
      handleChange(value) {
        this.form.city = this.form.selectedOptions[0];
        this.form.erae = this.form.selectedOptions[1]
        this.form.minerae = this.form.selectedOptions[2]
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    filters: {
      myAddressCity(value) {
        for (var y in CityInfo) {
          if (CityInfo[y].value == value) {
            return value = CityInfo[y].label
          }
        }
      },
      myAddressErae(value) {
        for (var y in CityInfo) {
          for (var z in CityInfo[y].children) {
            if (CityInfo[y].children[z].value == value && value != undefined) {
              return value = CityInfo[y].children[z].label;
            }
          }
        }
      },
      myAddressMinerae(value) {
        for (var y in CityInfo) {
          for (var z in CityInfo[y].children) {
            for (var i in CityInfo[y].children[z].children) {
              if (CityInfo[y].children[z].children[i].value == value && value != undefined) {
                return value = CityInfo[y].children[z].children[i].label
              }
            }
          }
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    background-color: #F5F5F5
  }

  .main {
    margin-top: 60px;
    background-color: #fff;
    margin-bottom: 20px;
  }

  .form-input {
    width: 50%;
  }

  h3 {
    padding: 20px;
    margin: 0;
  }

  .dark {
    padding: 20px;
    color: #333333;
    font-family: MicrosoftYaHei;
    border-top: 1px solid #EEEEEE;
    position: relative;
    line-height: 30px;
  }

  .btnbox {
    position: absolute;
    right: 50px;
    top: 20px;
  }

  .btnbox button {
    margin-top: 10px;
  }

  .main+.main {
    margin-top: 0;
  }

  .pro-img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }

  .right {
    text-align: right;
  }

  .value {
    width: 100px;
  }

  .right div div {
    width: 100px;
    display: inline-block;
  }

  label.pay {
    font-size: 17px;
    color: #333333;
    font-weight: 600;
  }

  div.pay {
    color: #FF2736;
    font-size: 17px;
    font-weight: 600;
  }
  .card{
    border-bottom: 1px solid #EEEEEE;
    margin-top: 10px;
    position: relative;
  }
  .tick-img{
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
  }

</style>
