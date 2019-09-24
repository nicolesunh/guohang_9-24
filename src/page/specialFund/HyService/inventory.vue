

<template>
  <div class="inventory" id="inventory">
    <!-- <div class="width12 inventory-l">
      <NavLeft></NavLeft>
    </div>-->
    <div class="inventory">
      <!-- <HeaderTop></HeaderTop> -->
      <div>
        <inventoryList></inventoryList>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from "@/components/SpecialFundCommon/HyService/HeaderTop";
import NavLeft from "@/components/SpecialFundCommon/HyService/NavLeft";
import inventoryList from "@/components/SpecialFundCommon/HyService/inventoryList";
import { clearList } from "@/common/api.js";
export default {
  name: "inventory",
  props: [],
  data() {
    return {};
  },
  components: {
    inventoryList
  },
  created() {
    let that = this;
    that.getInventoryTable();
  },
  mounted() {},
  destroyed() {},
  computed: {},
  watch: {},
  methods: {
    getInventoryTable() {
      let that = this;
      // 取store里的父组件存入的数据
      let period = that.$store.state.fund.inventoryInfo.b_period;
      let u_id = that.$store.state.fund.inventoryInfo.u_id;
      let datePrams = {
        period,
        u_id
      };
      clearList("reviewItem", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            console.log(res.data.data, "getInventoryTable");

            // 求和
            let nhjzx1 = [];
            let nhjzx2 = [];
            let nhjzx3 = [];
            let nhjzx4 = [];
            let nhjzx5 = [];
            if (res.data.data.nhjzx.length > 0) {
              res.data.data.nhjzx.map(item => {
                nhjzx1.push((item.voyage_num));
                nhjzx2.push((item.twenty));
                nhjzx3.push((item.forty));
                nhjzx4.push((item.forty_five));
                nhjzx5.push((item.teu));
              });
              res.data.data['nhjzxVoyage']=eval(nhjzx1.join("+"));
              res.data.data['nhjzx20']=eval(nhjzx2.join("+"));
              res.data.data['nhjzx40']=eval(nhjzx3.join("+"));
              res.data.data['nhjzx45']=eval(nhjzx4.join("+"));
              res.data.data['nhjzxTEU']=eval(nhjzx5.join("+"));
            }

            // 求和
            let wdbl1 = [];
            let wdbl2 = [];
            let wdbl3 = [];
            let wdbl4 = [];
            let wdbl5 = [];
            if (res.data.data.wdbl.length > 0) {
              res.data.data.wdbl.map(item => {
                wdbl1.push((item.voyage_num));
                wdbl2.push((item.twenty));
                wdbl3.push((item.forty));
                wdbl4.push((item.forty_five));
                wdbl5.push((item.teu));
              });
              res.data.data['wdblVoyage']=eval(wdbl1.join("+"));
              res.data.data['wdbl20']=eval(wdbl2.join("+"));
              res.data.data['wdbl40']=eval(wdbl3.join("+"));
              res.data.data['wdbl45']=eval(wdbl4.join("+"));
              res.data.data['wdblTEU']=eval(wdbl5.join("+"));
            }

            // 求和
            let jhly1 = [];
            let jhly2 = [];
            let jhly3 = [];
            let jhly4 = [];
            let jhly5 = [];
            if (res.data.data.jhly.length > 0) {
              res.data.data.jhly.map(item => {
                jhly1.push((item.voyage_num));
                jhly2.push((item.twenty));
                jhly3.push((item.forty));
                jhly4.push((item.forty_five));
                jhly5.push((item.teu));
              });
              res.data.data['jhlyVoyage']=eval(jhly1.join("+"));
              res.data.data['jhly20']=eval(jhly2.join("+"));
              res.data.data['jhly40']=eval(jhly3.join("+"));
              res.data.data['jhly45']=eval(jhly4.join("+"));
              res.data.data['jhlyTEU']=eval(jhly5.join("+"));
            }

            //存入store  解决父组件异步获取动态数据传递给子组件 子组件获取不到值
            that.$store.commit("setInventoryList", res.data.data);
          }
        })
        .catch(function(error) {});
    }
  }
};
</script>
<style lang='less' scoped>
#inventory {
    overflow: hidden;
  background-color: #fff;
  z-index: 800;
  min-height: 100vh;
  .inventory {
    width: 1060px;
    margin: 0 auto;
  }
}
</style>
