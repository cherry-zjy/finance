<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">金融服务</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">帮助说明</template>
    <el-menu-item index="3-1">选项1</el-menu-item>
    <el-menu-item index="3-2">选项2</el-menu-item>
    <el-menu-item index="3-3">选项3</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">资讯服务</template>
    <el-menu-item index="4-1">选项1</el-menu-item>
    <el-menu-item index="4-2">选项2</el-menu-item>
    <el-menu-item index="4-3">选项3</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
    <template slot="title">查询服务</template>
    <el-menu-item index="5-1">选项1</el-menu-item>
    <el-menu-item index="5-2">选项2</el-menu-item>
    <el-menu-item index="5-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">发现</el-menu-item>
  <img src="../../static/img/apxq_head_portrait@2x.png" class="menu-icon">
</el-menu>

</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu--horizontal{
  float: right;
}
.menu-icon{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
