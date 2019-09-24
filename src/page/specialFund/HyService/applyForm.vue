 
<template>
  <div id="applyForm" class="global">
    <div class="applyForm">
      <div class="attachment">
        <span>附件1（{{status}}）：</span>
        <a class="page-tool-i" href="javascript:window.print();">打印</a>
      </div>
      <div class="form-title">
        <span>上海市调整优化现代航运集疏运结构项目</span>
        <br />
        <br />
        <span>资金申请表</span>
      </div>
      <table class="form-first">
        <tr>
          <td>
            <span>申请类别：</span>
          </td>
          <td class="tdcenter tdunderline">
            <span>{{name}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>申请单位：</span>
          </td>
          <td class="tdcenter tdunderline">
            <span>{{unit.u_name}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>法定代表人：</span>
          </td>
          <td class="tdcenter tdunderline">
            <span>{{unit.u_legal}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>联系人&nbsp;&nbsp;&nbsp;：</span>
          </td>
          <td class="tdcenter tdunderline">
            <span>{{unit.u_contacts}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</span>
          </td>
          <td class="tdcenter tdunderline">
            <span>{{unit.u_contacts_phone}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</span>
          </td>
          <td class="tdcenter tdunderline">
            <span>{{unit.u_contacts_mobile}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>传&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;真：</span>
          </td>
          <td class="tdcenter tdunderline">
            <span>{{unit.u_contacts_fax}}</span>
          </td>
        </tr>
        <tr>
          <td class="clear">&nbsp;</td>
        </tr>
        <tr>
          <td colspan="2" class="tdcenter">
            <span>{{new Date().getFullYear()+"年"+(new Date().getMonth() + 1)+"月"+new Date().getDate()+"日"}}</span>
          </td>
        </tr>
      </table>

      <div class="pagenext"></div>

      <div class="pagenext"></div>

      <table class="tableborder form-third">
        <tr>
          <td>
            <span>申请单位：</span>
            <br />
            <span>{{unit.u_name}}</span>
          </td>
          <td>
            <span>申请单位地址：</span>
            <br />
            <span>{{unit.u_addr}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>法定代表人：{{unit.u_legal}}</span>
          </td>
          <td>
            <span>联系电话：{{unit.u_contacts_phone}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>联系人：{{unit.u_contacts}}</span>
          </td>
          <td>
            <span>联系电话：{{unit.u_contacts_phone}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>开户银行：{{unit.u_bank}}</span>
          </td>
          <td>
            <span>银行账号：{{unit.u_bank_account}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>申请类型：</span>
            <br />
            <span>{{name}}</span>
          </td>
          <td>
            <span>申请业务期间：</span>
            <br />
            <span>{{resData.period}}</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>业务量（TEU）：{{resData.teuSum}}</span>
          </td>
          <td>
            <span>申请总额（元）：{{resData.amountSum}}</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span>本公司对申请材料的真实性负责，承诺以上业务量属实。</span>
            <br />
            <br />
            <br />
            <br />
            <div class="rightalign">
              <span>（章）日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span>市交通委意见</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="rightalign">
              <span>（章）日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span>市财政局意见</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="rightalign">
              <span>（章）日期：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { requestTable } from "@/common/api.js";
import { mapState } from "vuex";
export default {
  name: "applyForm",
  props: [],
  data() {
    return {
      resData: {},
      unit: [],
      status: "",
      //   项目类别
      name: ""
    };
  },
  components: {},
  created() {
    this.getForm();
  },
  mounted() {},
  destroyed() {},
  computed: {
    // 计算属性取store数据
    ...mapState({
      applyParam: state => state.fund.applyParam
    })
  },
  watch: {
    // 监听store数据的变化
    applyParam() {
      // 数据变化就取数据处理数据
      console.log(this.applyParam, "applyParam");
    }
  },
  methods: {
    getForm() {
      let that = this;

      // 取store里的父组件存入的数据
      let period = that.applyParam.b_period;
      let u_id = that.applyParam.u_id;
      let datePrams = {
        period,
        u_id
      };
      requestTable("reviewForm", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            that.resData = res.data.data;
            that.unit = res.data.data.unit[0];
            // 状态判断
            switch (res.data.data.status) {
              case -1:
                that.status = "废弃";
                break;
              case 0:
                that.status = "草稿";
                break;
              case 1:
                that.status = "退回";
                break;
              case 2:
                that.status = "已提交";
                break;
              case 3:
                that.status = "已审核";
                break;
            }
            // 项目类型判断
            if (res.data.data.bcat.length == 1) {
              switch (res.data.data.bcat[0]) {
                case "wdbl":
                  that.name = "五运轮班";
                  break;
                case "jhly":
                  that.name = "江海联运";
                  break;
                case "nhjzx":
                  that.name = "内河集装箱";
                  break;
              }
            } else if (res.data.data.bcat.length == 3) {
              that.name = "五运轮班 江海联运 内河集装箱";
            } else if (res.data.data.bcat.length == 2) {
              res.data.data.bcat.map(item => {
                switch (item) {
                  case "wdbl":
                    that.name = that.name + "五运轮班";
                    break;
                  case "jhly":
                    that.name = that.name + " 江海联运";
                    break;
                  case "nhjzx":
                    that.name = that.name + " 内河集装箱";
                    break;
                }
              });
            }

            console.log(res.data.data, "reviewForm");
          }
        })
        .catch(function(error) {});
    }
  }
};
</script>
<style lang='less' scoped>
#applyForm {
  overflow: hidden;
  background-color: #fff;
  z-index: 800;
  min-height: 100vh;
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
  .applyForm {
    width: 1000px;
    margin: 0 auto;
    table,
    td,
    th {
      border: 1px solid #1a1a1a;
    }
    table {
      width: 1000px;
      margin: 0 auto;
      border-collapse: collapse;

      td {
        text-align: center;
      }
    }
    .attachment {
      width: 100%;
      text-align: left;
      margin: 110px auto 0;
      font-size: 26px;
    }
    .form-title {
      width: 100%;
      text-align: center;
      margin: 100px 0 200px;
      font-weight: bold;
      font-size: 45px;
    }
    .form-first {
      font-size: 26px;
      width: 700px !important;
      margin: 0 auto;
      font-weight: bold;
      border: none !important;
      td {
        border: none;
      }
      .tdunderline {
        border-bottom: 1px solid #1a1a1a !important;
      }
      span {
        line-height: 50px;
      }
      .clear {
        line-height: 200px;
      }
    }
    .form-third {
      margin-top: 50px !important;
      font-size: 26px;
      margin-bottom: 30px !important;
      td {
        text-align: left !important;
      }
      span {
        line-height: 60px;
        margin: 0 10px;
      }
      .rightalign {
        width: 980px;
        text-align: right;
      }
    }
  }
}
</style>
