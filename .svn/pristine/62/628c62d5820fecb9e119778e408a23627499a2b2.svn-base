<template>
  <div class="MyMessageList">
    <div class="MyMessageList-top">
      <fieldset class="layui-elem-field">
        <legend>填表说明:</legend>
        <div class="layui-field-box">
          <ul>
            <li>1.请下载“申报表格”，填写完毕后在申报表格中上传。</li>
            <li>2.上传的视频格式为MP4格式(视频大小不超过100M)，营业执照或社会统一信用代码证书为JPG或者docx文件。</li>
            <li>3.所有项目填写完毕保存后，可在“已有申请”中编辑并提交，提交之后不可修改。</li>
          </ul>
          <el-button type="primary" size="small" style="background:#2258c2; margin-top: 5px">申报表格</el-button>
        </div>
      </fieldset>
    </div>

    <div class="MyMessageList-form">
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
        <el-form-item label="申报表	" prop="">
          <!--上传-->
          <el-upload
                  class="upload-demo"
                  :action="uploadUrl"
                  :before-upload="beforeUpload"
                  :http-request="upload1"
                  :limit="1"
                  :show-file-list="true">
            <el-button size="small">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">可以上传jpg/png/gif/txt/xls/xlsx/pdf/ppt/doc/docx文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="营业执照或社会统一信用代码证书	" prop="">
          <el-upload
                  class="upload-demo"
                  :action="uploadUrl"
                  :before-upload="beforeUpload"
                  :http-request="upload2"
                  :limit="1"
                  :show-file-list="true">
            <el-button size="small">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">可以上传jpg/png/gif/txt/xls/xlsx/pdf/ppt/doc/docx文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="项目创新及社会效益证明材料	" prop="">
          <el-upload
                  class="upload-demo"
                  :action="uploadUrl"
                  :before-upload="beforeUpload"
                  :http-request="upload3"
                  :limit="1"
                  :show-file-list="true">
            <el-button size="small">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">可以上传jpg/png/gif/txt/xls/xlsx/pdf/ppt/doc/docx文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="项目介绍PPT" prop="">
          <el-upload
                  class="upload-demo"
                  :action="uploadUrl"
                  :before-upload="beforeUpload"
                  :http-request="upload4"
                  :limit="1"
                  :show-file-list="true">
            <el-button size="small">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">可以上传jpg/png/gif/txt/xls/xlsx/pdf/ppt/doc/docx文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="项目介绍视频" prop="">
          <el-upload
                  class="upload-demo"
                  :action="uploadUrl"
                  :before-upload="beforeUpload2"
                  :http-request="upload5"
                  :limit="1"
                  :show-file-list="true"
                >
                  <el-button size="small">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">请保证视频格式正确，且不超过50M</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <div class="MyMessageList-form-button">
            <el-button type="primary" size="large" @click="submitForm('ruleForm')" class="MyMessageList-form-button1">保存</el-button>
            <el-button type="primary"  size="large" @click="resetForm('ruleForm')" class="MyMessageList-form-button2">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { Hytijiao,fileUpload} from "@/common/api.js";
  export default {
    name: "NewHyUserList",
    data() {
      return {
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
      };
    },
    methods: {
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
      //点击提交按钮
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
                  Hytijiao('hytijiao',datePrams).then(function(res){
                      if(res.data.code == 1){
                          that.$message({
                              message: '保存成功',
                              type: 'success',
                              duration:'1000'
                          });
                      }else if(res.data.code == 10){
                          that.$message({
                              message:'项目介绍视频和PPT至少一项不能为空',
                              type: 'error',
                              duration:'1000'
                          });
                      }else if(res.data.code == 3){
                          that.$message({
                              message:'上传类型错误',
                              type: 'error',
                              duration:'1000'
                          });
                      } else if(res.data.code == 4){
                          that.$message({
                              message:'文件过大',
                              type: 'error',
                              duration:'1000'
                          });
                      }else if(res.data.code == 5){
                          that.$message({
                              message:'提交失败',
                              type: 'error',
                              duration:'1000'
                          });
                      }else if(res.data.code == 6){
                          that.$message({
                              message:'上传错误' ,
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


    }
  }
</script>

<style lang = scss scoped>
  .MyMessageList{
    width: 95%;
    margin: 0 auto;
    .MyMessageList-top{
      .layui-elem-field {
        margin: 10px 0;
        padding: 0;
        border: 1px solid #e2e2e2;
        legend {
          margin-left: 20px;
          padding: 0 10px;
          font-size: 14px;
          color: #606266;
        }
        .layui-field-box {
          padding: 10px 15px;
         ul{
           li{
             font-size: 12px;
             padding: 5px 0;
           }
         }
        }
      }
    }
    .MyMessageList-form{
      margin-top: 15px;
      width: 90%;
      margin-left: 0;
      margin-top: 25px;
      /deep/
      .el-form .el-form-item{
        .el-form-item__label{
          width: 185px !important;
        }
        .el-form-item__content{
          display: flex;
        }

      }
      /deep/
      .el-input{
        width: 85%;
      }
    }
    .MyMessageList-form-button{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content:center;
      .MyMessageList-form-button1{
        margin: 0 25px;
        background: #2258c2;
      }
      .MyMessageList-form-button2{
        margin: 0 25px;
        /*background:#009688;*/
        background: #ffffff !important;
        color: #000000  !important;
        border: 1px solid #C9C9C9;
      }
    }
    .MyMessageList-form-special{
      color: #000000;
      cursor: pointer;
    }
    .MyMessageList-form-special:hover{
      color: silver;
    }
    .MyMessageList-form-upload{
      display: inline-block;
      width: 80%;
      float: right;
    }
  }
</style>
