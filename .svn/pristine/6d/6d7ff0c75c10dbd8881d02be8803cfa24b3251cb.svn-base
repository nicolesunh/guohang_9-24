<template>
  <div class="reviewSummary global">
    <div class="content">
      <div class="title">
        <span>港航企业集疏运数据汇总表</span>
        <a class="page-tool-i" href="javascript:window.print();">打印</a>
        <br />
      </div>
      <table class="table-business">
        <!-- 表头 -->
        <tr>
          <td rowspan="3">
            <span>序号</span>
          </td>
          <td rowspan="3">
            <span>企业名称</span>
          </td>
          <td colspan="6">
            <span>业务类型</span>
          </td>
          <td rowspan="3">
            <span>合计</span>
            <br />
            <span>（元）</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span>五定班轮</span>
          </td>
          <td colspan="2">
            <span>内河集装箱</span>
          </td>
          <td colspan="2">
            <span>江海联运</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>作业箱量/TEU</span>
          </td>
          <td>
            <span>补贴金额/元</span>
          </td>
          <td>
            <span>作业箱量</span>
          </td>
          <td>
            <span>补贴金额</span>
          </td>
          <td>
            <span>作业箱量</span>
          </td>
          <td>
            <span>补贴金额</span>
          </td>
        </tr>
        <!-- 内容 -->
        <!-- 港口企业 -->
        <template v-if="allBusiness.gk">
          <tr>
            <td>
              <span>港口企业</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-for="(item,index,i) in allBusiness.gk" :key="i+'i1'">
            <td>
              <span>{{i+1}}</span>
            </td>
            <td>
                <!-- 遍历对象 index是key名 -->
              <span>{{index}}</span>
            </td>
            <td>
              <span>{{ item.wdbl? (item.wdbl.teu.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{ item.wdbl? (item.wdbl.amount.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{item.nhjzx?(item.nhjzx.teu.sum||0):0  }}</span>
            </td>
            <td>
              <span>{{item.nhjzx? (item.nhjzx.amount.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{ item.jhly?(item.jhly.teu.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{ item.jhly?(item.jhly.amount.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{sum.gk?(sum.gk[index].amountSum||0):0}}</span>
            </td>
          </tr>
        </template>
        <!-- 航运企业 -->
        <template v-if="allBusiness.hy">
          <tr>
            <td>
              <span>航运企业</span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-for="(item,index,i) in allBusiness.hy" :key="i+'i2'">
            <td>
              <span>{{i+1}}</span>
            </td>
            <td>
                <!-- 遍历对象 index是key名 -->
              <span>{{index}}</span>
            </td>
            <td>
              <span>{{ item.wdbl? (item.wdbl.teu.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{ item.wdbl? (item.wdbl.amount.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{item.nhjzx?(item.nhjzx.teu.sum||0):0  }}</span>
            </td>
            <td>
              <span>{{item.nhjzx? (item.nhjzx.amount.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{ item.jhly?(item.jhly.teu.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{ item.jhly?(item.jhly.amount.sum||0):0 }}</span>
            </td>
            <td>
              <span>{{sum.hy?(sum.hy[index].amountSum||0):0}}</span>
            </td>
          </tr>
        </template>
        <!-- 合计 -->
        <template>
          <tr>
            <td colspan="2">
              <span>小计（TEU / 元）</span>
            </td>
            <td>
              <span>{{sum.hy?(sum.hy.wdblteuSum||0):0}}</span>
            </td>
            <td>
              <span>{{sum.hy?(sum.hy.wdblamountSum||0):0}}</span>
            </td>
             <td>
              <span>{{sum.hy?(sum.hy.nhjzxteuSum||0):0}}</span>
            </td>
            <td>
              <span>{{sum.hy?(sum.hy.nhjzxamountSum||0):0}}</span>
            </td>
            <td>
              <span>{{sum.hy?(sum.hy.jhlyteuSum||0):0}}</span>
            </td>
            <td>
              <span>{{sum.hy?(sum.hy.jhlyamountSum||0):0}}</span>
            </td>
            <td>
              <span>{{sum.hy?(sum.hy.amountSum||0):0}}</span>
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <span>合计（TEU / 元）</span>
            </td>
            <td></td>
            <td>
              <span>{{sum.wdblamountSum||0}}</span>
            </td>
            <td></td>
            <td>
              <span>{{sum.nhjzxamountSum||0}}</span>
            </td>
            <td></td>
            <td>
              <span>{{sum.jhlyamountSum||0}}</span>
            </td>
            <td>
              <span>{{sum.amountSum||0}}</span>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>
       
      
<script>
import { reviewSum } from "@/common/api.js";
export default {
  name: "reviewSummary",
  data() {
    return {
      period: "",
      resData: {},
      allBusiness: {},
      sum: {},
    //   序号
      i:1,
    };
  },
  components: {},
  created() {
    let that = this;
    let url = location.href;
    that.period = url.split("reviewSummary/")[1];
    this.getSum();
  },
  mounted() {},
  destroyed() {},
  computed: {},
  watch: {},
  methods: {
    getSum() {
      let that = this;
      // 参数
      let datePrams = {
        period: that.period
      };
      reviewSum("reviewSummary", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            that.resData = res.data;
            that.allBusiness = res.data.allBusiness;
            that.sum = res.data.sum;
          }
        })
        .catch(function(error) {});
    }
  }
};
</script>
<style lang='less' scoped>
.reviewSummary {
  .content {
    width: 1060px;
    margin: 20px auto;
    .title {
      width: 1000px;
      text-align: center;
      font-size: 26px;
      font-weight: bold;
      margin: 20px auto;
    }
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
    .table-business {
      width: 1060px;
      text-align: center;
      margin: 0 auto;
      border: 1px solid #1a1a1a;
      border-collapse: collapse;
      tr {
        line-height: 36px;
      }
      td,
      th {
        border: 1px solid #1a1a1a;
      }
    }
  }
}
</style>