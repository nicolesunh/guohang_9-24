<template>
    <div>
      <LogRegNav :parentToChild="addClass"></LogRegNav>
      <LogRegBac :parentToChild="value2"></LogRegBac>
      <LogRegBottom></LogRegBottom>
      <LenWebsite></LenWebsite>
    </div>
</template>

<script>
  import LogRegNav from ".././components/LogRgister/LogRegNav"
  import LogRegBac from ".././components/LogRgister/LogRegBac"
  import LogRegBottom from ".././components/LogRgister/LogRegBottom"
  import LenWebsite from ".././components/HomeCommon/LenWebsite"
  export default {
    name: "Register",
    data(){
      return{
        value2:2,
        addClass:"Register"
      }
    },
    components: {
      LogRegNav:LogRegNav,
      LogRegBac:LogRegBac,
      LogRegBottom:LogRegBottom,
      LenWebsite:LenWebsite
    },
    created:function () {

    },
    methods:{

    }
  }
</script>

<style lang = scss scoped>

</style>
