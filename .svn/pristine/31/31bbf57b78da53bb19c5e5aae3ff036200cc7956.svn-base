<template>
  <div class="UserListAllList">
    <div class="UserListAllList-title">
      <!-- 用户中心 -->
    </div>
    <div class="UserListAllList-table">
      <el-table
        :data="tableData"
        border
        :header-cell-style="{'color':'#000','font-weight': '700'}"
        style="width: 100%"
      >
        <el-table-column prop="u_loginname" label="登录名" align="center"></el-table-column>
        <el-table-column label="单位名称" align="center">
          <template slot-scope="scope">
            <span class="u_name" @click="goUserDetail(scope.row.id)">{{scope.row.u_name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="meta_value" label="角色" align="center"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getType } from "@/common/api.js";
export default {
  name: "UserListAllList2",
  data() {
    return {
      tableData: []
    };
  },
  //   components :{
  //       UserDetail:UserDetail,
  //  },
  mounted: function() {
    this.init();
  },
  methods: {
    // 获取数据
    init() {
      var _that = this;
      getType()
        .then(function(res) {
          if (res.data.code == 200) {
            _that.tableData = res.data.data;
          }
        })
        .catch(function(error) {});
    },
    goUserDetail(id) {
      this.$router.push(`/p/fund/public/userAllDetail/${id}`);
    }
  }
};
</script>

<style  lang = scss scoped>
.UserListAllList {
  padding: 0 30px 30px 30px;
  .UserListAllList-title {
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-size: 14px;
    /* color: #2258c2; */
  }
  .UserListAllList-table {
    margin-top: 10px;
    .u_name {
      cursor: pointer;
      color: #2258c2;
    }
  }
}
/* .fixpage{
    position:fixed;
    bottom:5%;
    left:14%;
  } */
</style>
