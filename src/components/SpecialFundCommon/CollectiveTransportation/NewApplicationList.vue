<template>
  <div class="NewApplicationList">
    <div class="NewApplicationList-top">
      <fieldset class="layui-elem-field">
        <legend>填表说明:</legend>
        <div class="layui-field-box">
          <ul>
            <li>1. 航运企业非必填项为备注列，“五定班轮”下“时间”为不填写项，“江海联运,内河集装箱”下“班期”和“码头”为不填写项，其他列均为必填项。否则所在行的数据将不被录入数据库。</li>
            <li>2. 港口企业非必填项有航线名称、班期-星期、班期-时间、码头和备注列，其他列均为必填项。否则所在行的数据将不被录入数据库。</li>
            <li>3. 码头选项为:浦东码头、振东码头、沪东码头、明东码头和洋山码头</li>
            <li>4. TEU列无需手工填写，系统自动计算。</li>
            <li>5. 时间列格式为00:00:00，“:”为英文字符冒号。</li>
            <li>6.清单表填写完毕、修改或导入文件后请保存草稿，此时仍可编辑。提交后，将不再拥有编辑修改权限，除非被管理员退回。</li>
            <li>7. 请认真规范填写。</li>
            <li class="shouce"  @click="download1()">8. 集疏运申报系统用户手册下载</li>
          </ul>
        </div>
      </fieldset>
    </div>
    <div>
      <el-button type="primary" size="small" style="background:#2258c2; border:1px solid #2258c2;margin-top:5px" @click="download2()">
        下载文件导入模板
      </el-button>
    </div>
    <div class="NewApplicationList-form">
      <div class="NewApplicationList-form-select">
        <el-select v-model="selectValue" placeholder="请选择" @focus="date" @change="dateChange">
          <el-option v-for="(item,index) in dateArr" :key="index" :value="item"></el-option>
        </el-select>
        <!--<span class="addTable"  @click.prevent="delData()">
             删除业务
        </span>-->
        <span class="addTable"  @click.prevent="addRow()">
             新增业务
        </span>
        <!--上传-->
        <el-upload
          class="upload-demo"
          :action="uploadUrl"
          :before-upload="beforeUpload"
          :http-request="upload"
          :limit="1"
          :file-list="fileList">
          <el-button size="small" type="primary" style="background: #2258c2">选择文件</el-button>
          <div slot="tip" class="el-upload__tip" style="display: inline-block;margin: 0 5px">
            <!--可以上传jpg/png/gif/txt/xls/xlsx文件，且不超过2M-->
          </div>
        </el-upload>
      </div>
      <div class="NewApplicationList-form-table">
        <div class="tableDate">
          <div class="button" style="width:8%;float:right;display: none" >
            <P><el-button class="el-icon-plus" @click.prevent="addRow()"></el-button></P>
            <p style="margin-top: 5px"><el-button class="el-icon-minus" @click.prevent="delData(scope.$index, scope.row)"></el-button></p>
          </div>
          <div class="table" style="width:100%;float:left;margin-bottom: 25px">
            <el-table
              :data="tableData"
              ref="table"
              tooltip-effect="dark"
              border
              stripe
              style="width: 100%"
              @current-change="handleCurrentChange">
              <!--<el-table-column type="selection" width="45" align="center"></el-table-column>-->
              <el-table-column label="序号"  type="index" width="45" align="center"></el-table-column>
              <el-table-column  label="业务类型" width="120" align="center">
                <template slot-scope="scope">
                  <el-select v-model="scope.row.ywType" placeholder="请选择">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column label="航线名称" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.hxName"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="船名"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.chuanMing"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="船型"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.chuanXing"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="完成航次数"  width="80"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.count"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="班期"  width="120" align="center">
                <template slot-scope="scope">
                  <el-select v-model="scope.row.banQi" multiple placeholder="请选择">
                    <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                  </el-select>

                </template>
              </el-table-column>
              <el-table-column label="靠泊码头"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.kbmt"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="作业箱量"  width="250" align="center">
                <el-table-column
                  prop="20"
                  label="20'"
                  align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.zyCount1"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="40"
                  label="40'"
                  align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.zyCount2"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="45"
                  label="45'"
                  align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.zyCount3"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="TFU"
                  label="TFU"
                  align="center">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.zyCount4"></el-input>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="备注"  align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.note"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="操作"  align="center">
                <template slot-scope="scope">
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div >
        </div>

      </div>
    </div>
    <div class="NewApplicationList-form-buttons">
      <el-button type="primary" size="large" class="NewApplicationList-form-button1"  @click="saveButton()">保存草稿</el-button>
      <el-button type="primary"  size="large"  class="NewApplicationList-form-button2"  @click="submitButton()">提交申请</el-button>
    </div>
  </div>
</template>

<script>
  import { addBusiness } from "@/common/api.js";
  export default {
    name: "NewApplicationList",
    data() {
      return {
        selectValue: '', //下拉框
        dateArr: [], // 周期
        //业务
        options1: [
            {
                value: '选项1',
                label: '五定班轮'
            }, {
                value: '选项2',
                label: '内河集装箱'
            }, {
                value: '选项3',
                label: '江海联运'
            }],
        //班期
        options2: [
          {
          value: '选项1',
          label: '星期一'
        }, {
          value: '选项2',
          label: '星期二'
        }, {
          value: '选项3',
          label: '星期三'
        }, {
          value: '选项4',
          label: '星期四'
        }, {
          value: '选项5',
          label: '星期五'
        },{
          value: '选项6',
          label: '星期六'
        }, {
          value: '选项7',
          label: '星期日'
        }],
        tableData: [
           {
            ywType: '', //业务类型
            hxName: '', //航线名称
            chuanMing: '',//船名
            chuanXing: '',//船型
            count: '', //完成航次数
            banQi: [], //班期
            kbmt: '' ,//靠泊码头
            zyCount1:null, //作业量 20
            zyCount2:null, //作业量 40
            zyCount3:null, //作业量 40
            zyCount4:null, //作业量 tfu
            note:null      //备注
            }],
        currentRow: null,
        fileName:"",//上传文件获取的名字，通过这个值判断文件提交方式
        //文件上传
        fileList:[],
        uploadUrl: "",
        uploadFilePrams:null,

        //判断是提交还是保存
        submitbusiness:null,//是否提交
        savebusiness:null //是否保存
      };
    },
    methods: {
     //下载模板
      download1:function(){
            location.href = '../../../excelTemplate/UserManual.docx';
      },
      download2:function(){
            location.href = '../../../excelTemplate/ImportDemo.xlsx';
      },

      //下拉框发生变化时触发的事件
       dateChange(){

       },
      //计算周期
      date() {
            let y = new Date().getFullYear(); //当前年份
            let m = new Date().getMonth() + 1; //当前月份
            let p = y - 2019; //当前年份与17年的差值
            let t = p;
            let q = ""; //上一个季度
            // 根据当前年份与17年的差值  向数组循环添加整年周期
            for (let i = 0; i < p; i++) {
                t--;
                this.dateArr.push(
                    2019 + t + "-10-01--" + (2019 + t) + "-12-31",
                    2019 + t + "-07-01--" + (2019 + t) + "-09-30",
                    2019 + t + "-04-01--" + (2019 + t) + "-06-30",
                    2019 + t + "-01-01--" + (2019 + t) + "-03-31"
                );
            }
            //   根据月份判断上一个季度
            switch (m) {
                case 4:
                    q = 1;
                    break;
                case 5:
                    q = 1;
                    break;
                default:
                    q = parseInt(m / 3) - 1;
            }
            let item =q;//上一个季度--第三方变量
            for(let i=0;i<q;i++){
                //根据当前上一个季度向数组前追上一个季度日期
                switch(item){
                    case 1:
                        this.dateArr.unshift(y+"-01-01--"+y+"-03-31");
                        break;
                    case 2:
                        this.dateArr.unshift(y+"-04-01--"+y+"-06-30");
                        break;
                    case 3:
                        this.dateArr.unshift(y+"-07-01--"+y+"-09-30");
                        break;
                }
                item--;
            }

            //  数组最初始的周期 "2016-10-01--2016-12-31"
            this.dateArr[this.dateArr.length] = "2018-10-01--2018-12-31";
            // 2.将数组转成Set-------使用延展操作符将Set解析成数组
            this.dateArr = [...new Set(this.dateArr)];
        },
      // 增加行
      addRow () {
        var list = {
            ywType: '', //业务类型
            hxName: '', //航线名称
            chuanMing: '',//船名
            chuanXing: '',//船型
            count: '', //完成航次数
            banQi: [], //班期
            kbmt: '' ,//靠泊码头
            zyCount1:null, //作业量 20
            zyCount2:null, //作业量 40
            zyCount3:null, //作业量 40
            zyCount4:null, //作业量 tfu
            note:null      //备注
        }
          this.tableData.push(list)
          setTimeout(() => {
              this.$refs.table.setCurrentRow(list);
           }, 10);
      },

      handleCurrentChange(val) {
          this.currentRow = val;
      },
      cancel() {

      },
      // 删除选中行
     handleDelete (index, row) {
         this.tableData.splice(index, 1)
      },

      //上传前
      beforeUpload(file){
          if (file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||file.type=="application/vnd.ms-excel") {
              return true;
          }
          else {
              this.$alert('请上传excel文件', '提示', {
                  confirmButtonText: '确定'
              });
              return false;
          }
      },
      //上传
      upload: function (_upload) {
          this.fileName = _upload.file.name
          this.uploadFilePrams = new FormData();
          this.uploadFilePrams.append('orderimport',_upload.file);//上传文件名
      },

      //保存草稿
        saveButton:function(){
            this.savebusiness = 1  //保存
            this.submitbusiness = ""   //提交
            this.submitDate();
        },
      //提交数据
      submitButton:function(){
          this.savebusiness = ""  //保存
          this.submitbusiness = 1  //提交
          this.submitDate();
      },
      submitDate:function() {
          if(this.fileName == "" || this.fileName == null){//表格方式提交
            console.log(this.tableData)
          }else{//文件方式提交
              this.uploadFilePrams.append('bperiod',this.selectValue);//日期区间值 例子 2019-10-01--2019-12-30
              this.uploadFilePrams.append('u_id',this.$store.state.fund.u_id);//公司ID
              this.uploadFilePrams.append('savebusiness',this.savebusiness);//是否保存 保存状态下 写1 其他为空即可
              this.uploadFilePrams.append('submitbusiness',this.submitbusiness); //是否提交 提交状态下写1 其他为空即可

              var  that = this;
              addBusiness('addBusiness',this.uploadFilePrams).then(function(res){
                  if(res.data.code == 200){
                      if(that.savebusiness == 1){
                          that.$message({
                              message:"保存成功",
                              type: 'success',
                              duration:'1000'
                          });
                      }else {
                          that.$message({
                              message:"提交成功",
                              type: 'success',
                              duration:'1000'
                          });
                      }

                  }else if(res.data.code == -10){
                      that.$message({
                          message:res.data.data,
                          type: 'error',
                          duration:'1000'
                      });
                  }
              }).catch(function(error){

              })

          }

      }

    }
  }
</script>

<style lang = scss scoped>
  .NewApplicationList{
    width: 95%;
    margin: 0 auto;
    .NewApplicationList-top{
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
            .shouce{
              cursor: pointer;
            }
            .shouce:hover{
              color:silver;
            }
          }
        }
      }
    }
    .NewApplicationList-form{
      margin-top: 35px;
      overflow: hidden;
      .NewApplicationList-form-select{
        /deep/
        .el-select{
          display: inline-block;
          width: 25%;
        }
        /deep/
        .upload-demo{
          display: inline-block;
          float: right;
          margin: 0 15px;
        }
        .addTable{
          float: right;
          cursor: pointer;
          margin: 0 3px;
          margin-top: 6px;
        }
        .addTable:hover{
          color:silver;
        }
      }
      /*设置表格*/
      .NewApplicationList-form-table{
        margin: 35px 0;
        /deep/
        .el-table .cell {
          padding: 0px 3px;
        }
      }
    }
    .NewApplicationList-form-buttons{
      display: flex;
      align-items: center;
      justify-content:center;
      margin-bottom: 35px;
      .NewApplicationList-form-button1{
        margin: 0 45px;
        background: #2258c2;
      }
      .NewApplicationList-form-button2{
        margin: 0 45px;
        background: #2258c2;
      }
    }
  }
</style>
