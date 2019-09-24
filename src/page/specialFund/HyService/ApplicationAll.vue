<template>
  <div class="ApplicationAll">
    <div class="ApplicationAll-l" :class="{addClass1:isCollapse == true}" id="FinalList-l-id">
      <NavLeft></NavLeft>
    </div>
    <div class="ApplicationAll-r" :class="{addClass2:isCollapse == true}">
      <HeaderTop></HeaderTop>
      <div>
        <div class="AllApplicationsList-title">
          <el-button
            size="small"
            class="AllApplicationsList-title-button"
            @click="isShowAll=true"
          >所有申请</el-button>

          <el-button
            size="small"
            class="AllApplicationsList-title-button"
            @click="isShowAll=false"
          >核对申请</el-button>
          <!-- 业务期间  -->
          <div class="selectDate" v-if="isShowAll">
            <el-select v-model="value" placeholder="请选择" @focus="date" @change="dateChange">
              <el-option v-for="(item,index) in dateArr" :key="index" :value="item"></el-option>
            </el-select>
          </div>
        </div>
        <AllApplicationsList2 ref="AllApplicationsList2" v-if="isShowAll"></AllApplicationsList2>
        <checkApplication v-if="!isShowAll"></checkApplication>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../../components/SpecialFundCommon/HyService/HeaderTop";
import NavLeft from "../../../components/SpecialFundCommon/HyService/NavLeft";
import AllApplicationsList2 from "../../../components/SpecialFundCommon/HyService/AllApplicationsList2";
import checkApplication from "../../../components/SpecialFundCommon/HyService/checkApplication";

import { requestTable } from "@/common/api.js";
export default {
  name: "ApplicationAll",
  data() {
    return {
      // 周期
      dateArr: [],
      //   select
      value: "2017-01-01--2017-03-31",
      tableList: [],
      //   所有申请 核对申请
      isShowAll: true,
      isShowCheck: false,
      //  ------
      isCollapse: false,
      screenWidth: document.body.clientWidth,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  components: {
    HeaderTop: HeaderTop,
    NavLeft: NavLeft,
    AllApplicationsList2,
    checkApplication
  },
  created: function() {
    this.getTableData();
  },
  methods: {
    // 改变日期
    dateChange(val) {
      this.getTableData();
    },
    // 获取数据
    getTableData() {
      let that = this;
      let datePrams = {
        period: that.value
      };
      console.log(that.value, "that.value");
      requestTable("admin", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            //存入store  解决父组件异步获取动态数据传递给子组件 子组件获取不到值
            that.$store.commit("setTableList", res.data.data);

            console.log(res.data.data, "res.data.data");
          }
        })
        .catch(function(error) {});
    },
    //计算周期
    date() {
      let y = new Date().getFullYear(); //当前年份
      let m = new Date().getMonth() + 1; //当前月份
      let p = y - 2017; //当前年份与17年的差值
      let t = p;
      let q = ""; //上一个季度

      // 根据当前年份与17年的差值  向数组循环添加整年周期
      for (let i = 0; i < p; i++) {
        t--;
        this.dateArr.push(
          2017 + t + "-10-01--" + (2017 + t) + "-12-31",
          2017 + t + "-07-01--" + (2017 + t) + "-09-30",
          2017 + t + "-04-01--" + (2017 + t) + "-06-30",
          2017 + t + "-01-01--" + (2017 + t) + "-03-31"
        );
      }
      //   根据月份判断上一个季度
      switch (m) {
        case 4:
          q = 1;
          break;
        case 5:
          q = 1;
          break;
        default:
          q = parseInt(m / 3) - 1;
      }
      let item = q; //上一个季度--第三方变量
      for (let i = 0; i < q; i++) {
        //   根据当前上一个季度向数组前追上一个季度日期------顺序有问题 待改造
        console.log(item, " item--;");

        switch (item) {
          case 1:
            this.dateArr.unshift(y + "-01-01--" + y + "-03-31");
            break;
          case 2:
            this.dateArr.unshift(y + "-04-01--" + y + "-06-30");
            break;
          case 3:
            this.dateArr.unshift(y + "-07-01--" + y + "-09-30");
            break;
        }
        item--;
      }

      //  数组最初始的周期 "2016-10-01--2016-12-31"
      this.dateArr[this.dateArr.length] = "2016-10-01--2016-12-31";
      // 2.将数组转成Set-------使用延展操作符将Set解析成数组
      this.dateArr = [...new Set(this.dateArr)];
    }
  },
  computed: {
    getSearchKey() {
      return this.$store.state.common.collapse;
    }
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
.ApplicationAll {
  overflow: hidden;
  background-color: #ecf0f5;
  z-index: 800;
  min-height: 100vh;
  display: flex;
  .ApplicationAll-l {
    float: left;
    width: 12%;
    height: inherit;
  }
  .addClass1 {
    width: 7%;
  }
  .ApplicationAll-r {
    float: left;
    width: 88%;
    .AllApplicationsList-title {
      margin: 15px 0;
      padding-left: 35px;
      .selectDate {
        display: inline-block;
        margin-left: 15px;
      }
    }
    .AllApplicationsList-title-button {
      font-size: 14px;
    }
  }
  .addClass2 {
    width: 93%;
  }
}
</style>