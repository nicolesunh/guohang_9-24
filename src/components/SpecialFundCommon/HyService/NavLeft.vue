<template>
  <div class="NavLeft">
    <div class="NavLeftTop">管理后台</div>

    <div class="NavLeftUserName">
      <div class="addClass3">
        <img src="../../../assets/img/user2.jpg" alt />
        <span class="userInf">11111</span>
      </div>
    </div>
    <div class="NavLeftTitle">
      <span class="addClass2">主菜单</span>
    </div>
    <div class="NavLeft-all">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#222d32"
        text-color="#b8c7ce"
        active-text-color="#409EFF"
        @select="handleSelect"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-tickets" style="color: #ffffff"></i>
            <span>服务创新</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/p/fund/public/hylist">申请列表</el-menu-item>
            <el-menu-item index="/p/fund/public/expertlist">专家初审列表汇总</el-menu-item>
            <el-menu-item index="/p/fund/public/expertsum">专家签名汇总表</el-menu-item>
            <el-menu-item index="/p/fund/public/zjpf">专家签名评分列表</el-menu-item>
            <el-menu-item index="/p/fund/public/finallist">专家评分列表汇总</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-tickets" style="color: #ffffff"></i>
            <span>集疏运管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/specialFund">集疏运</el-menu-item>
            <el-menu-item index="/p/fund/public/application">所有申请</el-menu-item>
            <el-menu-item index="/p/fund/public/userAll">用户中心</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavLeft",
  data() {
    return {
    };
  },
  created: function() {
   
  },
  mounted() {

  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    handleSelect(key, keyPath) {},
    isType() {
      this.url = this.$route.path;
    }
  },
  computed: {
  
  },
  watch: {
 
  }
};
</script>

<style  lang = scss scoped>
.NavLeft {
  height: calc(100% );
  /* min-width: 170px; */
  .NavLeftTop {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #ffffff;
    background-color: #367fa9;
    border-bottom: 0 solid transparent;
    font-weight: 700;
    font-size: 18px;
  }
  .NavLeftUserName {
    overflow: hidden;
    background: #222d32;
    padding: 10px 0;
    div:nth-child(1) {
      width: 42%;
      height: 50px;
      float: left;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-left: 25px;
        margin-top: 5px;
      }
    }
    .addClass3 {
      width: 100% !important;
      img {
        margin-left: 12px !important;
        vertical-align: middle;
      }
      .userInf {
        display: inline-block;
        margin-left: 12px !important;
        height: 45px;
        line-height: 45px;

        color: #fff;
      }
    }
    div:nth-child(2) {
      width: 58%;
      height: 50px;
      line-height: 50px;
      float: right;
      font-weight: 600;
      color: #ffffff;
      text-align: center;
    }
    .addClass1 {
      display: none;
    }
  }
  .NavLeftTitle {
    color: #4b646f;
    background: #1a2226;
    height: 36px;
    line-height: 36px;
    span {
      margin-left: 25px;
    }
    .addClass2 {
      margin-left: 15px;
    }
  }
  .NavLeft-all {
     height: 100vh;
    background: #222d32;
    /deep/ .el-menu {
      border-right: none;
      background: #2c3b41;
      padding: 0;
      .el-submenu__title {
        color: #ffffff !important;
      }
      .el-menu-item-group__title {
        display: none;
      }
      .el-submenu__icon-arrow {
        display: none;
      }
    }
    /deep/ .el-menu--collapse {
      width: 100%;
      border-right: none;
    }
    /deep/ .el-submenu .el-menu-item {
      padding: 0 !important;
      padding-left: 48px !important;
      margin: 0 !important;
      min-width: 0;
      color: #8aa4af;
      font-size: 12px;
    }
  }
}
</style>