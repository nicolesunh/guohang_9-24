<template>
  <div class="Zjpf">
    <div class="Zjpf-l" :class="{addClass1:isCollapse == true}" id="Zjpf-l-id">
      <NavLeft></NavLeft>
    </div>
    <div class="Zjpf-r" :class="{addClass2:isCollapse == true}">
      <HeaderTop></HeaderTop>
      <div class="Zjpf-bd">
        <CommonTop :parentToChild="showTitle"></CommonTop>

        <!-- 年份选择 -->
        <div class="Zjpf-bd-nav">
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
        <div class="Zjpf-bd-table">
          <div class="Zjpf-bd-table-A">
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              :header-cell-style="{'color':'#000','font-weight': '700'}"
            >
              <el-table-column prop="uid" label="ID"></el-table-column>
              <el-table-column prop="f_name" label="专家姓名"></el-table-column>

              <el-table-column align="center" label="操作" width="150px">
                <template slot-scope="scope">
                  <el-button @click="goDetail(scope.row.uid,value)">查看</el-button>
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
import { Zjpf } from "@/common/api.js";

export default {
  name: "Zjpf",
  data() {
    return {
      isCollapse: false,
      showTitle: "Zjpf",
      //   年份
      chooseYear: [],
      value: new Date().getFullYear(),
      tableData: [
        /* {
                        ID: '',
                        zjxm:"",
                        cz:""
                    },*/
      ]
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
    handleClick() {
      alert("button click");
    },
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
        year: that.value
      };
      Zjpf("zjpf", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            that.tableData = res.data.data;
            that.resData = res.data.data;
          }
        })
        .catch(function(error) {});
    },

    // 查看
    goDetail(id, year) {
      // p_detail
      location.href = serviceUrl + "p_detail?id=" + id + "&year=" + year;
    }
  },
  watch: {}
};
</script>

<style  lang = scss scoped>
.Zjpf {
  overflow: hidden;
  background-color: #ecf0f5;
  z-index: 800;
  min-height: 100vh;
  .Zjpf-l {
    float: left;
    width: 12%;
  }
  .addClass1 {
    width: 7%;
  }
  .Zjpf-r {
    float: left;
    width: 88%;
    .Zjpf-bd {
      padding: 10px 30px;
      .Zjpf-bd-title {
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
      .Zjpf-bd-nav {
        .search {
          margin-right: 15px;
          margin-left: 5px;
          font-size: 16px;
        }
      }
      .Zjpf-bd-table {
        margin-top: 15px;
        /* min-height: 300px; */
        border-radius: 3px;
        background: #ffffff;
        border-top: 3px solid #d2d6de;
        margin-bottom: 20px;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        .Zjpf-bd-table-A {
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