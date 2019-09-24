<template>
    <div class="ApplyAlreadyList">
      <div class="ApplyAlreadyList-title">
          已有申请
      </div>
      <div class="ApplyAlreadyList-table">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="b_period"
            label="业务期间"
            align="center"
           >
          </el-table-column>
          <el-table-column
            label="申请单位"
            align="center"
            width="200"
           >
            <template slot-scope="scope">
               <span>{{unitName}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="datetime"
            label="申请时间" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <span  v-if="scope.row.status < 2" @click="handleEdit(scope.$index, scope.row)" style="padding: 0 8px;cursor: pointer;color:#2258c2;">编辑</span>
            </template>
          </el-table-column>
          <el-table-column
            label="预览打印"
            align="center"
            width="165">
            <template slot-scope="scope">
              <span @click="handleClear(scope.row.b_period,scope.row.u_id)" style="padding: 0 5px;cursor: pointer;color:#2258c2;">
                 清单
              </span>
              <span @click="handleQuest(scope.row.b_period,scope.row.u_id)" style="padding: 0 5px;cursor: pointer;color:#2258c2;">
                申请表
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态" align="center">
            <template slot-scope="scope">
               <span>{{showStatus(scope.row)}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="ApplyAlreadyList-text">
        <h3>来自管理员的留言：</h3>
        <div class="ApplyAlreadyList-textArea">
           <p>{{comment}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    import { userDate} from "@/common/api.js";
    export default {
        name: "ApplyAlreadyList",
        data(){
          return{
            tableData:[],
            comment:"",
            unitName:"",
            qinDan:""  ,
            reqTable:"",
            u_id:"" //公司ID

          }
        },
        created:function(){
            this.getDate();
        },
        methods:{
          //显示状态
          showStatus:function(row){
            if(row.status == -1){
                return "废弃"
            }else if(row.status == 0){
                return "草稿"
            }else if(row.status == 1){
                return "退回"
            }else if(row.status == 2){
                return "已提交"
            }else {
                return "已审核"
            }
        },
          //获取数据
          getDate:function () {
            var _that  = this;
            userDate().then(function(res){
                if(res.data.code == 200){
                    _that.tableData = res.data.data.myBusiness;
                    _that.comment = res.data.data.comment;
                    _that.unitName = res.data.data.unitName;
                    _that.u_id =  res.data.data.myBusiness[0].u_id;
                    _that.$store.commit('setUid',_that.u_id); //存储公司ID

                }
            }).catch(function(error){

            })
        },
       //清单
        handleClear(b_period, u_id) {
            let that = this;
            // 接口参数存入store
            that.$store.commit("setInventoryPeriod", { b_period, u_id });
            // 跳到清单
            that.$router.push(`/p/fund/public/inventory/${u_id}`);
            console.log(b_period, u_id);
        },
        // 跳到申请表
        handleQuest(b_period, u_id) {
            let that = this;
            // 接口参数存入store
            that.$store.commit("setApplyParam", { b_period, u_id });
            // 跳到申请表
            that.$router.push(`/p/fund/public/applyForm/${u_id}`);
            console.log(b_period, u_id);
        },

        }
    }
</script>

<style  lang = scss scoped>
  .ApplyAlreadyList{
    width: 95%;
    margin: 0 auto;
    .ApplyAlreadyList-title{
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      color: #2258C2;
    }
    .ApplyAlreadyList-table{
       margin-top: 10px;
    }
    .ApplyAlreadyList-text{
      h3{
        font-size: 14px;
        font-weight: bold;
        padding: 10px 0;
      }
      .ApplyAlreadyList-textArea{
         width: 100%;
         height: 150px;
         border: 1px solid #EBEEF5;
         resize:none;
         text-align: left;
         font-size: 14px;
         margin-bottom: 25px;
         text-indent:25px;
         p{
            margin-top: 5px;
         }
      }
    }
  }

</style>
