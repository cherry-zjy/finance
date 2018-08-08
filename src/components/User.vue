<template>
  <div id="app">
    <div class="container">
      <div class="main">
        <!-- <el-container> -->
        <div class="user-nav">
          <img src="../../static/img/apxq_head_portrait@2x.png" class="user-icon">
          <P class="user-name">zjy</P>
          <div v-for="(item,index) in menulist" :key="index">
            <a @click.stop='navtourl(index,item.path)' :class="{active:current==index}">{{item.name}}</a>
          </div>
        </div>
        <!-- 右侧路由信息 -->
        <el-container class="right">
          <router-view></router-view>
        </el-container>
        <!-- </el-container> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        iscloseNav: false,
        current:0,
        menulist:[{
          name:"个人信息",
          path:"/User/Info"
        },{
          name:"我的订单",
          path:"/User/Info"
        },{
          name:"POS超市订单",
          path:"/User/Info"
        },{
          name:"收货地址",
          path:"/User/Info"
        },{
          name:"推广管理",
          path:"/User/Info"
        },{
          name:"专属推荐人",
          path:"/User/Info"
        }]
      }
    },
    mounted() {
      document.getElementsByTagName("body")[0].className = "add_bg";
      var tt = this;
      if (getCookie("token")) {
        console.log()
      } else {
        this.$message({
          showClose: true,
          type: "warning",
          message: "请先登陆"
        });
        // setTimeout(() => {
        //   this.$router.push({
        //     path: "/login"
        //   });
        // }, 1500);
      }
    },
    beforeDestroy: function () {
      document.body.removeAttribute("class", "add_bg");
    },
    computed: {

    },
    methods: {
      // 个人中心  修改密码
      // 退出
      logout() {
        let that = this;
        this.$confirm("确认退出吗?", "提示", {
            confirmButtonClass: "el-button--warning"
          })
          .then(() => {
            //确认
            that.loading = true;
            delCookie("token");
            this.$router.push("/login");
          })
          .catch(() => {});
      },
      navtourl(index,path){
        this.current=index;
        this.$router.push(path);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    margin-top: 60px;
    /* background-color: #fff; */
    margin-bottom: 60px;
    position: relative;
  }

  h3 {
    text-align: center;
  }

  .main p {
    line-height: 40px;
  }

  .right {
    margin-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
    background-color: #fff;
    max-width: 100%;
  }

  .user-nav {
    width: 240px;
    position: absolute;
    top: 0;
    bottom: 0;
    transition: padding-top .3s;
    background-color: #fff;
    text-align: center;
  }

  @media (min-width: 768px) {
    .user-nav {
      min-height: 750px;
    }
    .right {
      min-height: 750px;
    }
  }

  @media (max-width: 768px) {
    .user-nav {
      width: 100%;
      position: static;
      margin-top: 0;

    }
    .right {
      margin-left: 0;
      margin-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @media (max-width: 1140px) {
    .container {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }
  }

  .container {
    padding: 0;
  }
  .user-icon{
    margin-top: 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%
  }
  .user-name{
    font-size: 16px;
    margin-bottom: 30px;
  }
  .user-nav div{
    line-height: 40px;
    
  }
  .user-nav div a{
    color: #333333;
  }
  .user-nav div a.active{
    color: #CEAA70;
  }

</style>
