<template>
  <div class="MyMessageList">
    <div class="MyMessageList-title">
        我的信息
    </div>
    <div class="MyMessageList-notice">
        友情提示:多张图片上传请粘贴到word文档中再上传即可
    </div>
    <div class="MyMessageList-form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="登录名" prop="uLoginName">
          {{ruleForm.uLoginName}}
        </el-form-item>
        <el-form-item label="单位名称" prop="u_name">
          <el-input v-model="ruleForm.u_name"></el-input>
        </el-form-item>
        <el-form-item label="单位类别" prop="u_type">
          <el-radio-group v-model="ruleForm.u_type">
            <el-radio label="hy"></el-radio>
            <el-radio label="gk"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="单位地址" prop="u_addr">
          <el-input v-model="ruleForm.u_addr"></el-input>
        </el-form-item>
        <el-form-item label="法定代表人	" prop="u_legal">
          <el-input v-model="ruleForm.u_legal"></el-input>
        </el-form-item>
        <el-form-item label="法人电话" prop="u_legal_phone">
          <el-input v-model="ruleForm.u_legal_phone"></el-input>
        </el-form-item>
        <el-form-item label="联系人	" prop="u_contacts">
          <el-input v-model="ruleForm.u_contacts"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话	" prop="u_contacts_phone">
          <el-input v-model="ruleForm.u_contacts_phone"></el-input>
        </el-form-item>
        <el-form-item label="联系人手机	" prop="u_contacts_mobile">
          <el-input v-model="ruleForm.u_contacts_mobile"></el-input>
        </el-form-item>
        <el-form-item label="联系人传真	" prop="u_contacts_fax">
          <el-input v-model="ruleForm.u_contacts_fax"></el-input>
        </el-form-item>
        <el-form-item label="开户银行" prop="u_bank">
          <el-input v-model="ruleForm.u_bank"></el-input>
        </el-form-item>
        <el-form-item label="银行账号" prop="u_bank_account">
          <el-input v-model="ruleForm.u_bank_account"></el-input>
        </el-form-item>
        <el-form-item label="营业执照">
             <span class="MyMessageList-form-special">
               <a :href="isShow()" target="_blank">查看营业执照</a>
             </span>
             <div class="MyMessageList-form-upload">
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
             </div>
        </el-form-item>
        <el-form-item label="作业协议	">
            <span class="MyMessageList-form-special">
                <a :href="isShow2()" target="_blank">查看作业协议</a>
            </span>
            <div class="MyMessageList-form-upload">
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
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 65%;margin: 15px 0;padding: 8px 0" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    import { myMessage,SubmitMessage,fileUpload} from "@/common/api.js";
    export default {
        name: "MyMessageList",
        data() {
          return {
            ruleForm: {
                uLoginName:"",//登录名
                u_name:""  ,//单位名称
                u_type:"",//单位类别 gk 港口 hy 航运
                u_addr:"",//单位地址
                u_legal:"",//法定代表人
                u_legal_phone:"",//法人电话
                u_contacts:"", //联系人
                u_contacts_phone:"",//联系人电话
                u_contacts_mobile:"",//联系人手机
                u_contacts_fax:"",//联系人传真
                u_bank:"",//开户银行
                u_bank_account:"",//银行账号
                file_yyzz:"",//营业执照 域名/p/fund/storage/attachment/
                file_zyxy:"",//作业协议域名/p/fund/storage/attachment/
                file_yyzz2:"",//营业执照 域名/p/fund/storage/attachment/
                file_zyxy2:"",//作业协议域名/p/fund/storage/attachment/
            },
            rules: {
              uLoginName: [
                { required: true, message: '请输入登录名', trigger: 'blur' },
              ],
                u_name: [
                { required: true, message: '请输入单位名称', trigger: 'blur' },
              ],
              u_type: [
                { required: true, message: '请选择单位类别', trigger: 'blur' }
              ],
              u_addr: [
                { required: true, message: '请选择单位地址', trigger: 'change' }
              ],
              u_legal: [
                { required: true, message: '请输入法定代表人', trigger: 'blur' }
              ],
              u_legal_phone: [
                { required: true, message: '请输入法人电话', trigger: 'blur' }
              ],
              u_contacts: [
                { required: true, message: '请输入联系人', trigger: 'blur' }
              ],
              u_contacts_phone: [
                { required: true, message: '请输入联系人电话', trigger: 'blur' }
              ],
              u_contacts_mobile: [
                { required: true, message: '请输入联系人手机', trigger: 'blur' }
              ],
              u_contacts_fax: [
                { required: true, message: '请输入联系人传真', trigger: 'blur' }
              ],
              u_bank: [
                { required: true, message: '请输入开户银行', trigger: 'blur' }
              ],
              u_bank_account: [
                { required: true, message: '请输入银行账号', trigger: 'blur' }
              ]
            },
            uploadUrl: "",
          };
        },
        created:function(){
            this.getDate();
        },
        methods: {
           //获取数据
            getDate:function () {
                var _that  = this;
                myMessage().then(function(res){
                    if(res.data.code == 200){
                        _that.ruleForm.uLoginName = res.data.data.uLoginName;
                        _that.ruleForm.u_name = res.data.data.uInfo.u_name;
                        _that.ruleForm.u_type = res.data.data.uInfo.u_type;
                        _that.ruleForm.u_addr = res.data.data.uInfo.u_addr;
                        _that.ruleForm.u_legal = res.data.data.uInfo.u_legal;
                        _that.ruleForm.u_legal_phone = res.data.data.uInfo.u_legal_phone;
                        _that.ruleForm.u_contacts = res.data.data.uInfo.u_contacts;
                        _that.ruleForm.u_contacts_phone = res.data.data.uInfo.u_contacts_phone;
                        _that.ruleForm.u_contacts_mobile = res.data.data.uInfo.u_contacts_mobile;
                        _that.ruleForm.u_contacts_fax = res.data.data.uInfo.u_contacts_fax;
                        _that.ruleForm.u_bank = res.data.data.uInfo.u_bank;
                        _that.ruleForm.u_bank_account = res.data.data.uInfo.u_bank_account;

                        _that.ruleForm.file_yyzz2 = res.data.data.uInfo.file_yyzz;
                        _that.ruleForm.file_zyxy2 = res.data.data.uInfo.file_zyxy;
                    }
                }).catch(function(error){

                })
            },
            // 显示营业执照
            isShow:function(){
                // return "http://www.shisc.net/p/fund/storage/attachment/" + this.ruleForm.file_yyzz
                return serviceUrl + "attachment/" + this.ruleForm.file_yyzz2
            },
            //显示作业协议
            isShow2:function(){
                // return "http://www.shisc.net/p/fund/storage/attachment/" + this.ruleForm.file_zyxy
                return serviceUrl + "attachment/" + this.ruleForm.file_zyxy2
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
            //营业执照
            upload1(_upload){
                fileUpload(_upload).then(
                    res => {
                        if (res.data.code === 200) {
                            this.ruleForm.file_yyzz = res.data.data;
                            _upload.onSuccess()
                        }
                    }).catch((err) => {
                    _upload.onError()
                })
            },
            //作业协议
            upload2(_upload){
                fileUpload(_upload).then(
                    res => {
                        if (res.data.code === 200) {
                            this.ruleForm.file_zyxy = res.data.data;
                            _upload.onSuccess()
                        }
                    }).catch((err) => {
                     _upload.onError()
                })
            },
            //提交数据
           submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                  var that = this;
                  const datePrams = {
                      unitname:that.ruleForm.u_name, //单位名称
                      unittype:that.ruleForm.u_type,//单位类别
                      unitaddr:that.ruleForm.u_addr,//单位地址
                      legal:that.ruleForm.u_legal,//法定代表人
                      legalphone:that.ruleForm.u_legal_phone,//法人电话
                      contacts:that.ruleForm.u_contacts,//联系人
                      contactsphone:that.ruleForm.u_contacts_phone,//联系人电话
                      contactsmobile:that.ruleForm.u_contacts_mobile,//联系人手机
                      contactsfax:that.ruleForm.u_contacts_fax,//联系人传真
                      bank:that.ruleForm.u_bank,//开户银行
                      bankaccount:that.ruleForm.u_bank_account,//银行账号

                      yyzz:that.ruleForm.file_yyzz,//营业执照
                      zyxy:that.ruleForm.file_zyxy//作业协议
                  }
                  SubmitMessage('registerAction',datePrams).then(function(res){
                      if(res.data.code == 200){
                          that.$message({
                              message: '提交成功',
                              type: 'success',
                              duration:'1000'
                          });
                      }
                  }).catch(function(error){

                  })
              } else {
                return false;
              }
            });
          }
        }
    }
</script>

<style lang = scss scoped>
  .MyMessageList{
    width: 95%;
    margin: 0 auto;
    .MyMessageList-title{
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      color: #2258C2;
    }
    .MyMessageList-notice{
      text-align: left;
      font-size: 14px;
    }
    .MyMessageList-form{
      margin-top: 15px;
      width: 90%;
      margin-left: 0;
      margin-top: 25px;
      /deep/
      .el-button--primary{
        background: #2258c2;
      }
      /deep/
      .el-input{
        width: 85%;
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
      width: 80%;
      float: right;
    }
  }
</style>
