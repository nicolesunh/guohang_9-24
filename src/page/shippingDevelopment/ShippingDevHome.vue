<template>
  <div>
    <HeadTitle></HeadTitle>
    <HeadSearch :parentToChild="showImg"></HeadSearch>
    <ShippingDevNav :parentToChild="addClass"></ShippingDevNav>
    <div class="shippingDevHome">
      <div class="shippingDevHome-bd">
        <!--图片-->
        <div class="shippingDevHome-navImg">
          <ul>
            <li><img src="../.././assets/img/centbuildimg1.jpg" alt=""></li>
            <li><img src="../.././assets/img/centbuildimg2.jpg" alt=""></li>
            <li><img src="../.././assets/img/centbuildimg3.jpg" alt=""></li>
            <li><img src="../.././assets/img/centbuildimg4.jpg" alt=""></li>
            <li><img src="../.././assets/img/centbuildimg5.jpg" alt=""></li>
          </ul>
        </div>
        <ShippingDevHome1></ShippingDevHome1>
        <ShippingDevHome2></ShippingDevHome2>
        <ShippingDevHome3></ShippingDevHome3>
      </div>
    </div>
    <HeadFooter></HeadFooter>
    <LenWebsite></LenWebsite>
  </div>
</template>

<script>
  import HeadTitle from "../.././components/HomeCommon/HeadTitle"
  import ShippingDevNav from "../.././components/ShippingDevCommon/ShippingDevNav"
  import HeadSearch from "../.././components/HomeCommon/HeadSearch"
  import HeadFooter from "../.././components/HomeCommon/HeadFooter"
  import LenWebsite from "../.././components/HomeCommon/LenWebsite"
  import ShippingDevHome1 from "../.././components/ShippingDevCommon/ShippingDevHome/ShippingDevHome1"
  import ShippingDevHome2 from "../.././components/ShippingDevCommon/ShippingDevHome/ShippingDevHome2"
  import ShippingDevHome3 from "../.././components/ShippingDevCommon/ShippingDevHome/ShippingDevHome3"
  export default {
    name: "ShippingDevHome",
    data(){
      return{
        showImg:"ShippingDevHome",
        addClass:"ShippingDevHome"
      }
    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      ShippingDevNav:ShippingDevNav,
      HeadFooter:HeadFooter,
      LenWebsite:LenWebsite,
      ShippingDevHome1:ShippingDevHome1,
      ShippingDevHome2:ShippingDevHome2,
      ShippingDevHome3:ShippingDevHome3
    },
      created:function () {

      },
      methods:{

      }
  }
</script>

<style lang = scss scoped>
  .shippingDevHome{
    width: 1060px;
    margin: 0 auto;
    min-height: 620px;
    background: #ffffff;
    .shippingDevHome-bd{
      padding: 40px 60px;
      padding-top: 15px;
      .shippingDevHome-navImg{
        ul{
          overflow: hidden;
          li{
            width: 20%;
            float: left;
            img{
              width: 174px;
              height: 201px;
            }
          }
        }
      }
    }
  }
</style>
