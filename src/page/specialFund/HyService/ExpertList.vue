<template>
  <div class="ExpertList">
    <div class="ExpertList-l" :class="{addClass1:isCollapse == true}" id="ExpertList-l-id">
      <NavLeft></NavLeft>
    </div>
    <div class="ExpertList-r" :class="{addClass2:isCollapse == true}">
      <HeaderTop></HeaderTop>
      <div class="ExpertList-bd">
        <!-- 面包屑 -->
        <CommonTop :parentToChild="showTitle"></CommonTop>
        <!-- 年份选择 -->
        <div class="ExpertList-bd-nav">
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
        <div class="ExpertList-bd-table">
          <div class="ExpertList-bd-table-A">
            <el-table
              :data="tableData"
              border
              :header-cell-style="{'color':'#000','font-weight': '700'}"
              style="width: 100%"
            >
              <el-table-column prop="id" label="ID" align="center" width="50px"></el-table-column>
              <el-table-column prop="pname" label="项目名称"></el-table-column>
              <el-table-column prop="ptitle" label="申请单位"></el-table-column>
              <el-table-column label="符合(/人数)" align="center" width="100px">
                <template slot-scope="scope">
                  <span>{{getPersonNum(scope.row.pid,1)}}</span>
                </template>
              </el-table-column>
              <el-table-column label="不符合(/人数)" align="center" width="110px">
                <template slot-scope="scope">
                  <span>{{getPersonNum(scope.row.pid,0)}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="不确定(/人数)" width="110px">
                <template slot-scope="scope">
                  <span>{{getPersonNum(scope.row.pid,2)}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="综合评选" width="80px">
                <template slot-scope="scope">
                  <span>{{comSelect(scope.row.pid)}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="num" align="center" label="参评人数" width="80px"></el-table-column>
              <el-table-column align="center" label="初审结果" width="80px">
                <template slot-scope="scope">
                  <span>{{reviewResult(scope.row.pid)}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" label="操作" width="120px">
                <template slot-scope="scope">
                  <el-dropdown split-button size="small" @command="handleCommand">
                    操作
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        v-if="reviewResult(scope.row.pid)=='通过'?false:true"
                        :command="{value:1,pid:scope.row.pid}"
                      >通过初审</el-dropdown-item>
                      <el-dropdown-item
                        v-if="reviewResult(scope.row.pid)=='不通过'?false:true"
                        :command="{value:0,pid:scope.row.pid}"
                      >不通过</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <!--分页-->
        <div class="ExpertSum_page">
          <div class="block">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="15"
              layout="total, prev, pager, next, jumper"
              :total="totalCount"
            ></el-pagination>
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

import { expertListFirst, expertpass, expertnopass } from "@/common/api.js";
export default {
  name: "ExpertList",
  data() {
    return {
      isCollapse: false,
      //   面包屑
      showTitle: "ExpertList",
      //   年份
      chooseYear: [],
      value: new Date().getFullYear(),
      totalCount: 0,
      currentPage: 1,
      pageSize: 15,
      tableData: [],
      resData: {}
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
        id: command.pid
      };
      console.log(command, "command,pid");

      switch (command.value) {
        case 1:
          expertpass("expertpass", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {
                // 更新
                that.getData();
                console.log(res.data.data, "command");
              }
            })
            .catch(function(error) {});
          break;
        case 0:
          expertnopass("expertnopass", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {
                // 更新
                that.getData();
                console.log(res.data.data, "command");
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
        year: that.value,
        page: that.currentPage
      };
      expertListFirst("expertlist", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            that.tableData = res.data.data.data.data;
            that.resData = res.data.data;
            that.totalCount = res.data.data.data.total;
            that.pageSize = res.data.data.per_page;
          }
        })
        .catch(function(error) {});
    },
    // 根据pid 获取符合人数
    getPersonNum: function(pid, status) {
      let that = this;
      //   遍历yesarr 将与pid符合的key的value返回
      let a = 0; //声明变量接收遍历符合的人数
      let obj = {};
      // 根据status判断不符合/符合/不确定  人数
      switch (
        status //status  0--不符合  1---符合  2---不确定
      ) {
        case 0:
          obj = that.resData.noarr;
          break;
        case 1:
          obj = that.resData.yesarr;
          break;
        case 2:
          obj = that.resData.nosurearr;
          break;
      }
      Object.keys(obj).forEach(e => {
        if (e == pid) {
          a = obj[e];
        }
      });
      // forEach内的return给了forEach本身，方法调用时接受不到return值  ------  要在函数自身return遍历符合的人数 方法调用时才可以接受到return值
      return a;
    },
    // 综合评选
    comSelect(pid) {
      let that = this;
      let noarr = that.getPersonNum(pid, 0);
      let yesarr = that.getPersonNum(pid, 1);
      let nosurearr = that.getPersonNum(pid, 2);
      if (yesarr > noarr && yesarr > nosurearr) {
        return "符合";
      } else {
        return "待定";
      }
    },
    // 初审结果
    reviewResult(pid) {
      let that = this;
      let hy_arr = that.resData.hy_arr;
      //声明变量接收遍历结果
      let res = "--";
      Object.keys(hy_arr).forEach(e => {
        if (e == pid) {
          switch (hy_arr[e]) {
            case 5:
              res = "通过";
              break;
            case 4:
              res = "不通过";
              break;
            default:
              res = "--";
              break;
          }
        }
      });
      return res;
    },
    // 分页
    handleCurrentChange(val) {
      let that = this;
      that.currentPage = val;
      that.getData();
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
      location.href = serviceUrl + "cexport?year=" + that.value;
    }
  },
  watch: {}
};
</script>

<style  lang = scss scoped>
.ExpertList {
  overflow: hidden;
  background-color: #ecf0f5;
  z-index: 800;
  min-height: 100vh;
  .ExpertList-l {
    float: left;
    width: 12%;
  }
  .addClass1 {
    width: 7%;
  }
  .ExpertList-r {
    float: left;
    width: 88%;
    .ExpertList-bd {
      padding: 10px 30px;
      .ExpertList-bd-nav {
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
      .ExpertList-bd-table {
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
        .ExpertList-bd-table-A {
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