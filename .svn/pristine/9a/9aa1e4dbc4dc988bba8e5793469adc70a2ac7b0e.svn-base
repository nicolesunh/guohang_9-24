<template>
    <div class="ChuShenList">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="number"
                    label="序号	"
                    width="180"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="projectName"
                    label="项目名称"
                    align="center"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="projectOverview"
                    align="center"
                    label="项目概况">
            </el-table-column>
            <el-table-column
                    prop="status"
                    align="center"
                    label="状态">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    align="center"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "ChuShenList",
        data(){
             return{
                tableData: [{
                    number:"1",
                    projectName:"项目名",
                    projectOverview:"项目名",
                    status:"0"
                }

               ]
             }
        },
        methods:{
            handleClick(row) {
                console.log(row);
            }
        }
    }
</script>

<style  lang = scss scoped>
    .ChuShenList{

    }
</style>