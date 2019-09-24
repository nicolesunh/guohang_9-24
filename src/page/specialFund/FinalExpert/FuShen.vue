<template>
    <div class="FuShenAll">
        <FinalHomeTop></FinalHomeTop>
        <FinalNav :parentToChild="showTitle"></FinalNav>
        <div class="FuShen">
            <FuShenList></FuShenList>
        </div>
        <HeadFooter></HeadFooter>
    </div>
</template>

<script>
    import FinalHomeTop from "../../.././components/SpecialFundCommon/FinalExpert/FinalHomeTop"
    import FinalNav from "../../.././components/SpecialFundCommon/FinalExpert/FinalNav"
    import FuShenList from "../../.././components/SpecialFundCommon/FinalExpert/FuShenList"
    import HeadFooter from "../../.././components/HomeCommon/HeadFooter"
    export default {
        name: "FuShen",
        data(){
            return{
                showTitle:"FuShen"
            }
        },
        components:{
            FinalHomeTop,
            FinalNav,
            FuShenList,
            HeadFooter
        },
        created:function(){

        },

    }
</script>

<style lang = scss scoped>
    .FuShenAll{
        background: #FFFFFF;
        .FuShen{
            width: 1060px;
            min-height: 600px;
            padding: 0;
            margin: 30px auto;
        }
    }

</style>