<template>
  <div class="ExpertSum">
    <div class="ExpertSum-l" :class="{addClass1:isCollapse == true}" id="ExpertSum-l-id">
      <NavLeft></NavLeft>
    </div>
    <div class="ExpertSum-r" :class="{addClass2:isCollapse == true}">
      <HeaderTop></HeaderTop>
      <div class="ExpertSum-bd">
        <CommonTop :parentToChild="showTitle"></CommonTop>
        <div class="ExpertSum-bd-title" @click="downLoad(value)">
          <span>专家初审明细查看</span>
        </div>
        <!-- 年份选择 -->
        <div class="ExpertSum-bd-nav">
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
        </div>
        <!--表格-->
        <div class="ExpertSum-bd-table">
          <div class="ExpertSum-bd-table-A">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              :header-cell-style="{'color':'#000','font-weight': '700'}"
            >
              <el-table-column prop="id" label="ID"></el-table-column>
              <el-table-column prop="e_name" label="专家姓名"></el-table-column>

              <el-table-column align="center" label="操作" width="150px">
                <template slot-scope="scope">
                  <el-button @click="goDetail(scope.row.uid,value)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <!--分页-->
        <!--分页  暂弃 -->
        <!-- <div class="ExpertSum_page">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../../components/SpecialFundCommon/HyService/HeaderTop";
import NavLeft from "../../../components/SpecialFundCommon/HyService/NavLeft";
import CommonTop from "../../../components/SpecialFundCommon/HyService/CommonTop";
import { expertsum } from "@/common/api.js";

export default {
  name: "ExpertSum",
  data() {
    return {
      isCollapse: false,
      showTitle: "ExpertSum",
      //   年份
      chooseYear: [],
      value: new Date().getFullYear(),
      tableData: [
      ],
      // 分页 暂弃
      // currentPage: 1,
      // pageSize: null,
      // totalCount: 0
    };
  },
  components: {
    HeaderTop: HeaderTop,
    NavLeft: NavLeft,
    CommonTop: CommonTop
  },
  created: function() {
    this.getYear();
    this.getData();
  },

  computed: {},
  methods: {
    //年份选择
    changeYear: function() {
      this.getData();
    },
    //计算年份
    getYear: function() {
      let that = this;
      let year = new Date().getFullYear();
      for (let i = 2017; i <= year; i++) {
        that.chooseYear.unshift(i);
      }
    },
    //获取数据
    getData: function() {
      let that = this;
      // 参数
      let datePrams = {
        year: that.value,
        page: that.currentPage
      };
      expertsum("expertsum", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            that.tableData = res.data.data.data;
            that.resData = res.data.data;
            that.totalCount = res.data.data.total;
            console.log(res.data.data.data, "that.totalCount");
          }
        })
        .catch(function(error) {});
    },
    //专家初审明细查看 下载
    downLoad(year) {
       location.href = serviceUrl + "c_yu?year=" + year;
     
    },

    // 查看
    goDetail(id, year) {
      location.href = serviceUrl + "sumdetail?id=" + id + "&year=" + year;
   
    },
    // 分页暂弃
    // handleCurrentChange(val) {
    //   this.currentPage = val;

    //   this.getData();
    // }
  },
  watch: {
    getSearchKey: {
      handler(newValue) {
        //当词条改变时执行事件
        this.isCollapse = newValue;
      }
    }
  }
};
</script>

<style  lang = scss scoped>
.ExpertSum {
  overflow: hidden;
  background-color: #ecf0f5;
  z-index: 800;
  min-height: 100vh;
  .ExpertSum-l {
    float: left;
    width: 12%;
  }
  .addClass1 {
    width: 7%;
  }
  .ExpertSum-r {
    float: left;
    width: 88%;
    .ExpertSum-bd {
      padding: 10px 30px;
      .ExpertSum-bd-title {
        height: 35px;
        line-height: 35px;
        margin-bottom: 10px;
        span {
          font-size: 17px;
          cursor: pointer;
        }
        span:hover {
          color: silver;
        }
      }
      .ExpertSum-bd-nav {
        .search {
          margin-right: 15px;
          margin-left: 5px;
          font-size: 16px;
        }
      }
      .ExpertSum-bd-table {
        margin-top: 15px;
        /* min-height: 300px; */
        border-radius: 3px;
        background: #ffffff;
        border-top: 3px solid #d2d6de;
        margin-bottom: 20px;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        .ExpertSum-bd-table-A {
          padding: 10px;
          /deep/ .el-table {
            th {
              padding: 5px 0;
            }
          }
        }
      }
      .ExpertSum_page {
        margin-top: 30px;
      }
    }
  }
  .addClass2 {
    width: 93%;
  }
}
</style>