<template>
  <div class="FinalList">
    <div class="FinalList-l" id="FinalList-l-id">
      <NavLeft></NavLeft>
    </div>
    <div class="FinalList-r">
      <HeaderTop></HeaderTop>
      <div class="FinalList-bd">
        <!-- 面包屑 -->
        <CommonTop :parentToChild="showTitle"></CommonTop>
        <!-- 年份选择 -->
        <div class="FinalList-bd-nav">
          <span class="search">年份选择</span>
          <el-select
            v-model="value"
            size="small"
            placeholder="请选择"
            style="width: 100px"
            @change="changeYear"
          >
            <el-option v-for="(item,index) in chooseYear" :key="index" :value="item"></el-option>
          </el-select>
          <div class="print" @click="print">
            <img src="../../../assets/img/print.png" alt />
          </div>
        </div>
        <!--表格-->
        <div class="FinalList-bd-table">
          <div class="FinalList-bd-table-A">
            <el-table
              :data="tableData"
              border
              :header-cell-style="{'color':'#000','font-weight': '700'}"
              style="width: 100%"
            >
              <el-table-column prop="pname" label="项目名称"></el-table-column>
              <el-table-column prop="ptitle" label="申请单位"></el-table-column>
              <el-table-column prop="zongfen" label="总分" align="center" width="70px"></el-table-column>

              <el-table-column
                v-for="(item,index) in name_arr"
                :key="index"
                :label="item.f_name"
                align="center"
                width="70px"
              >
                <template slot-scope="scope">
                  <span>{{item.zongfen}}</span>
                </template>
              </el-table-column>

              <el-table-column prop="addtime" label="时间" align="center" width="200px"></el-table-column>
              <el-table-column align="center" label="操作" width="120px">
                <template slot-scope="scope">
                  <el-dropdown split-button size="small" @command="handleCommand">
                    操作
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item :command="{value:2,pid:scope.row.pid}">查看专家评审明细</el-dropdown-item>
                      <el-dropdown-item :command="{value:1,pid:scope.row.pid}">通过</el-dropdown-item>
                      <el-dropdown-item :command="{value:0,pid:scope.row.pid}">复议</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../../components/SpecialFundCommon/HyService/HeaderTop";
import NavLeft from "../../../components/SpecialFundCommon/HyService/NavLeft";
import CommonTop from "../../../components/SpecialFundCommon/HyService/CommonTop";

import { finalList, zhongshenpass, reconsider } from "@/common/api.js";
export default {
  name: "FinalList",
  data() {
    return {
      isCollapse: false,
      //   面包屑
      showTitle: "FinalList",
      //   年份
      chooseYear: [],
      value: new Date().getFullYear(),
      tableData: [],
      name_arr: []
    };
  },
  components: {
    HeaderTop: HeaderTop,
    NavLeft: NavLeft,
    CommonTop: CommonTop
  },
  beforeCreate() {},
  created: function() {
    this.getYear();
    this.getData();
  },

  computed: {},
  methods: {
    // 操作
    handleCommand(command) {
      let that = this;
      // 参数
      let datePrams = {
        pid: command.pid
      };
      console.log(command, "command,pid");

      switch (command.value) {
        case 1:
          // 通过
          zhongshenpass("zhongshenpass", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {
                
                that.$message({
                  message: "操作成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {});
          break;
        case 0:
          // 复议
          reconsider("reconsider", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {
                that.$message({
                  message: "操作成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {});
          break;
      }
    },
    //年份选择
    changeYear: function() {
      this.getData();
    },
    //获取数据
    getData: function() {
      let that = this;
      // 参数
      let datePrams = {
        year: that.value
      };
      finalList("finallist", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            that.tableData = res.data.data;
            that.name_arr = res.data.name_arr;
            that.name_arr.map(item => {
              item.zongfen = item.zongfen.toString();
            });
            console.log(res.data.data, "res.data.data");
          }
        })
        .catch(function(error) {});
    },
    //计算年份
    getYear: function() {
      let that = this;
      let year = new Date().getFullYear();
      for (let i = 2017; i <= year; i++) {
        that.chooseYear.unshift(i);
      }
    },
    print() {
      let that = this;
      // 导出直接跳链接
      location.href = serviceUrl + "fprint?year=" + that.value;
    }
  },
  watch: {}
};
</script>

<style  lang = scss scoped>
.FinalList {
  overflow: hidden;
  background-color: #ecf0f5;
  z-index: 800;
  min-height: 100vh;
  .FinalList-l {
    float: left;
    width: 12%;
  }
  .addClass1 {
    width: 7%;
  }
  .FinalList-r {
    float: left;
    width: 88%;
    .FinalList-bd {
      padding: 10px 30px;
      .FinalList-bd-nav {
        position: relative;
        margin-bottom: 20px;
        .search {
          margin-right: 15px;
          margin-left: 5px;
          font-size: 16px;
        }
        .print {
          position: absolute;
          top: 0px;
          right: 20px;
        }
      }
      .FinalList-bd-table {
        margin-top: 15px;
        /* min-height: 300px; */
        border-radius: 3px;
        background: #ffffff;
        border-top: 3px solid #d2d6de;
        margin-bottom: 20px;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        padding: 10px;
        box-sizing: border-box;
        .FinalList-bd-table-A {
          padding: 10px;
          /deep/ .el-table {
            th {
              padding: 5px 0;
            }
          }
        }
      }
      .ExpertList_page {
        margin-top: 30px;
      }
    }
  }
  .addClass2 {
    width: 93%;
  }
}
</style>