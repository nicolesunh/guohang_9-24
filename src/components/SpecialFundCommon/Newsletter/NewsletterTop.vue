<template>
  <div class="NewsletterTop">
    <div class="NewsletterTopAll">
      <div class="NewsletterTopAllTitle">
         信息专报-文章列表
      </div>
        <div class="log2" v-if="viewShows">
           <span class="userIconOut">
              <el-dropdown trigger="click">
                  <span class="el-dropdown-link" >
                        <img src="../../.././assets/img/usericon.png" alt="" class="userIconImg" style="vertical-align: middle;">
                        <label style="color: #ff8a00" class="userIconTitle">
                           {{userName}}
                        </label>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                   </span>
                  <el-dropdown-menu slot="dropdown" @click.native="logOut()">
                      <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
           </span>
        </div>
    </div>
  </div>
</template>

<script>
  import { logOut } from "@/common/api.js";
  export default {
    name: "NewsletterTop",
    data(){
      return{
        userName:"",
        viewShows:false
      }
    },

    created:function () {
        this.userName = this.$store.state.common.userName;
        this.isShow();
    },
    methods:{
       isShow:function(){
            if(this.$store.state.common.userName  == "" || this.$store.state.common.userName  == null){
                this.viewShows = false;
            }else {
                this.viewShows = true
            }
      },
      logOut:function () {
          var _that  = this;
          logOut().then(function(res){
              if(res.data.code == 200){
                  _that.$store.commit('removeUserName');  //清除用户名
                  _that.$store.commit('removeManageToken');  //token
                  _that.isShow();
                  _that.$message({
                      message: '退出成功',
                      type: 'success',
                      duration:'1000'
                  });
                  //跳转到首页
                  _that.$router.push({
                      name: 'Report',
                      path:"/p/report",
                  })
                  location.reload();//刷新下页面
              }
          }).catch(function(error){

          })
      }
    }
  }
</script>

<style lang = scss scoped>
  .NewsletterTop{
    background: #ffffff;
    border-bottom:1px solid #E5E5E5;
    .NewsletterTopAll{
      width: 1250px;
      margin: 0 auto;
      height: 60px;
      line-height: 60px;
      overflow: hidden;

      .NewsletterTopAllTitle{
        color: #5e5e5e;
        background-color: transparent;
        margin-top: 5px;
        float: left;
        padding: 15px 15px;
        font-size: 18px;
        line-height: 20px;
        font-weight: bold;
      }
      .log2{
            float: right;
            display: inline-block;
            padding-right: 60px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            .userIconImg{
                cursor: pointer;
                margin: 0 3px;
            }
            .userIconTitle{
                cursor: pointer;
                margin: 0 3px;
            }
            .userIconOut{
                cursor: pointer;
                margin: 0 3px;
            }
        }
    }
  }

</style>
