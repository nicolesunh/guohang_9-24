<template>
  <div class="searchAll">
      <HeadTitle :parentToChild="showTitle"></HeadTitle>
      <HeadSearch :parentToChild="showImg"></HeadSearch>
      <div class="searchAll-list" id="searchAll-list">
         <p class="left-bd">相关搜索结果：共 <span style="color: red">{{totalCount}}</span>条数据<span v-if="totalCount >= 30">,仅显示前30条</span></p>
         <ul class="">
              <li v-for="(item2,index) in dateList" :key="index"  @click="ss_downClick(item2._source.id)">
                 <span class="li-bd" v-html="item2.highlight.post_title[0]"></span>
                 <span style="margin-left: 25px;font-size: 13px;color:#2258c2">{{checkFormat(item2._source.post_date)}}</span>
              </li>
          </ul>
      </div>
      <HeadFooter :parentToChild="showSearch"></HeadFooter>
      <LenWebsite></LenWebsite>
  </div>
</template>

<script>
  import { searchInfo } from "@/common/api.js";
  import HeadTitle from ".././components/HomeCommon/HeadTitle"
  import HeadSearch from ".././components/HomeCommon/HeadSearch"
  import HeadFooter from ".././components/HomeCommon/HeadFooter"
  import {mapState} from 'vuex'
  import {timeFormat} from '@/common/common.js';
  import LenWebsite from ".././components/HomeCommon/LenWebsite"
  export default {
    name: 'Search',
    data(){
      return{
        input:"",
        label:"",
        showImg:"IndexHome",
        showTitle:"Search",
        showSearch:"Search",
        dateList:[],
        key_word:null,
        totalCount:0,
        
      }
    },
    computed:{
        ...mapState({
          searchtext: state => state.home.searchtext,
        }),

    },
    components: {
      HeadTitle:HeadTitle,
      HeadSearch:HeadSearch,
      HeadFooter:HeadFooter,
      LenWebsite:LenWebsite
    },
    mounted() {

    },
    methods:{
          searchKey() {
              let _that  = this;
              const datePrams = {
                  'key_word':_that.searchtext.searchtext,
              }
              searchInfo('search_list',datePrams).then(function(res){
                  if(res.data.code == 200){
                      _that.dateList = res.data.data.hits.hits;
                      _that.totalCount = res.data.data.hits.total.value;
                  }
              }).catch(function(error){

              })
            },
          checkFormat(val){
                return timeFormat(val);
          },
          ss_downClick:function (ID) {
                this.id = ID
                this.$store.commit('setDetailId',this.id);
                this.$router.push('/detail/' + ID)
            }
        },
     watch: {
        searchtext:{
              handler:function(newval,oldVal){
                  this.searchKey();
              },
              immediate:true,
              deep:true
           }
        }
    }
</script>
<style lang = scss scoped>
    .searchAll{
        width: 100%;
        /deep/
        #searchAll-list{
            width: 1060px !important;
            margin: 0 auto;
            padding: 0 !important;
        }
        /deep/
        .searchAll-list{
            width: 1060px !important;
            margin: 0 auto;
            background: #ffffff;
            min-height: 500px;
            .left-bd{
                width: 65%;
                overflow: hidden;
                padding: 10px 0 10px 32px;
                font-size: 16px;
                font-weight: 500;
            }
            ul{
                width: 100%;
                li{
                    width: 92%;
                    padding: 10px 0;
                    border-bottom: 1px dashed #ebeef5;
                    margin-left:65px;
                    :hover{
                        color: #4074C0;
                    }
                    .li-bd{
                        font-size: 14px;
                        color: black;
                        margin-bottom: 10px;
                        font-weight: 400;
                        cursor: pointer;
                        /deep/
                        mark{
                            background: none !important;
                            color: red !important;
                        }

                    }
                }
            }
        }
    }
</style>
