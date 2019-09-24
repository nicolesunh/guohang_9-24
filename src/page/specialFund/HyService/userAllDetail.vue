<template>
  <div class="userAllDetail">
    <div class="userAllDetail-l" id="FinalList-l-id">
      <NavLeft></NavLeft>
    </div>
    <div class="userAllDetail-r">
      <HeaderTop></HeaderTop>
      <div>
        <userDetailAdmin></userDetailAdmin>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../../components/SpecialFundCommon/HyService/HeaderTop";
import NavLeft from "../../../components/SpecialFundCommon/HyService/NavLeft";
import userDetailAdmin from "../../../components/SpecialFundCommon/HyService/userDetailAdmin";
export default {
  name: "userAllDetail",
  data() {
    return {};
  },
  components: {
    HeaderTop: HeaderTop,
    NavLeft: NavLeft,
    userDetailAdmin: userDetailAdmin,
  },
  created: function() {},

  computed: {},
  watch: {}
};
</script>

<style  lang = scss scoped>
.userAllDetail {
  overflow: hidden;
  background-color: #ecf0f5;
  z-index: 800;
  min-height: 100vh;

  .userAllDetail-l {
    float: left;
    width: 12%;
  }
  .addClass1 {
    width: 7%;
  }
  .userAllDetail-r {
    float: left;
    width: 88%;
  }
  .addClass2 {
    width: 93%;
  }
}
</style>