<template>
  <div id="app">
    <h3>
      收货地址
      <span>
        <i class="el-icon-circle-plus" @click="dialogFormVisible=true">新增地址</i>
      </span>
    </h3>
    <div class="box">
      <div class="list" v-for="(item,index) in list" :key="index">
        <p>收货人：{{item.Name}}</p>
        <p>联系方式：{{item.Phone}}</p>
        <p>收货地址：{{item.Address}}</p>
        <div class="btnbox">
          <span @click="dialogFormVisible2=true">修改</span>|
          <span>删除</span>
          <el-button type="primary" size="small">默认地址</el-button>
        </div>
      </div>
    </div>
    <div class="block">
      <el-pagination :page-count="pageCount" layout="prev, pager, next" :current-page="currentPage">
      </el-pagination>
    </div>
    <el-dialog title="新增地址" :visible.sync="dialogFormVisible" center>
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
    <el-dialog title="修改地址" :visible.sync="dialogFormVisible2" center>
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
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
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
        list: [{
          Name: '张三',
          Phone: '18258773565',
          Address: '浙江省杭州市凯鑫大道1000号'
        }, {
          Name: '张三',
          Phone: '18258773565',
          Address: '浙江省杭州市凯鑫大道1000号'
        }, {
          Name: '张三',
          Phone: '18258773565',
          Address: '浙江省杭州市凯鑫大道1000号'
        }],
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
        },
        pageIndex: 1,
        pageCount: 10,
        dialogFormVisible: false,
        dialogFormVisible2:false,
        /*数据源*/
        CityInfo: [], //地区数据
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
      currentPage: function () {
        return this.pageIndex
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.filters.pageIndex = val;
      },
      handleChange(value) {
        this.form.city = this.form.selectedOptions[0];
        this.form.erae = this.form.selectedOptions[1]
        this.form.minerae = this.form.selectedOptions[2]
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

  .box {
    padding: 0 30px;
  }

  .el-icon-circle-plus:before {
    color: #CEAA70;
  }

  h3 span {
    color: #CEAA70;
    float: right;
    font-size: 15px;
    cursor: pointer;
  }

  .list {
    border: 1px solid #EEEEEE;
    padding: 20px;
    font-size: 15px;
    position: relative;
  }

  .btnbox {
    position: absolute;
    right: 50px;
    top: 65px;
    color: #CEAA70;
  }

  .btnbox button {
    margin-left: 20px;
  }

  .btnbox span {
    cursor: pointer;
  }

  .block {
    text-align: center;
    margin-top: 50px;
    padding-bottom: 80px;
    width: 100%;
  }

</style>
