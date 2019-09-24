<template>
  <div class="ExistApplyList">
    <div class="ExistApplyList-title">
       已有申请
    </div>
    <div class="ExistApplyList-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="pname"
          label="项目名称"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="ptitle"
          label="申请单位"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话"
          align="center">
        </el-table-column>
        <el-table-column
          prop="pcontact"
          label="联 系 人	"
          align="center">
        </el-table-column>
        <el-table-column
          prop="insert_time"
          label="申请时间"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center">
          <template slot-scope="scope">
            <span>{{showStatus(scope.row)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
          width="180"
          align="center">
          <template slot-scope="scope">
            <el-button @click="submitClick(scope.row)" type="text" size="small"  v-if="scope.row.status == 0" style="color: #2258c2">提交</el-button>
            <el-button @click="editClick(scope.row)" type="text" size="small"  v-if="scope.row.status == 0" style="color: #2258c2">修改</el-button>
            <el-button @click="delteClick(scope.row)" type="text" size="small"  v-if="scope.row.status == 0" style="color: #2258c2">删除</el-button>
            <el-button @click="messageClick(scope.row)" type="text" size="small"  v-if="scope.row.status == 3" style="color: #2258c2">消息</el-button>
            <el-button @click="downClick()" type="text" size="small"  v-if="scope.row.status == 2" style="color: #2258c2">下载申请表</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--弹框-->
      <el-dialog
             :visible.sync="dialogVisible"
              width="55%"
             :modal='modal'
             :closeOnClickModal='modal'
             class="ExistApplyApp"
             >
          <div style="margin: 0 auto;padding: 0 25px">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
              <el-form-item label="项目名称" prop="entryName">
                <el-input v-model="ruleForm.entryName" placeholder="entryName"></el-input>
              </el-form-item>
              <el-form-item label="申报单位" prop="declaringUnit">
                <el-input v-model="ruleForm.declaringUnit" placeholder="申报单位"></el-input>
              </el-form-item>
              <el-form-item label="法定代表人	" prop="legalRepresentative">
                <el-input v-model="ruleForm.legalRepresentative"  placeholder="法定代表人"></el-input>
              </el-form-item>
              <el-form-item label="联系人	" prop="contacts">
                <el-input v-model="ruleForm.contacts"  placeholder="联系人"></el-input>
              </el-form-item>
              <el-form-item label="电话	" prop="telephone">
                <el-input v-model="ruleForm.telephone"  placeholder="电话"></el-input>
              </el-form-item>
              <el-form-item label="手机	" prop="cellPhone">
                <el-input v-model="ruleForm.cellPhone"  placeholder="手机"></el-input>
              </el-form-item>
              <el-form-item label="传真	" prop="contactFax">
                <el-input v-model="ruleForm.contactFax"  placeholder="传真"></el-input>
              </el-form-item>
              <el-form-item label="申报表" prop="">
                  <span style="padding-right: 5px">查看</span>
                  <span class="MyMessageList-form-special">
                       <a  target="_blank">申报表</a>
                  </span>
                  <!--上传-->
                   <div class="MyMessageList-form-upload">
                        <el-upload
                                class="upload-demo"
                                :action="uploadUrl"
                                :before-upload="beforeUpload"
                                :http-request="upload1"
                                :limit="1"
                                :show-file-list="true">
                          <el-button  size="small">点击上传</el-button>
                        </el-upload>
                   </div>
              </el-form-item>

              <el-form-item label="营业执照或社会统一信用代码证书	" prop="">
                <span style="padding-right: 5px">查看</span>
                <span class="MyMessageList-form-special">
                    <a  target="_blank">作业协议</a>
                </span>
                <div class="MyMessageList-form-upload">
                    <el-upload
                          class="upload-demo"
                          :action="uploadUrl"
                          :before-upload="beforeUpload"
                          :http-request="upload2"
                          :limit="1"
                          :show-file-list="true">
                      <el-button   size="small">点击上传</el-button>
                  </el-upload>
                </div>
              </el-form-item>
              <el-form-item label="项目创新及社会效益证明材料	" prop="">
                <span style="padding-right: 5px">查看</span>
                <span class="MyMessageList-form-special">
                    <a  target="_blank">项目创新及社会效益证明材料</a>
                </span>
                <div  class="MyMessageList-form-upload">
                  <el-upload
                          class="upload-demo"
                          :action="uploadUrl"
                          :before-upload="beforeUpload"
                          :http-request="upload3"
                          :limit="1"
                          :show-file-list="true">
                    <el-button   size="small">点击上传</el-button>
                  </el-upload>
                </div>
              </el-form-item>

              <el-form-item label="项目介绍PPT" prop="">
                <span style="padding-right: 5px">查看</span>
                <span class="MyMessageList-form-special">
                    <a  target="_blank">项目介绍PPT</a>
                </span>
                <div  class="MyMessageList-form-upload">
                   <el-upload
                          class="upload-demo"
                          :action="uploadUrl"
                          :before-upload="beforeUpload"
                          :http-request="upload4"
                          :limit="1"
                          :show-file-list="true">
                     <el-button   size="small">点击上传</el-button>
                  </el-upload>
                </div>
              </el-form-item>
              <el-form-item label="项目介绍视频" prop="">
                <span style="padding-right: 5px">查看</span>
                <span class="MyMessageList-form-special">
                    <a  target="_blank">项目介绍视频</a>
                </span>
                <div  class="MyMessageList-form-upload">
                   <el-upload
                          class="upload-demo"
                          :action="uploadUrl"
                          :before-upload="beforeUpload2"
                          :http-request="upload5"
                          :limit="1"
                          :show-file-list="true"
                  >
                     <el-button   size="small">点击上传</el-button>
                  </el-upload>
                </div>

              </el-form-item>
              <div class="MyMessageList-form-button" style="width: 300px;margin: 0 auto;margin-top: 45px;overflow: hidden">
                  <el-button type="primary" size="large" @click="submitForm('ruleForm')" style="float: left;background: #2258c2;">保存</el-button>
                  <el-button type="primary"  size="large" @click="resetForm('ruleForm')" style="float: right;background: #2258c2;">重置</el-button>
              </div>
            </el-form>
          </div>

    </el-dialog>
  </div>
</template>

<script>
 import {existApplyDate,editExistApplyDate,submitExistApplyDate,delteExistApplyDate,editExislyPush,fileUpload} from "@/common/api.js";
  export default {
    name: "ExistApplyList",
    data(){
      return{
        tableData: [],
        dialogVisible:true,
        modal:true,
        //编辑弹框
        ruleForm: {
            entryName:"",
            declaringUnit: '',
            legalRepresentative: '',
            contacts: '',
            telephone:"",
            cellPhone:"",
            contactFax:"",

            unit_soc:"",
            unit_commercial:'',
            unit_qita:"",
            unit_faren:"",
            unit_video:""
        },
        rules: {
            entryName: [
                { required: true, message: '请输入项目名称', trigger: 'blur' },
            ],
            declaringUnit: [
                { required: true, message: '请输入申报单位', trigger: 'blur' },
            ],
            legalRepresentative: [
                { required: true, message: '请输入法定代表人', trigger: 'blur' }
            ],
            contacts: [
                { required: true, message: '请输入联系人', trigger: 'change' }
            ],
            telephone: [
                { required: true, message: '请输入手机', trigger: 'blur' }
            ],
            cellPhone: [
                { required: true, message: '请输入电话', trigger: 'blur' }
            ],
            contactFax: [
                { required: true, message: '请输入传真', trigger: 'blur' }
            ]
        },
        uploadUrl:"",

      }
    },
    created:function(){
        this.getDate();
    },
    methods:{
        //显示状态
        showStatus:function(row){
            if(row.status == 0){
                return "草稿 "
            }else if(row.status == 1){
                return "已提交 "
            }else if(row.status == 2){
                return "通过待专家评选"
            }else if(row.status == 3){
                return "撤回"
            }else if(row.status == 4){
                return "未通过"
            }else {

            }
        },
      //获取数据
      getDate:function () {
          var that  = this;
          existApplyDate().then(function(res){
              if(res.data.code == 200){
                 that.tableData = res.data.data
              }
          }).catch(function(error){

          })
      },
      //下载
      downClick(){
          location.href = '../../../excelTemplate/HyDemo.doc';
      },
      //点击编辑按钮
      editClick(row) {
          this.$store.commit('setEditId',row.id);
          this.editDate()
      },
      // 调用编辑接口
      editDate(){
          var that = this;
          const datePrams = {
              id:that.$store.state.fund.edit_id//项目id
          }
          editExistApplyDate('editapply',datePrams).then(function(res){
              if(res.data.code == 200){
                   that.ruleForm.entryName = res.data.data[0].pname//项目名称
                   that.ruleForm.declaringUnit = res.data.data[0].ptitle//申报单位
                   that.ruleForm.legalRepresentative = res.data.data[0].pman//法定代表人
                   that.ruleForm.contacts = res.data.data[0].pcontact//联系人
                   that.ruleForm.cellPhone = res.data.data[0].phone//电话
                   that.ruleForm.telephone = res.data.data[0].pnumber//手机
                   that.ruleForm.contactFax = res.data.data[0].ptax//传真

                   that.ruleForm.unit_soc = res.data.data[0].unit_soc//申报表
                   that.ruleForm.unit_commercial = res.data.data[0].unit_commercial//营业执照或社会统一信用代码证书
                   that.ruleForm.unit_qita = res.data.data[0].unit_qita//项目创新及社会效益证明材料
                   that.ruleForm.unit_faren = res.data.data[0].unit_faren//项目介绍PPT
                   that.ruleForm.unit_video = res.data.data[0].unit_video//项目介绍视频

                   //展开弹框
                  that.dialogVisible = true;
            }
          }).catch(function(error){

          })
      },

        //上传前进行校验
        beforeUpload(file) {
            var testmsg = file.name.substring(file.name.lastIndexOf('.')+1)
            const extension1 = testmsg === 'jpg'
            const extension2 = testmsg === 'png'
            const extension3= testmsg === 'gif'

            const extension4 = testmsg === 'xls'
            const extension5 = testmsg === 'xlsx'
            const extension6 = testmsg === 'txt'
            const extension7 = testmsg === 'ppt'
            const extension8 = testmsg === 'pdf'
            const extension9 = testmsg === 'doc'
            const extension10 = testmsg === 'docx'

            if(!extension1 && !extension2 && !extension3 && !extension4  && !extension5 && !extension6  && !extension7 && !extension8  && !extension9 && !extension10) {
                this.$message({
                    message: '上传文件只能是 jpg、png、gif、xls、xlsx、ppt、txt、ppt、pdf、pdf、doc、docx格式!',
                    type: 'warning'
                });
                return false;
            }
            const isLt2M = file.size / 1024 / 1024 < 2
            if(testmsg === 'jpg' || testmsg === 'png' || testmsg === 'gif'){
                if(!isLt2M) {
                    this.$message({
                        message: '上传文件大小不能超过 2MB!',
                        type: 'warning'
                    });
                    return false;
                }
            }
            const isLt8M = file.size / 1024 / 1024  < 8;
            if(testmsg === 'xls' || testmsg === 'xlsx' || testmsg === 'txt' || testmsg === 'ppt' || testmsg === 'pdf' || testmsg === 'doc' || testmsg === 'docx'){
                if(!isLt8M) {
                    this.$message({
                        message: '上传文件大小不能超过 8MB!',
                        type: 'warning'
                    });
                    return false;
                }
            }

        },
        beforeUpload2(file) {
            const isLt50M = file.size / 1024 / 1024  < 50;
            if (['video/mp4', 'video/ogg', 'video/flv','video/avi','video/wmv','video/rmvb'].indexOf(file.type) == -1) {
                this.$message.error('请上传正确的视频格式');
                return false;
            }
            if (!isLt50M) {
                this.$message.error('上传视频大小不能超过50MB哦!');
                return false;
            }
        },
        //申报表
        upload1(_upload){
            fileUpload(_upload).then(
                res => {
                    if (res.data.code === 200) {
                        this.ruleForm.unit_soc = res.data.data
                        _upload.onSuccess()
                    }
                }).catch((err) => {
                _upload.onError()
            })
        },
        //营业执照或社会统一信用代码证书
        upload2(_upload){
            fileUpload(_upload).then(
                res => {
                    if (res.data.code === 200) {
                        this.ruleForm.unit_commercial = res.data.data
                        _upload.onSuccess()
                    }
                }).catch((err) => {
                _upload.onError()
            })
        },
        // 项目创新及社会效益证明材料
        upload3(_upload){
            fileUpload(_upload).then(
                res => {
                    if (res.data.code === 200) {
                        this.ruleForm.unit_qita = res.data.data
                        _upload.onSuccess()
                    }
                }).catch((err) => {
                _upload.onError()
            })
        },
        // 项目介绍PPT
        upload4(_upload){
            fileUpload(_upload).then(
                res => {
                    if (res.data.code === 200) {
                        this.ruleForm.unit_faren = res.data.data
                        _upload.onSuccess()
                    }
                }).catch((err) => {
                _upload.onError()
            })
        },
        // 项目介绍视频
        upload5(_upload){
            fileUpload(_upload).then(
                res => {
                    if (res.data.code === 200) {
                        this.ruleForm.unit_video = res.data.data
                        _upload.onSuccess()
                    }
                }).catch((err) => {
                _upload.onError()
            })
        },
        //编辑后再提交按钮
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var that = this;
                    const datePrams = {
                        pname:that.ruleForm.entryName, //项目名称
                        ptitle:that.ruleForm.declaringUnit,//申报单位
                        pman:that.ruleForm.legalRepresentative,//法定代表人
                        pcontact:that.ruleForm.contacts,//联系人
                        phone:that.ruleForm.cellPhone,//电话
                        pnumber:that.ruleForm.telephone,//手机
                        ptax:that.ruleForm.contactFax,//传真

                        unit_soc:that.ruleForm.unit_soc,//申报表
                        unit_commercial:that.ruleForm.unit_commercial,//营业执照或社会统一信用代码证书
                        unit_qita:that.ruleForm.unit_qita,//项目创新及社会效益证明材料
                        unit_faren:that.ruleForm.unit_faren,//项目介绍PPT
                        unit_video:that.ruleForm.unit_video//项目介绍视频

                    }
                    editExislyPush('hyupdate',datePrams).then(function(res){
                        if(res.data.code == 200){
                             //提交成功后，关闭编辑弹框
                            that.dialogVisible = false;
                            that.$message({
                                message: '提交成功',
                                type: 'success',
                                duration:'1000'
                            });
                        }else {
                            that.$message({
                                message:'提交失败',
                                type: 'error',
                                duration:'1000'
                            });
                        }
                    }).catch(function(error){

                    })

                } else {
                    return false;
                }
            });
        },
        //点击重置按钮
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //点击提交按钮
        submitClick(row){
            var that = this;
            const datePrams = {
                id:row.id//项目id
            }
            submitExistApplyDate('subapply',datePrams).then(function(res){
                if(res.data.code == 200){
                    console.log(res);
                     //提交后重新获取数据
                    that.getDate()
                }
            }).catch(function(error){

            })
        },
        // 点击删除按钮
        delteClick(row){
            var that = this;
            const datePrams = {
                id:row.id//项目id
            }
            delteExistApplyDate('delapply',datePrams).then(function(res){
                if(res.data.code == 200){
                    console.log(res);
                    //删除后重新获取数据
                    that.getDate()
                }
            }).catch(function(error){

            })
        },
       //点击消息按钮
        messageClick(row){
            var that = this;
            if(row.notes == ""){
                that.$message("暂无消息");
            }else {
                that.$message(row.notes);
            }

        }

    }
  }
</script>

<style  lang = scss scoped>
  .ExistApplyList{
    width: 95%;
    margin: 0 auto;
    .ExistApplyList-title{
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      color: #2258C2;
    }
    .ExistApplyList-table{
      margin-top: 10px;
    }
  }
  .ExistApplyApp{
    /deep/
    .el-dialog__wrapper{
      top: -100;
    }
    /deep/
    .el-dialog{
      margin-top: 3vh !important;
    }
    /deep/
    .el-dialog__header{
      text-align: center;
    }
    /deep/
    .el-dialog__body{
      min-height: 580px;
      /deep/
      .el-form-item__label{
        width: 25% !important;
      }
      .el-form-item__content{
        width: 65% !important;
        display: inline-block;
        margin-left: 10px !important;
      }
      /deep/
      .el-input{
        width: 85%;
      }
    }
    /deep/
    .el-upload__tip{
      display: inline-block;
      padding-left: 5px;
    }
  }
  .MyMessageList-form-special{
    a{
      color: #000000;
      cursor: pointer;
    }
  }
  .MyMessageList-form-special{
    a:hover{
      color: silver;
    }
  }
  .MyMessageList-form-upload{
    display: inline-block;
    width: 60%;
    float: right;
    margin-left: 15px;
    /deep/
    .el-upload-list{
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
