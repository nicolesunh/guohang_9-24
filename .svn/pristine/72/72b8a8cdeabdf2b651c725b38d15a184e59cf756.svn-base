<template>
    <div>
      <HeadTitle></HeadTitle>
      <HeadSearch :parentToChild="showImg"></HeadSearch>
      <InfCenterNav  :parentToChild="addClass"></InfCenterNav>
      <div class="infCenterHome">
        <div class="infCenterHome-C">
          <InfCenterHome1></InfCenterHome1>
          <InfCenterHome2></InfCenterHome2>
          <InfCenterHome3></InfCenterHome3>
        </div>
      </div>
      <HeadFooter></HeadFooter>
      <LenWebsite></LenWebsite>
    </div>
</template>

<script>
    import HeadTitle from "../.././components/HomeCommon/HeadTitle"
    import InfCenterNav from "../.././components/InfCenterCommon/InfCenterNav"
    import HeadSearch from "../.././components/HomeCommon/HeadSearch"
    import HeadFooter from "../.././components/HomeCommon/HeadFooter"
    import LenWebsite from "../.././components/HomeCommon/LenWebsite"
    import InfCenterHome1 from "../.././components/InfCenterCommon/InfCenterHome/InfCenterHome1"
    import InfCenterHome2 from "../.././components/InfCenterCommon/InfCenterHome/InfCenterHome2"
    import InfCenterHome3 from "../.././components/InfCenterCommon/InfCenterHome/InfCenterHome3"
    import { getInfoCentreIndex } from "@/common/api.js";
    export default {
        name: "InfCenterHome",
        data() {
            return {
                showImg: "InfCenterHome",
                addClass: "InfCenterHome",
            }
        },
        components: {
            HeadTitle: HeadTitle,
            HeadSearch: HeadSearch,
            InfCenterNav: InfCenterNav,
            HeadFooter: HeadFooter,
            LenWebsite:LenWebsite,
            InfCenterHome1: InfCenterHome1,
            InfCenterHome2: InfCenterHome2,
            InfCenterHome3: InfCenterHome3
        },
        created: function () {
            this.getDate();
        },
        methods: {
            getDate: function () {
                var _that = this
                getInfoCentreIndex().then(function(res){
                    if(res.data.code == 200){
                        _that.$store.commit('setInfCenterHome',res.data.data);
                    }
                }).catch(function(error){

                })

            },

        }
    }
</script>

<style lang = scss scoped>
  .infCenterHome{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    overflow: hidden;
    .infCenterHome-C{
      padding: 40px 20px;
      padding-top: 15px;
    }
  }
</style>
