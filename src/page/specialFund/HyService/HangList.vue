<template>
  <div class="HangList">
    <div class="HangList-l" :class="{addClass1:isCollapse == true}" id="HangList-l-id">
      <NavLeft></NavLeft>
    </div>
    <div class="HangList-r" :class="{addClass2:isCollapse == true}">
      <HeaderTop></HeaderTop>
      <div class="HangList-bd">
        <CommonTop :parentToChild="showTitle"></CommonTop>
        <div class="HangList-bd-nav">
          <span class="search">年份选择</span>
          <el-select
            v-model="value"
            size="small"
            placeholder="请选择"
            style="width: 100px"
            @change="changeYear"
          >
            <el-option
              v-for="(item,index) in chooseYear"
              :key="index"
              :value="item.year"
              :label="item.value"
            ></el-option>
          </el-select>
        </div>
        <!--表格-->
        <div class="HangList-bd-table">
          <div class="HangList-bd-table-A">
            <el-table
              :data="tableData"
              border
              :header-cell-style="{'color':'#000','font-weight': '700'}"
              style="width: 100%"
            >
              <el-table-column prop="id" label="ID" align="center" width="50"></el-table-column>
              <el-table-column prop="pname" label="项目名称"></el-table-column>
              <el-table-column prop="ptitle" label="申请单位"></el-table-column>
              <el-table-column prop="phone" label="联系电话" width="120"></el-table-column>
              <el-table-column prop="insert_time" label="申请时间" align="center" width="170"></el-table-column>
              <el-table-column prop="status" align="center" label="状态" width="120">
                <template slot-scope="scope">{{ getStatusName(scope.row.status) }}</template>
              </el-table-column>
              <el-table-column align="center" label="项目概况" width="150">
                <template slot-scope="scope">
                  <el-button
                    size="small"
                    style="margin-bottom:10px"
                    v-if="scope.row.pother!='' "
                    @click="checkdetail(scope.row.pother)"
                  >查看</el-button>
                  <el-button
                    size="small"
                    @click="uploadOverview(scope.row.id)"
                    v-if="scope.row.pother!='' "
                  >修改</el-button>
                  <el-button
                    size="small"
                    @click="uploadOverview(scope.row.id)"
                    v-if="scope.row.pother=='' "
                  >上传项目概况</el-button>
                  <!-- 上传弹框 -->
                  <div class="forupload">
                    <el-dialog title="上传项目概况" :visible.sync="dialogVisible" width="30%">
                      <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :before-upload="beforeUpload"
                        :http-request="upload"
                        :show-file-list="true"
                      >
                        <el-button size="small" type="primary">点击上传</el-button>
                      </el-upload>
                    </el-dialog>
                  </div>
                </template>
              </el-table-column>
              <!-- 附件下载 -->
              <el-table-column align="center" label="附件" width="140">
                <template slot-scope="scope">
                  <el-dropdown split-button size="small">
                    附件下载
                    <el-dropdown-menu slot="dropdown">
                      <!-- 未上传则无法下载附件  disabled-->
                      <el-dropdown-item
                        @click.native="downdetail(scope.row.unit_soc)"
                        :disabled="scope.row.pother==''"
                      >申报表</el-dropdown-item>
                      <el-dropdown-item
                        @click.native="downdetail(scope.row.unit_commercial)"
                        :disabled="scope.row.pother==''"
                      >工商执照(三证合一)</el-dropdown-item>
                      <el-dropdown-item
                        @click.native="downdetail(scope.row.unit_qita)"
                        :disabled="scope.row.pother==''"
                      >项目创新及社会效益证明材料</el-dropdown-item>
                      <el-dropdown-item
                        @click.native="downdetail(scope.row.video)"
                        :disabled="isDisabled(scope.row.pother,scope.row.unit_video)"
                      >项目介绍视频</el-dropdown-item>
                      <el-dropdown-item
                        @click.native="downdetail(scope.row.faren)"
                        :disabled="isDisabled(scope.row.pother,scope.row.unit_faren)"
                      >项目介绍PPT</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>
              <el-table-column prop="cz" align="center" label="操作" width="120">
                <template slot-scope="scope">
                  <el-dropdown split-button size="small" @command="handleCommand">
                    操作
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        :command="{value:0,id:scope.row.id,notes:scope.row.notes}"
                      >退回再修改</el-dropdown-item>
                      <el-dropdown-item :command="{value:1,id:scope.row.id}">撤销已审核</el-dropdown-item>
                      <el-dropdown-item :command="{value:2,id:scope.row.id}">审核通过</el-dropdown-item>
                      <el-dropdown-item :command="{value:3,id:scope.row.id}">审核未通过</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <!--分页-->
        <div class="HangList_page">
          <div class="block">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="pageSize"
              layout="total, prev, pager, next, jumper"
              :total="totalCount"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../../components/SpecialFundCommon/HyService/HeaderTop";
import NavLeft from "../../../components/SpecialFundCommon/HyService/NavLeft";
import CommonTop from "../../../components/SpecialFundCommon/HyService/CommonTop";
import {
  serviceApply,
  hynotes,
  hyundo,
  hypass,
  hynopass,
  beizhu
} from "@/common/api.js";

export default {
  name: "HangList",
  data() {
    return {
      isCollapse: false,
      showTitle: "HangList",
      dialogVisible: false,
      fileList: [],
      //   年份
      chooseYear: [],
      value: new Date().getFullYear(),
      tableData: [],
      //   上传
      uploadUrl: "",
      overviewId: 0,
      //   分页
      totalCount: 0,
      currentPage: 1,
      pageSize: 15
    };
  },
  components: {
    HeaderTop: HeaderTop,
    NavLeft: NavLeft,
    CommonTop: CommonTop
  },
  created: function() {
    this.getYear();
  },
  mounted: function() {
    this.serviceApply();
  },
  computed: {
    getSearchKey() {
      return this.$store.state.common.collapse;
    }
  },
  methods: {
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val;
      this.serviceApply();
    },
    // 操作
    handleCommand(command) {
      let that = this;
      let datePrams = {};
      // 参数
      if (command.value == 0) {
        datePrams = {
          id: command.id,
          notes: command.notes
        };
      } else {
        datePrams = {
          id: command.id
        };
      }

      switch (command.value) {
        case 0:
          // 退回再修改
          hynotes("hynotes", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {
                //   更新
                that.serviceApply();
                that.$message({
                  message: "操作成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {});
          break;
        case 1:
          // 撤销已审核
          hyundo("hyundo", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {
                //   更新
                that.serviceApply();
                that.$message({
                  message: "操作成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {});
          break;
        case 2:
          // 审核通过
          hypass("hypass", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {
                //   更新
                that.serviceApply();
                that.$message({
                  message: "操作成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {});
          break;
        case 3:
          // 审核未通过
          hynopass("hynopass", datePrams)
            .then(function(res) {
              if (res.data.code == 200) {
                //   更新
                that.serviceApply();
                that.$message({
                  message: "操作成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {});
          break;
      }
    },

    // 附件下载
    downdetail(val) {
      //文档：/p/fund/storage/attachment/{{$v->unit_soc}}
      location.href = serviceUrl + "attachment/" + val;
      //   let url = "http://www.shisc.net" + "/p/fund/storage/attachment/" + val;
    },
    // 下载项是否禁用
    isDisabled(pother, own) {
      if (pother == "" || own == "") {
        return true;
      } else {
        return false;
      }
    },
    //年份选择
    changeYear: function() {
      this.serviceApply();
    },
    //计算年份
    getYear: function() {
      let that = this;
      let year = new Date().getFullYear();
      for (let i = 2017; i <= year; i++) {
        that.chooseYear.unshift({ value: i, year: i });
      }
      that.chooseYear.unshift({ value: "全部", year: "" });
    },
    // 获取列表数据
    serviceApply() {
      let that = this;
      // 参数
      let datePrams = {
        year: that.value,
        page: that.currentPage
      };
      serviceApply("hylist", datePrams)
        .then(function(res) {
          if (res.data.code == 200) {
            that.tableData = res.data.data.data;
            that.totalCount = res.data.data.total;
            that.pageSize = res.data.data.per_page;
          }
        })
        .catch(function(error) {});
    },
    // 状态
    getStatusName: function(status) {
      //状态0草稿 1 已提交 2 已审核 3 撤回 4 未通过 5 专家初审通过 6 通过 7复议
      switch (status) {
        case 0:
          return "草稿";
        case 1:
          return "已提交";
        case 2:
          return "已审核";
        case 3:
          return "撤回";
        case 4:
          return "未通过";
        case 5:
          return "专家初审通过";
        case 6:
          return "通过";
        case 7:
          return "复议";
      }
    },
    // 查看
    checkdetail: function(pother) {
      location.href = serviceUrl + "attachment/" + pother;
    },
    // 弹框
    uploadOverview(overviewId) {
      this.dialogVisible = true;
      this.overviewId = overviewId;
    },
    // 上传
    beforeUpload(file) {
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        this.$message.error("上传文件大小不能超过10MB哦!");
        return false;
      }
    },
    // 上传
    upload(_upload) {
      let that = this;
      beizhu(_upload, that.overviewId)
        .then(res => {
          if (res.data.code === 200) {
            that.dialogVisible = false;
            setTimeout(() => {
              that.$message({
                message: res.data.data,
                type: "success",
                duration: "1000"
              });
            }, 500);
            
            _upload.onSuccess();
          }
        })
        .catch(err => {
          _upload.onError();
        });
    }
  },
  watch: {}
};
</script>

<style  lang = scss scoped>
.HangList {
  overflow: hidden;
  background-color: #ecf0f5;
  z-index: 800;
  min-height: 100vh;

  .HangList-l {
    float: left;
    width: 12%;
  }
  .addClass1 {
    width: 7%;
  }
  .HangList-r {
    float: left;
    width: 88%;
    .HangList-bd {
      padding: 10px 30px;
      .HangList-bd-nav {
        .search {
          margin-right: 15px;
          margin-left: 5px;
          font-size: 16px;
        }
      }
      .HangList-bd-table {
        margin-top: 15px;
        min-height: 300px;
        border-radius: 3px;
        background: #ffffff;
        border-top: 3px solid #d2d6de;
        margin-bottom: 20px;
        width: 100%;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        .HangList-bd-table-A {
          padding: 10px;
          /deep/ .el-table {
            th {
              padding: 5px 0;
            }
          }
        }
      }
      .HangList_page {
        margin-top: 30px;
      }
    }
  }
  .addClass2 {
    width: 93%;
  }
}
/* .fixpage{
    position:fixed;
    bottom:0;
    left:14%;
  } */
</style>