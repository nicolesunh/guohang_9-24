<template>
  <div class="userDetailAdmin">
    <div class="content">
      <div class="userDetailAdmin-title">用户详情</div>
      <div class="userDetailAdmin-form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          label-position="left"
          class="demo-ruleForm"
          size="mini"
        >
          <el-form-item label="登录名" prop="uLoginName">{{ruleForm.uLoginName}}</el-form-item>
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
            <span class="userDetailAdmin-form-special">
              <a :href="isShow()" target="_blank">查看营业执照</a>
            </span>
            <div class="userDetailAdmin-form-upload">
              <el-upload
                class="upload-demo"
                :action="uploadUrl"
                :before-upload="beforeUpload"
                :http-request="upload1"
                :show-file-list="true"
                :limit="1"
              >
                <el-button size="small" type="primary" plain>点击上传</el-button>
                <div slot="tip" class="el-upload__tip">可以上传jpg/png/gif/txt/xls/xlsx/pdf文件，且不超过2M</div>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item label="作业协议	">
            <span class="userDetailAdmin-form-special">
              <a :href="isShow2()" target="_blank">查看作业协议</a>
            </span>
            <div class="userDetailAdmin-form-upload">
              <el-upload
                class="upload-demo"
                :action="uploadUrl"
                :before-upload="beforeUpload"
                :http-request="upload2"
                :show-file-list="true"
                :limit="1"
              >
                <el-button size="small" type="primary" plain>点击上传</el-button>
                <div slot="tip" class="el-upload__tip">可以上传jpg/png/gif/txt/xls/xlsx/pdf文件，且不超过2M</div>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              plain
              style="width: 75%;margin: 15px 0;padding: 8px 0"
              @click="submitForm('ruleForm')"
            >提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { userinfo, SubmitMessageAdmin, fileUpload } from "@/common/api.js";
export default {
  name: "userDetailAdmin",
  data() {
    return {
      // 用户id
      id: 0,
      file_yyzz: "", //存储上传后的营业执照
      file_zyxy: "", //存储上传后的作业协议
      ruleForm: {
        uLoginName: "", //登录名
        u_name: "", //单位名称
        u_type: "", //单位类别 gk 港口 hy 航运
        u_addr: "", //单位地址
        u_legal: "", //法定代表人
        u_legal_phone: "", //法人电话
        u_contacts: "", //联系人
        u_contacts_phone: "", //联系人电话
        u_contacts_mobile: "", //联系人手机
        u_contacts_fax: "", //联系人传真
        u_bank: "", //开户银行
        u_bank_account: "", //银行账号
        file_yyzz: "", //营业执照 域名/p/fund/storage/attachment/
        file_zyxy: "" //作业协议域名/p/fund/storage/attachment/
      },

      rules: {
        uLoginName: [
          { required: true, message: "请输入登录名", trigger: "blur" }
        ],
        u_name: [
          { required: true, message: "请输入单位名称", trigger: "blur" }
        ],
        u_type: [
          { required: true, message: "请选择单位类别", trigger: "blur" }
        ],
        u_addr: [
          { required: true, message: "请选择单位地址", trigger: "change" }
        ],
        u_legal: [
          { required: true, message: "请输入法定代表人", trigger: "blur" }
        ],
        u_legal_phone: [
          { required: true, message: "请输入法人电话", trigger: "blur" }
        ],
        u_contacts: [
          { required: true, message: "请输入联系人", trigger: "blur" }
        ],
        u_contacts_phone: [
          { required: true, message: "请输入联系人电话", trigger: "blur" }
        ],
        u_contacts_mobile: [
          { required: true, message: "请输入联系人手机", trigger: "blur" }
        ],
        u_contacts_fax: [
          { required: true, message: "请输入联系人传真", trigger: "blur" }
        ],
        u_bank: [
          { required: true, message: "请输入开户银行", trigger: "blur" }
        ],
        u_bank_account: [
          { required: true, message: "请输入银行账号", trigger: "blur" }
        ]
      },
      uploadUrl: ""
    };
  },
  created: function() {
    let that = this;
    let url = location.href;
    that.id = url.split("userAllDetail/")[1];
    that.getDate();
  },
  methods: {
    //获取数据
    getDate: function() {
      var _that = this;
      userinfo(_that.id)
        .then(function(res) {
          if (res.data.code == 200) {
            _that.ruleForm.uLoginName = res.data.uLoginName;
            _that.ruleForm.u_name = res.data.uInfo.u_name;
            _that.ruleForm.u_type = res.data.uInfo.u_type;
            _that.ruleForm.u_addr = res.data.uInfo.u_addr;
            _that.ruleForm.u_legal = res.data.uInfo.u_legal;
            _that.ruleForm.u_legal_phone = res.data.uInfo.u_legal_phone;
            _that.ruleForm.u_contacts = res.data.uInfo.u_contacts;
            _that.ruleForm.u_contacts_phone = res.data.uInfo.u_contacts_phone;
            _that.ruleForm.u_contacts_mobile = res.data.uInfo.u_contacts_mobile;
            _that.ruleForm.u_contacts_fax = res.data.uInfo.u_contacts_fax;
            _that.ruleForm.u_bank = res.data.uInfo.u_bank;
            _that.ruleForm.u_bank_account = res.data.uInfo.u_bank_account;
            _that.ruleForm.file_yyzz = res.data.uInfo.file_yyzz;
            _that.ruleForm.file_zyxy = res.data.uInfo.file_zyxy;
            _that.file_yyzz = _that.ruleForm.file_yyzz;
            _that.file_zyxy = _that.ruleForm.file_zyxy;
          }
        })
        .catch(function(error) {});
    },
    // 显示营业执照
    isShow: function() {
      return serviceUrl + "attachment/" + this.ruleForm.file_yyzz;
    },
    //显示作业协议
    isShow2: function() {
      return serviceUrl + "attachment/" + this.ruleForm.file_zyxy;
    },
    //上传前进行校验
    beforeUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "xls";
      const extension2 = testmsg === "xlsx";
      const extension3 = testmsg === "jpg";
      const extension4 = testmsg === "png";
      const extension5 = testmsg === "gif";
      const extension6 = testmsg === "txt";
      const extension7 = testmsg === "ppt";
      const extension8 = testmsg === "pdf";
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (
        !extension &&
        !extension2 &&
        !extension3 &&
        !extension4 &&
        !extension5 &&
        !extension6 &&
        !extension7 &&
        !extension8
      ) {
        this.$message({
          message:
            "上传文件只能是 xls、xlsx、ppt、jpg、png、gif、txt、ppt、pdf格式!",
          type: "warning"
        });
      }
      if (!isLt2M) {
        this.$message({
          message: "上传文件大小不能超过 10MB!",
          type: "warning"
        });
      }
      return (
        extension ||
        extension2 ||
        extension3 ||
        extension4 ||
        extension5 ||
        extension6 ||
        extension7 ||
        (extension8 && isLt2M)
      );
    },
    //营业执照
    upload1(_upload) {
      fileUpload(_upload)
        .then(res => {
          if (res.data.code === 200) {
            this.file_yyzz = res.data.data;
            _upload.onSuccess();
          }
        })
        .catch(err => {
          _upload.onError();
        });
    },
    //作业协议
    upload2(_upload) {
      fileUpload(_upload)
        .then(res => {
          if (res.data.code === 200) {
            this.file_zyxy = res.data.data;
            _upload.onSuccess();
          }
        })
        .catch(err => {
          _upload.onError();
        });
    },
    //提交数据
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var that = this;
          const datePrams = {
            id: that.id, //单位名称
            unitname: that.ruleForm.u_name, //单位名称
            unittype: that.ruleForm.u_type, //单位类别
            unitaddr: that.ruleForm.u_addr, //单位地址
            legal: that.ruleForm.u_legal, //法定代表人
            legalphone: that.ruleForm.u_legal_phone, //法人电话
            contacts: that.ruleForm.u_contacts, //联系人
            contactsphone: that.ruleForm.u_contacts_phone, //联系人电话
            contactsmobile: that.ruleForm.u_contacts_mobile, //联系人手机
            contactsfax: that.ruleForm.u_contacts_fax, //联系人传真
            bank: that.ruleForm.u_bank, //开户银行
            bankaccount: that.ruleForm.u_bank_account, //银行账号

            yyzz: that.file_yyzz, //营业执照
            zyxy: that.file_zyxy //作业协议
          };
          SubmitMessageAdmin("userInfoAction", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {

                that.getDate();
                
                that.$message({
                  message: "提交成功",
                  type: "success",
                  duration: "1000"
                });
              }
            })
            .catch(function(error) {});
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang = scss scoped>
.userDetailAdmin {
  padding: 10px 30px;
  box-sizing: border-box;
  margin: 0 auto;
  .content {
    padding: 15px 30px;
    box-sizing: border-box;
    background-color: #fff;
    .userDetailAdmin-title {
      height: 30px;
      line-height: 30px;
      text-align: left;
      font-size: 14px;
      color: #2258c2;
    }
    .userDetailAdmin-notice {
      text-align: left;
      font-size: 14px;
    }
    .userDetailAdmin-form {
      margin-top: 15px;
      width: 90%;
      margin-left: 0;
      margin-top: 25px;

      /deep/ .el-button--primary {
        /* background: #2258c2; */
      }
    }
    .userDetailAdmin-form-special {
      a {
        color: #409eff;
        cursor: pointer;
      }
    }
    .userDetailAdmin-form-special {
      a:hover {
        color: silver;
      }
    }
    .userDetailAdmin-form-upload {
      display: inline-block;
      width: 80%;
      float: right;
    }
  }
}
</style>
