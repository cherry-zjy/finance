<template>
  <div id="app">
    <h3>个人信息</h3>
    <div class="Infobox">
      <label class="info-title">头像：</label>
      <img :src="Info.Image" class="info-icon">
    </div>
    <div class="Infobox">
      <label class="info-title">昵称：</label>
      <span v-if="!edit">{{Info.NickName}}</span>
      <el-input v-model="Info.NickName" v-if="edit"></el-input>
    </div>
    <div class="Infobox">
      <label class="info-title">性别：</label>
      <span v-if="!edit&&Info.Sex==0">男</span>
      <span v-if="!edit&&Info.Sex==1">女</span>
      <el-radio-group v-model="Info.Sex" v-if="edit">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </div>
    <div class="Infobox">
      <label class="info-title">所在地：</label>
      <span v-if="!edit">{{InfoAddress}}</span>
      <el-input v-model="Info.Address" v-if="edit"></el-input>
    </div>
    <div class="Infobox">
      <label class="info-title">身份情况：</label>
      <span v-if="!edit">{{Info.IDType | IDType}}</span>
      <el-input v-model="Info.Type" v-if="edit"></el-input>
    </div>
    <div class="Infobox">
      <label class="info-title">是否有信用卡：</label>
      <span v-if="!edit">{{Info.IsCreditCard | boolean}}</span>
      <el-radio-group v-model="Info.IsCreditCard" v-if="edit">
        <el-radio label="是"></el-radio>
        <el-radio label="否"></el-radio>
      </el-radio-group>
    </div>
    <div class="Infobox">
      <label class="info-title">是否有车：</label>
      <span v-if="!edit">{{Info.IsHaveCar | boolean}}</span>
      <el-radio-group v-model="Info.IsHaveCar" v-if="edit">
        <el-radio label="是"></el-radio>
        <el-radio label="否"></el-radio>
      </el-radio-group>
    </div>
    <div class="Infobox">
      <label class="info-title">微信号：</label>
      <span v-if="!edit">{{Info.Wxin}}</span>
      <el-input v-model="Info.Wechat" v-if="edit"></el-input>
    </div>
    <div class="Infobox">
      <label class="info-title">二维码：</label>
      <img :src="Info.Logo" class="info-qrcode">
    </div>
    <div class="Infobox">
      <label class="info-title">实名认证：</label>
      <span class="red" @click="iden()">{{Info.Authentication | boolean}}</span>
    </div>
    <div class="btnbox">
      <el-button type="primary" @click="edit=true" v-if="!edit">编辑</el-button>
      <el-button @click="edit=false" v-if="edit">取消</el-button>
      <el-button type="primary" @click="edit=false" v-if="edit">保存</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Info: {},
        edit: false,
        Address: [],
        InfoAddress:''
      }
    },
    mounted: function () {
      this.Address = Address
      this.getInfo()
      document.getElementsByTagName("body")[0].className = "add_bg";
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "add_bg");
    },
    computed: {

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
          .get("api/Web_UserInfo/GetUserMessage", {
            params: {
              Token: getCookie("token"),
            }
          })
          .then(
            function (response) {
              loading.close();
              var status = response.data.Status;
              if (status === 1) {
                this.Info = response.data.Result;
                this.getAdd()
              } else if (status === 40001) {
                this.$message({
                  showClose: true,
                  type: "warning",
                  message: response.data.Result
                });
                setTimeout(() => {
                  this.$router.push({
                    path: "/login"
                  });
                }, 1500);
              } else {
                loading.close();
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
      getAdd() {
        this.$http
          .get("api/Web_UserInfo/GetProvinceCityRegion", {})
          .then(
            function (response) {
              var status = response.data.Status;
              if (status === 1) {
                this.Address = response.data.Result;
                this.addfilters(this.Info.ProvinceID, this.Info.CityID,
                  this.Info.RegionID)
              } else if (status === 40001) {
                this.$message({
                  showClose: true,
                  type: "warning",
                  message: response.data.Result
                });
                setTimeout(() => {
                  this.$router.push({
                    path: "/login"
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
              console.log(error)
              this.$notify.error({
                title: "错误",
                message: "错误：请检查网络"
              });
            }.bind(this)
          );
      },
      iden() {
        this.$router.push("/User/Certification");
      },
      addfilters(Province, City, Region) {
        // console.log(this.Address.length)
        for (var y = 0; y < this.Address.length; y++) {
          // console.log(this.Address[y])
          for (var z = 0; z < this.Address[y].length; z++) {
            // console.log(this.Address[y][z].RegionID)
            if (this.Address[y][z].RegionID == Region && Region != undefined) {
              
              this.InfoAddress = this.Address[y][z].ProvinceName + this.Address[y][z].CityName + this.Address[y][z].RegionName
            console.log(this.InfoAddress)
            }
          }
        }
      }
    },
    filters: {
      IDType(value) {
        if (value == 0) {
          return value = "上班族"
        } else if (value == 1) {
          return value = "个体户"
        } else if (value == 2) {
          return value = "自由职业者"
        } else if (value == 3) {
          return value = "企业主"
        }
      },
      boolean(value) {
        if (value) {
          return value = "是"
        } else {
          return value = "否"
        }
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

  .Infobox {
    padding: 10px 30px;
  }

  .Infobox label.info-title {
    width: 120px;
    display: inline-block;
  }

  .info-icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .Infobox img {
    vertical-align: middle;
  }

  .info-qrcode {
    width: 100px;
    height: 100px;
  }

  .Infobox .red {
    color: #FF2736;
    cursor: pointer;
  }

  .btnbox {
    text-align: center;
    margin-top: 20px;
    padding-bottom: 20px;
  }

  .Infobox .el-input {
    display: inline-block;
    width: auto;
  }

  .Infobox .el-input input {
    display: inline-block;
    width: auto;
  }

</style>
