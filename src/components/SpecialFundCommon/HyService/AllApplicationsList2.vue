<template>
  <div class="AllApplicationsList">
    <div class="AllApplicationsList-table">
      <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%">
        <el-table-column prop="b_period" label="业务期间" align="center">
          <template slot-scope="scope">
            <p style="margin-bottom:5px">{{scope.row.b_period}}</p>
            <span
              @click="goSummary(scope.row.b_period)"
              style="color: #2258C2;cursor: pointer;"
            >已审核汇总表</span>
            <span
              @click="exportSheet(scope.row.b_period)"
              style="color: #2258C2;cursor: pointer;margin-left:10px"
            >导出Execl</span>
          </template>
        </el-table-column>
        <el-table-column prop="u_name" label="申请单位" align="center"></el-table-column>
        <el-table-column prop="datetime" label="申请时间" align="center"></el-table-column>
        <el-table-column label="预览" align="center">
          <el-table-column prop label align="center" width="70">
            <template slot-scope="scope">
              <span
                @click="goInventory(scope.row.b_period,scope.row.u_id)"
                style="color: #2258C2;cursor: pointer;"
              >清单</span>
            </template>
          </el-table-column>
          <el-table-column prop label align="center" width="70">
            <template slot-scope="scope">
              <span
                @click="goApplyForm(scope.row.b_period,scope.row.u_id)"
                style="color: #2258C2;cursor: pointer;"
              >申请表</span>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="examine" label="审核" align="center">
          <el-table-column prop label align="center" width="70">
            <template slot-scope="scope" v-if="scope.row.status==2">
              <span
                @click="handSuccess(scope.row.b_period,scope.row.u_id)"
                style="color: #2258C2;cursor: pointer;"
              >通过</span>
            </template>
          </el-table-column>
          <el-table-column prop label align="center" width="70">
            <template slot-scope="scope" v-if="scope.row.status==2">
              <span
                @click="handPre(scope.row.b_period,scope.row.u_id)"
                style="color: #2258C2;cursor: pointer;"
              >退回</span>
            </template>
          </el-table-column>
          <el-table-column prop="back" label align="center" width="70">
            <template slot-scope="scope" v-if="scope.row.status==3">
              <span
                @click="handBack(scope.row.b_period,scope.row.u_id)"
                style="color: #2258C2;cursor: pointer;"
              >撤回</span>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status==-1">废弃</span>
            <span v-if="scope.row.status==0">草稿</span>
            <span v-if="scope.row.status==1">退回</span>
            <span v-if="scope.row.status==2">已提交</span>
            <span v-if="scope.row.status==3">已审核</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="操作" align="center">
          <template slot-scope="scope">
            <span
              @click="message(scope.row.unit_id,scope.row.comment)"
              style="color: #2258C2;cursor: pointer;"
            >留言</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="留言" :visible.sync="dialogVisible" width="40%" center>
      <div class="AllApplicationsList-textArea">
        <el-input
          type="textarea"
          v-model="msg"
          placeholder="请输入内容"
          :autosize="{ minRows: 2, maxRows: 4}"
          :maxlength="120"
          :show-word-limit="true"
        ></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="leaveMsg(1)">保存留言</el-button>
        <el-button type="primary" @click="leaveMsg(2)">发送留言</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { leave, goback, goSuccess, goPre } from "@/common/api.js";
import { mapState } from "vuex";
export default {
  name: "AllApplicationsList2",
  data() {
    return {
      tableData: [],
      // 对话框
      dialogVisible: false,
      // 留言
      msg: "",
      unit_id: 0,
      spanArr: [], //遍历数据时，根据相同的标识去存储记录
      pos: 0 // 存储记录数组的索引
    };
  },

  beforeCreate() {},
  created() {
    let that = this;
    that.getList();
  },
  mounted() {},
  computed: {
    // 计算属性取store数据
    ...mapState({
      tableList: state => state.fund.tableList
    })
  },
  watch: {
    // 监听store数据的变化
    tableList() {
      // 数据变化就取数据处理数据
      this.getList();
    }
  },

  methods: {
    // 获取列表数据
    getList() {
      let that = this;
      console.log(that.msg, "that.msg");
      that.spanArr = [];
      that.pos = 0;
      // 取store里的父组件存入的数据
      that.tableData = that.tableList;
      //遍历table数据
      that.tableData.forEach((item, index) => {
        //判断是否是第一项----------第一项无法与上一条数据对比
        if (index === 0) {
          that.spanArr.push(1);
          that.pos = 0;
        } else {
          //不是第一项时，就根据相同标识去存储------与上一条数据对比
          if (
            that.tableData[index].b_period ===
            that.tableData[index - 1].b_period
          ) {
            // 查找到符合条件的数据时每次要把之前存储的数据+1
            // 与第一项标识相同时this.pos=0
            that.spanArr[that.pos] += 1;
            that.spanArr.push(0);
          } else {
            // 没有符合的数据时，要记住当前的index  --------合并为第二行的起始位置
            that.spanArr.push(1);
            that.pos = index;
          }
        }
      });
    },
    // 合并行数----------------------
    /* 通过给table传入span-method方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。
        该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。 也可以返回一个键名为rowspan和colspan的对象。
        rowspan和colspan代表从当前行开始合并  rowspan表示横跨行(意思是上下合并)，colspan表示横跨列（意思是左右合并）。
      */
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      /*表格合并行 -> 第几列(从0开始)
        每次走到第1列时给单元格加上rowspan和colspan属性   实现合并随机出现的行数
        需要合并多个单元格时 依次增加判断条件即可
      */
      let that = this;
      if (columnIndex === 0) {
        // 数组存储的数据 取出

        const _row = that.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;

        return {
          rowspan: _row,
          colspan: _col
        };
      } else {
        //判断columnIndex合并不能return {rowspan：0， colspan: 0} 会造成数据不渲染， 也可以不写else，eslint过不了的话就返回false
        return false;
      }
    },
    // 跳到清单
    goInventory(b_period, u_id) {
      let that = this;
      // 接口参数存入store
      that.$store.commit("setInventoryPeriod", { b_period, u_id });
      // 跳到清单
      that.$router.push(`/p/fund/public/inventory/${u_id}`);
      console.log(b_period, u_id);
    },
    // 跳到申请表
    goApplyForm(b_period, u_id) {
      let that = this;
      // 接口参数存入store
      that.$store.commit("setApplyParam", { b_period, u_id });
      // 跳到申请表
      that.$router.push(`/p/fund/public/applyForm/${u_id}`);
      console.log(b_period, u_id);
    },
     // 跳到已审核汇总
    goSummary(period) {
      let that = this;
      // 跳到已审核汇总
      that.$router.push(`/p/fund/public/reviewSummary/${period}`);
    },
    // 导出
    exportSheet(period) {
      let that = this;
      // 导出直接跳链接
      location.href = serviceUrl + "reviewExport?period=" + period;
    },
    // 通过
    handSuccess(period, u_id) {
      let that = this;
      // 参数
      let datePrams = {
        period,
        u_id
      };
      goSuccess("approve", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            // 子组件调用父组件事件 刷新
            that.$parent.getTableData();
            that.$message({
              message: res.data.data,
              type: "success",
              duration: 800
            });
          }
        })
        .catch(function(error) {});
    },
    // 回退
    handPre(period, u_id) {
      let that = this;
      // 参数
      let datePrams = {
        period,
        u_id
      };
      goPre("demote", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            // 子组件调用父组件事件 刷新
            that.$parent.getTableData();
            that.$message({
              message: res.data.data,
              type: "success",
              duration: 800
            });
          }
        })
        .catch(function(error) {});
    },
    // 撤回
    handBack(period, u_id) {
      let that = this;
      // 参数
      let datePrams = {
        period,
        u_id
      };
      goback("cancelApprove", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            // 子组件调用父组件事件 刷新
            that.$parent.getTableData();
            that.$message({
              message: res.data.data,
              type: "success",
              duration: 800
            });
          }
        })
        .catch(function(error) {});
    },
    // 留言
    message(unit_id, comment) {
      let that = this;
      that.dialogVisible = true;
      that.msg = comment;
      that.unit_id = unit_id;
    },
    // 保存 发送留言
    leaveMsg(comment_status) {
      let that = this;
      // 参数
      let unit_id = that.unit_id;
      let comment = that.msg;
      let datePrams = {
        unit_id,
        comment,
        comment_status
      };
      leave("commentAction", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            // 子组件调用父组件事件 刷新
            that.$parent.getTableData();
            that.$message({
              message: res.data.data,
              type: "success",
              duration: 800
            });
          }
        })
        .catch(function(error) {});
      that.dialogVisible = false;
    }

    //新的方法
  }
};
</script>

<style  lang = scss scoped>
.AllApplicationsList {
  width: 95%;
  margin: 0 auto;
  padding-bottom: 30px;
  .AllApplicationsList-title {
    margin: 15px 0;
  }
  .AllApplicationsList-title-button {
    font-size: 14px;
    background: #2258c2;
  }
  .AllApplicationsList-table {
    margin-top: 10px;
    /* .el-table tr {
        /deep/
        .el-table_1_column_5 {
          padding: 0;
          height: 100%;
          .cell{
            width: 100%;
            padding: 0;
          }
        }
      }*/
  }
  .AllApplicationsList-text {
    h3 {
      padding: 15px 0;
      span {
        font-size: 14px;
        font-weight: bold;
      }
      span:nth-child(2) {
        display: inline-block;
        width: 200px;
      }
    }
    .AllApplicationsList-textArea textarea {
      width: 100%;
      height: 150px;
      resize: none;
    }
  }
  .AllApplicationsList-button {
    margin: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .AllApplicationsList-button1 {
      margin: 0 25px;
      font-size: 14px;
      background: #2258c2;
    }
    .AllApplicationsList-button2 {
      margin: 0 45px;
      font-size: 14px;
      background: #2258c2;
    }
  }
}
</style>
