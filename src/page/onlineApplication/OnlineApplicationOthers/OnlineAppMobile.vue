<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <OnlineAppNav :parentToChild="addClass"></OnlineAppNav>
    <div class="onlineAppMobile">
      <Breadcrumb :parentToChild="breadcrumb"></Breadcrumb>
      <div class="onlineAppMobile-bd">
        <div class="onlineAppMobile-bd-l">
          <OnlineAppEntCationNavList></OnlineAppEntCationNavList>
        </div>
        <div class="onlineAppMobile-bd-r">
          <OnlineAppMobileList></OnlineAppMobileList>
        </div>
      </div>
    </div>
    <HeadFooter></HeadFooter>
    <LenWebsite></LenWebsite>
  </div>
</template>

<script>
  import HeadTitle from "../../.././components/HomeCommon/HeadTitle"
  import OnlineAppNav from "../../.././components/OnlineApplicationCommon/OnlineAppNav"
  import HeadSearch from "../../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../../.././components/HomeCommon/HeadFooter"
  import LenWebsite from "../../.././components/HomeCommon/LenWebsite"
  import Breadcrumb from "../../.././components/InfCenterCommon/InfCenterShanghai/Breadcrumb"
  import OnlineAppEntCationNavList from "../../.././components/OnlineApplicationCommon/OnlineAppEntCation/OnlineAppEntCationNavList"
  import OnlineAppMobileList from "../../.././components/OnlineApplicationCommon/OnlineApplicationOthers/OnlineAppMobileList"
  export default {
    name: "OnlineAppMobile",
    data(){
      return{
        showImg:"OnlineAppEntCation",
        addClass:"OnlineAppEntCation",
        breadcrumb:"OnlineAppMobile"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      OnlineAppNav:OnlineAppNav,
      HeadFooter:HeadFooter,
      LenWebsite:LenWebsite,
      Breadcrumb:Breadcrumb,
      OnlineAppEntCationNavList:OnlineAppEntCationNavList,
      OnlineAppMobileList:OnlineAppMobileList
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>
  .onlineAppMobile{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .onlineAppMobile-bd{
      padding: 40px 60px;
      padding-top: 15px;
      overflow: hidden;
      .onlineAppMobile-bd-l{
        width: 25%;
        float: left;
      }
      .onlineAppMobile-bd-r{
        width: 75%;
        float: right;
      }
    }
  }
</style>
