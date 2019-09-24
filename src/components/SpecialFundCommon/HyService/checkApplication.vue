<template>
  <div class="checkApplication">
    <div class="checkapply">
        <div style="padding-bottom: 10px;">
          <el-select v-model="form.region" placeholder="请选择" size="small" class="checksle">
            <el-option label="航运企业" value="航运企业"></el-option>
            <el-option label="上港集团" value="上港集团"></el-option>
          </el-select>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" style="margin-left: 10px;" size="small" type="info" plain>选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="info" @click="submitUpload">导入</el-button>
          </el-upload>
            <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%">
              <el-table-column prop="units" label="验证单位" align="center"></el-table-column>
              <el-table-column prop="examine" label="验证结果" align="center">
                <el-table-column prop label align="center" width="450px">
                  <template >
                    <span  style="color: #2258C2">未核对</span>
                  </template>
                </el-table-column>
                <el-table-column prop label align="center" width="350px">
                  <template >
                    <span  style="color: #2258C2; cursor: pointer;" @click="toExport()">查看</span>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkApplication",
  data() {
    return {
      isShowAll: true,
      isShowCheck: false,
      fileList: [ ],
      form:{
        region: '',
      },
      tableData:[{
          units: '航运企业',
         },
        {
          units: '上港集团',
        }]
    };
  },
  components: {
  },
  created: function() {},
  methods:{
    showAll(){
    },
    toExport(){
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  computed: {
  
  },
  watch: {

  }
};
</script>

<style  lang = scss scoped>

.checkApplication {
  width: 95%;
  margin: 0 auto;
  .checkApplication-title {
    margin: 15px 0;
  }
  .checksle{
    width: 130px;
    float: left;
  }
  .checkApplication-title-button {
    font-size: 14px;
    background: #2258c2;
  }
  .checkApplication-table {
    margin-top: 10px;
    /* .el-table tr {
        /deep/
        .el-table_1_column_5 {
          padding: 0;
          height: 100%;
          .cell{
            width: 100%;
            padding: 0;
          }
        }
      }*/
  }
  .checkApplication-text {
    h3 {
      padding: 15px 0;
      span {
        font-size: 14px;
        font-weight: bold;
      }
      span:nth-child(2) {
        display: inline-block;
        width: 200px;
      }
    }
  }
}


</style>