<template>
  <div>
    <LogRegNav></LogRegNav>
    <LogRegBac :parentToChild="value3"></LogRegBac>
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
    name: "ForgetPwd",
    data(){
      return{
        value3:3
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
