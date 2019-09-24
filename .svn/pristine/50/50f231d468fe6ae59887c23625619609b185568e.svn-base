<template>
    <div class="Report">
      <NewsletterTop></NewsletterTop>
      <div class="Report-bd">
        <div class="Report-bd-top">
           <span>文章列表</span>
        </div>
        <div class="Report-bd-header">
            <div style="display: inline-block;width: 4%;overflow: hidden;margin: 0 5px;cursor: pointer" class="edit_add"  @click="addClick">
              <img src="../../.././assets/img/edit_add.png" alt="" style="vertical-align: text-top;margin-right: 3px">新增
            </div>
            <div style="display: inline-block;width: 17%;overflow: hidden;margin: 0 5px">
                <label style="display: inline-block;width: 35%;float: left;margin-top: 7px">开始日期</label>
                <el-date-picker
                  style="display: inline-block;width: 65%;float: right"
                  v-model="value1"
                  type="date"
                  size="small"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  placeholder="选择开始日期">
                </el-date-picker>
            </div>
            <div style="display: inline-block;width: 17%;overflow: hidden;margin: 0 8px">
               <label  style="display: inline-block;width: 35%;margin-top: 7px">结束日期</label>
                <el-date-picker
                  style="display: inline-block;width: 65%;float: right"
                  v-model="value2"
                  type="date"
                  size="small"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  placeholder="选择结束日期">
                </el-date-picker>
            </div>
            <div style="display: inline-block;width: 15%;overflow: hidden;margin: 0 8px">
              <label  style="display: inline-block;width: 35%;float: left;margin-top: 7px">所属组织</label>
              <el-input v-model="input1" size="small" placeholder="请输入所属组织" style="display: inline-block;width: 65%;float: right"></el-input>
            </div>
            <div style="display: inline-block;width: 12%;overflow: hidden;margin: 0 8px">
              <label  style="display: inline-block;width: 22%;float: left;margin-top: 7px">作者</label>
              <el-input v-model="input2" size="small" placeholder="请输入作者" style="display:inline-block;width:78%;float: right"></el-input>
            </div>
            <div style="display: inline-block;width: 12%;overflow: hidden;margin: 0 8px">
              <label  style="display: inline-block;width: 22%;float: left;margin-top: 7px">状态</label>
              <el-select v-model="selectValue" placeholder="请选择状态"  size="small" style="display: inline-block;width: 78%;float: left">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div style="display: inline-block;width: 12%;margin: 0 8px">
              <el-button type="primary" icon="el-icon-search" size="small" @click="getPageDate()">搜索</el-button>
            </div>
            <div style="display: inline-block;width: 8%;" class="report-check">
               <el-checkbox v-model="checked">只看自己</el-checkbox>
            </div>
        </div>
        <!--可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。-->
        <div class="Report-bd-table">
           <el-table
            :data="dateList"
            border
            style="width: 100%">
            <el-table-column
              prop="title"
              label="标题"
              width="220"
              align="center"
            >
              <template slot-scope="scope">
                  <p @click="titleClick(scope.row)" class="title-t" :class="{activeClass:changeColor == true}" >{{scope.row.title}}</p>
              </template>
            </el-table-column>
            <el-table-column
              prop="author_name"
              label="作者"
              width="100"
              align="center">
            </el-table-column>
           <!-- <el-table-column
                   prop="type"
                   label="文章来源"
                   width="100"
                   align="center">
                <template slot-scope="scope">
                    <span>{{fromAticle(scope.row)}}</span>
                </template>
            </el-table-column>-->
            <el-table-column
              prop="author_org"
              label="所属组织"
              width="200"
              enclosureClick     align="center">
            </el-table-column>
             <el-table-column
               prop="create_time"
               label="创建时间"
               width="180"
               align="center">
             </el-table-column>
             <el-table-column
               prop="enclosure"
               label="附件"
               width="230"
               align="center">
               <template slot-scope="scope">
                  <li v-for="item in scope.row.attachment" style="list-style: none;padding: 5px 0">
                      <a :href="item.link" style="color:rgb(85, 26, 139);">{{item.name}}</a>
                  </li>
               </template>
             </el-table-column>
             <el-table-column
               prop="state"
               label="状态"
               width="100"
               align="center">
                 <template slot-scope="scope">
                     <span>{{showStatus(scope.row)}}</span>
                 </template>
             </el-table-column>
             <el-table-column
               prop="publish"
               label="是否公开"
               width="100"
               align="center">
                 <template slot-scope="scope">
                     <span>{{isPublish(scope.row)}}</span>
                 </template>

             </el-table-column>
             <el-table-column
               label="操作"
               align="center">
               <template slot-scope="scope">
                     <el-button @click="delteClick(scope.row)" v-if="scope.row.state == 0" type="text" size="small">删除</el-button>
                     <el-button @click="editClick(scope.row)" v-if="scope.row.state == 0" type="text" size="small">编辑</el-button>
                     <el-button @click="postClick(scope.row)" v-if="scope.row.state == 0" type="text" size="small">发送</el-button>
                     <el-button @click="recieveClick(scope.row)" v-if="scope.row.state == '' || scope.row.state == 1" type="text" size="small">接收</el-button>
                     <el-button @click="resetClick(scope.row)" v-if="scope.row.state == -1" type="text" size="small">恢复</el-button>
               </template>
             </el-table-column>
          </el-table>
        </div>
        <div class="Report-bd-page">
          <div class="block">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="totalCount">
            </el-pagination>
          </div>
        </div>
      </div>
      <!--创建应用弹框-->
      <AddModal :dialogStatus = "addUserStatus" @on-result-change="onAddPermissionUserResult"></AddModal>
    </div>
</template>

<script>
    import NewsletterTop from "../../.././components/SpecialFundCommon/Newsletter/NewsletterTop"
    import AddModal from "../../.././components/SpecialFundCommon/Newsletter/AddModal"
    import {getPosts,getRecieve} from "@/common/api.js";
    export default {
        name: "Report",
        data(){
          return{
            value1: '', //开始日期
            value2:"",  //结束日期
            input1:"",   //所属组织
            input2:"",   //作者
            selectValue:"",  //状态
            //状态下拉框
            options: [
              {
              value: '',
              label: '全部'
            }, {
              value: 0,
              label: '草稿'
            }, {
                value: 1,
                label: '已发送'
            }, {
                value: 2,
                label: '已接收 '
            },{
                value: -1,
                label: '删除'
            }
            ],
            checked:"", //只看自己
            //分页
            currentPage:1,
            totalCount:null,
            pageSize:null,
            dateList:[],

            changeColor:false,
            //弹框
            addUserStatus: false,
          }
        },
        created:function(){
            this.getPageDate();
        },
        components: {
          NewsletterTop:NewsletterTop,
          AddModal:AddModal,
        },
        methods:{
         //显示状态
         showStatus:function(row){
            if(row.state == "") {
                return  true;  //显示接收按钮
            }else if(row.state == 0){
                return "草稿"   //显示编辑，发送，删除
            }else if(row.state == 1){
                return "已发送"  //显示接受
            }else if(row.state == 2){
                return "已接收"   //不显示任何东西
            }else if(row.state == -1){
                return "删除"   //显示恢复按钮
            }else{

            }
         },
         //是否公开
         isPublish:function(row){
            if(row.publish == 1) {
                return "公开"
            }else if(row.publish == 2){
                return "不公开"
            }
         },
        //文章来源
        fromAticle(row){
            if(row.type == 0) {
                return "发送人 发送给 接收人的 文章"
            }else if(row.type == 1){
                return "接收人 发送 给全体发送人的文章"
            }
        },
        //分页
        handleSizeChange(){

        },
        handleCurrentChange(val) {
            this.currentPage  = val;
            this.getPageDate();
        },
       //获取数据
         getPageDate:function(){
             var that = this;
             const datePrams = {
                 state:that.selectValue,  //状态
                 startDate:that.value1, //开始时间 格式 2019-09-18
                 endDate:that.value2, //结束时间 格式 2019-09-18
                 org:that.input1,//所属组织
                 author:that.input2, //作者
                 onlySelf:that.checked ,  //true 只看自己   false 看所有
                 page:that.currentPage, //当前页
             }
             getPosts('getPosts',datePrams).then(function(res){
                 if(res.data.code == 200){
                     that.dateList = res.data.data.data
                     that.totalCount = res.data.data.total;
                     that.pageSize = res.data.data.per_page;
                 }
             }).catch(function(error){

             })
         },
          //删除按钮
          delteClick(row) {
            console.log(row);
          },
          //编辑按钮
          editClick(row) {
            console.log(row);
          },
          //发送
          postClick(row) {
            console.log(row);
          },
          //接收
          recieveClick(row) {
             var that = this;
              const datePrams = {
                  id:row.id,  //状态
              }
              getRecieve('recievePost',datePrams).then(function(res){
                  if(res.data.code == 200){
                      console.log(res)
                      that.$message({
                          message: '接收成功',
                          type: 'success',
                          duration:'1000'
                      });
                      //重新获取数据
                      that.getPageDate();
                  }
              }).catch(function(error){

              })
          },
          //恢复
          resetClick(row) {
            console.log(row);
          },
          //点击标题
          titleClick(row) {
            console.log(row);
            //调取接口，改变row中的参数的状态

            //重新获取数据
          },

          //点击添加应用按钮，完善信息
          addClick:function () {
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
            });
            setTimeout(() => {
              loading.close();
              this.addUserStatus = true;  //展开应用弹框
            }, 100);
          },
          //弹框
          onAddPermissionUserResult: function (val) {
            this.addUserStatus = val;
          },

        }
    }
</script>

<style  lang = scss scoped>
  .Report{
    width: 100%;
    background: #ffffff;
    .Report-bd{
      width: 1250px;
      margin: 0 auto;
      padding: 20px 40px;
      margin-top: 45px;
      min-height: 800px;
      .Report-bd-top{
        background: #E0ECFF;
        height: 30px;
        line-height: 30px;
        text-align: left;
        border: 1px solid #95B8E7;
        border-bottom:none;
        font-size: 15px;
        font-weight: bold;
        color: #0E2D5F;
        span{
          margin-left: 10px;
        }
      }
      .Report-bd-header{
        background: #dddddd;
        height: 60px;
        display: flex;
        border: 1px solid #95B8E7;
        border-bottom:none;
        align-items: center;
        overflow: hidden;
        .edit_add{
          padding: 3px;
          border: 1px solid #dddddd;
        }
        .edit_add:hover{
          border-radius: 5px;
          background: #eaf2ff;
          border: 1px solid #b7d2ff;
          color: #000000;
        }
        /deep/
        .report-check .el-checkbox .el-checkbox__label{
            line-height: 20px;
            padding-left: 5px;
        }
      }
      .Report-bd-table{
        border: 1px solid #95B8E7;
        border-bottom: none;
        /deep/
        .el-table{
          .el-table__row{
            .el-table_1_column_1{
              .cell{
                cursor: pointer;
              }
              .title-t{
                  color: #0000EE;
              }
              .activeClass{
                  color: #551A8B;
              }
            }
            .el-table_1_column_5{
              .cell{
                cursor: pointer;
              }
            }
          }

        }

      }
      .Report-bd-page{
        border: 1px solid #95B8E7;
        height: 50px;
        display:flex;
        align-items:center;/*垂直居中*/
        /*justify-content: center;!*水平居中*!*/
        .block{
          margin-left: 10px;
        }
      }
    }
  }
</style>
