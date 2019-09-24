<template>
  <div class="inventoryList">
    <div class="print">
      <a class="page-tool-i" href="javascript:window.print();">打印</a>
    </div>

    <!-- 附件2 -->
    <div class="annex" v-if="inventoryList.wdbl.length>0">
      <h3>附件2：</h3>
      <div class="name">
        <span>上海市调整优化现代航运集疏运结构项目资金申请业务量清单</span>
        <br />
        <span>（“五定班轮”业务）</span>
      </div>

      <div class="annex-content">
        <div class="title">
          <table>
            <tr>
              <td>
                <span>公司名称</span>
              </td>
              <td>
                <span>{{inventoryList.unitName}}</span>
              </td>
              <td>
                <span>申请业务期间</span>
              </td>
              <td>
                <span>{{inventoryList.period}}</span>
              </td>
              <td>
                <span>填表日期</span>
              </td>
              <td>
                <span>{{inventoryList.addtime}}</span>
              </td>
              <td>
                <span>状态</span>
              </td>
              <td>
                <span v-if="inventoryList.status==-1">废弃</span>
                <span v-if="inventoryList.status==0">草稿</span>
                <span v-if="inventoryList.status==1">退回</span>
                <span v-if="inventoryList.status==2">已提交</span>
                <span v-if="inventoryList.status==3">已审核</span>
              </td>
            </tr>
          </table>
        </div>
        <div class="content">
          <!-- rowspan="2"上下跨2行==>实现多表头 -->
          <table class="tableContent">
            <!-- 表头 -->
            <tr>
              <td rowspan="2">
                <span>序号</span>
              </td>
              <td rowspan="2">
                <span>航线名称</span>
              </td>
              <td rowspan="2">
                <span>船名</span>
              </td>
              <td rowspan="2">
                <span>船型</span>
              </td>
              <td rowspan="2">
                <span>完成</span>
                <br />
                <span>航次数</span>
              </td>
              <td rowspan="2">
                <span>班期</span>
              </td>
              <td rowspan="2">
                <span>靠泊码头</span>
              </td>
              <td colspan="4">
                <span>作业箱量</span>
              </td>
              <td rowspan="2">
                <span>备注</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>20'</span>
              </td>
              <td>
                <span>40'</span>
              </td>
              <td>
                <span>45'</span>
              </td>
              <td>
                <span>TEU</span>
              </td>
            </tr>
            <!--表格内容  -->
            <tr v-for="(item,index) in inventoryList.wdbl" :key="index">
              <td>
                <span>{{index+1}}</span>
              </td>
              <td>
                <span>{{item.route}}</span>
              </td>
              <td>
                <span>{{item.ship_name}}</span>
              </td>
              <td>
                <span>{{item.ship_type}}</span>
              </td>
              <td>
                <span>{{item.voyage_num}}</span>
              </td>
              <td>
                <span>{{item.voyage_week}}</span>
              </td>
              <td>
                <span>{{item.dock}}</span>
              </td>
              <td>
                <span>{{item.twenty}}</span>
              </td>
              <td>
                <span>{{item.forty}}</span>
              </td>
              <td>
                <span>{{item.forty_five}}</span>
              </td>
              <td>
                <span>{{item.teu}}</span>
              </td>
              <td>
                <span></span>
              </td>
            </tr>
            <!-- 合计 -->
            <tr>
              <td>合计</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{{inventoryList.wdblVoyage}}</td>
              <td></td>
              <td></td>
              <td>{{inventoryList.wdbl20}}</td>
              <td>{{inventoryList.wdbl40}}</td>
              <td>{{inventoryList.wdbl45}}</td>
              <td>{{inventoryList.wdblTEU}}</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="pagenext"></div>
      </div>
    </div>
    <!-- 附件3 -->
    <div class="annex" v-if="inventoryList.nhjzx.length>0">
      <h3>附件3：</h3>
      <div class="name">
        <span>上海市调整优化现代航运集疏运结构项目资金申请业务量清单</span>
        <br />
        <span>（“内河集装箱”业务）</span>
      </div>

      <div class="annex-content">
        <div class="title">
          <table>
            <tr>
              <td>
                <span>公司名称</span>
              </td>
              <td>
                <span>{{inventoryList.unitName}}</span>
              </td>
              <td>
                <span>申请业务期间</span>
              </td>
              <td>
                <span>{{inventoryList.period}}</span>
              </td>
              <td>
                <span>填表日期</span>
              </td>
              <td>
                <span>{{inventoryList.addtime}}</span>
              </td>
              <td>
                <span>状态</span>
              </td>
              <td>
                <span v-if="inventoryList.status==-1">废弃</span>
                <span v-if="inventoryList.status==0">草稿</span>
                <span v-if="inventoryList.status==1">退回</span>
                <span v-if="inventoryList.status==2">已提交</span>
                <span v-if="inventoryList.status==3">已审核</span>
              </td>
            </tr>
          </table>
        </div>
        <div class="content">
          <!-- rowspan="2"上下跨2行==>实现多表头 -->
          <table class="tableContent">
            <!-- 表头 -->

            <tr>
              <td rowspan="2">
                <span>序号</span>
              </td>
              <td rowspan="2">
                <span>航线名称</span>
              </td>
              <td rowspan="2">
                <span>船名</span>
              </td>
              <td rowspan="2">
                <span>船型</span>
              </td>
              <td rowspan="2">
                <span>完成</span>
                <br />
                <span>航次数</span>
              </td>
              <td rowspan="2">
                <span>班期</span>
              </td>
              <td rowspan="2">
                <span>靠泊码头</span>
              </td>
              <td colspan="4">
                <span>作业箱量</span>
              </td>
              <td rowspan="2">
                <span>备注</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>20'</span>
              </td>
              <td>
                <span>40'</span>
              </td>
              <td>
                <span>45'</span>
              </td>
              <td>
                <span>TEU</span>
              </td>
            </tr>

            <!--表格内容  -->

            <tr v-for="(item,index) in inventoryList.nhjzx" :key="index">
              <td>
                <span>{{index+1}}</span>
              </td>
              <td>
                <span>{{item.route}}</span>
              </td>
              <td>
                <span>{{item.ship_name}}</span>
              </td>
              <td>
                <span>{{item.ship_type}}</span>
              </td>
              <td>
                <span>{{item.voyage_num}}</span>
              </td>
              <td>
                <span>{{item.voyage_week}}</span>
              </td>
              <td>
                <span>{{item.dock}}</span>
              </td>
              <td>
                <span>{{item.twenty}}</span>
              </td>
              <td>
                <span>{{item.forty}}</span>
              </td>
              <td>
                <span>{{item.forty_five}}</span>
              </td>
              <td>
                <span>{{item.teu}}</span>
              </td>
              <td>
                <span></span>
              </td>
            </tr>
            <!-- 合计 -->
            <tr>
              <td>合计</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{{inventoryList.nhjzxVoyage}}</td>
              <td></td>
              <td></td>
              <td>{{inventoryList.nhjzx20}}</td>
              <td>{{inventoryList.nhjzx40}}</td>
              <td>{{inventoryList.nhjzx45}}</td>
              <td>{{inventoryList.nhjzxTEU}}</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="pagenext"></div>
      </div>
    </div>
    <!-- 附件4 -->
    <div class="annex" v-if="inventoryList.jhly.length>0">
      <h3>附件4：</h3>
      <div class="name">
        <span>上海市调整优化现代航运集疏运结构项目资金申请业务量清单</span>
        <br />
        <span>（“江海联运（洋山）”业务）</span>
      </div>

      <div class="annex-content">
        <div class="title">
          <table>
            <tr>
              <td>
                <span>公司名称</span>
              </td>
              <td>
                <span>{{inventoryList.unitName}}</span>
              </td>
              <td>
                <span>申请业务期间</span>
              </td>
              <td>
                <span>{{inventoryList.period}}</span>
              </td>
              <td>
                <span>填表日期</span>
              </td>
              <td>
                <span>{{inventoryList.addtime}}</span>
              </td>
              <td>
                <span>状态</span>
              </td>
              <td>
                <span v-if="inventoryList.status==-1">废弃</span>
                <span v-if="inventoryList.status==0">草稿</span>
                <span v-if="inventoryList.status==1">退回</span>
                <span v-if="inventoryList.status==2">已提交</span>
                <span v-if="inventoryList.status==3">已审核</span>
              </td>
            </tr>
          </table>
        </div>
        <div class="content">
          <!-- rowspan="2"上下跨2行==>实现多表头 -->
          <table class="tableContent">
            <!-- 表头 -->

            <tr>
              <td rowspan="2">
                <span>序号</span>
              </td>
              <td rowspan="2">
                <span>航线名称</span>
              </td>
              <td rowspan="2">
                <span>船名</span>
              </td>
              <td rowspan="2">
                <span>船型</span>
              </td>
              <td rowspan="2">
                <span>完成</span>
                <br />
                <span>航次数</span>
              </td>
              <td rowspan="2">
                <span>班期</span>
              </td>
              <td rowspan="2">
                <span>靠泊码头</span>
              </td>
              <td colspan="4">
                <span>作业箱量</span>
              </td>
              <td rowspan="2">
                <span>备注</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>20'</span>
              </td>
              <td>
                <span>40'</span>
              </td>
              <td>
                <span>45'</span>
              </td>
              <td>
                <span>TEU</span>
              </td>
            </tr>

            <!--表格内容  -->

            <tr v-for="(item,index) in inventoryList.jhly" :key="index">
              <td>
                <span>{{index+1}}</span>
              </td>
              <td>
                <span>{{item.route}}</span>
              </td>
              <td>
                <span>{{item.ship_name}}</span>
              </td>
              <td>
                <span>{{item.ship_type}}</span>
              </td>
              <td>
                <span>{{item.voyage_num}}</span>
              </td>
              <td>
                <span>{{item.voyage_week}}</span>
              </td>
              <td>
                <span>{{item.dock}}</span>
              </td>
              <td>
                <span>{{item.twenty}}</span>
              </td>
              <td>
                <span>{{item.forty}}</span>
              </td>
              <td>
                <span>{{item.forty_five}}</span>
              </td>
              <td>
                <span>{{item.teu}}</span>
              </td>
              <td>
                <span></span>
              </td>
            </tr>
            <!-- 合计 -->
            <tr>
              <td>合计</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{{inventoryList.jhlyVoyage}}</td>
              <td></td>
              <td></td>
              <td>{{inventoryList.jhly20}}</td>
              <td>{{inventoryList.jhly40}}</td>
              <td>{{inventoryList.jhly45}}</td>
              <td>{{inventoryList.jhlyTEU}}</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="pagenext"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "inventoryList",
  props: [],
  data() {
    return {
    
    };
  },
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  computed: {
    // 计算属性取store数据
    ...mapState({
      inventoryList: state => state.fund.inventoryList
    })
  },
  watch: {
    // 监听store数据的变化
    inventoryList() {
      // 数据变化就取数据处理数据
      console.log(this.inventoryList, "inventoryList");
    }
  },
  methods: {
  
  }
};
</script>
<style lang='less' scoped>
* {
  color: #000 !important ;
}
.el-table td,
.el-table th.is-leaf,
.el-table--border,
.el-table--group {
  border-color: #000 !important ;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: #000;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #000 !important ;
}
/deep/table {
  color: #000 !important ;
  border-color: #000 !important ;
}
/deep/td {
  color: #000 !important ;
  border-color: #000 !important ;
  padding: 0;
}
/deep/th {
  color: #000 !important ;
  border-color: #000 !important ;
  padding: 0;
}
/deep/thead {
  color: #000 !important ;
  border-color: #000 !important ;
}
.el-table {
  /deep/ .cell {
    padding: 2px;
  }
}
.inventoryList {
  padding: 20px;
  box-sizing: border-box;
  // 打印按钮
  .page-tool-i {
    float: right;
    display: block;
    width: 50px;
    height: 40px;
    position: relative;
    margin-top: -10px;
    background: url("../../../assets/img/print.png") no-repeat;
    text-indent: -9999em;
  }
  //   打印分页样式
  .pagenext {
    page-break-after: always;
  }
  .name {
    width: 1000px;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin: 20px auto;
    span {
      text-align: center;
      font-size: 26px;
      font-weight: bold;
    }
  }
  .annex {
    // height: calc(100vh - 100px);
    margin-top: 20px;
    h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }

    .annex-content {
      padding: 10px 20px;
      box-sizing: border-box;
      table {
        width: 100%;
        td {
          height: 30px;
          padding: 0 5px;
          text-align: center;
          border: 1px solid #333;
        }
      }
      .title {
        margin-bottom: 20px;
      }
      .content {
      }
    }
  }
}
</style>