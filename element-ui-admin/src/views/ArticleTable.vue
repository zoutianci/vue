<template>
    <div class="app-container">
        <div class="filter-container">
            <el-select v-model="listQuery.importance" placeholder="重要性" class="filter-item">
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        </div>
        <el-table :data="list" v-loading="listLoading">
            <el-table-column label="序号" align="center" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="importance" label="重要性" align="center" width="100"></el-table-column>
            <el-table-column prop="timestamp" label="日期" align="center" width="150"></el-table-column>
            <el-table-column prop="title" label="标题" min-width="150"></el-table-column>
            <el-table-column prop="author" label="作者" align="center" width="110"></el-table-column>
            <el-table-column prop="pageviews" label="阅读数" align="center" width="95"></el-table-column>
            <el-table-column label="操作" align="center" width="230" class="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="handleUpdate(scope.row)" >编辑</el-button>
                    <el-button type="success" size="mini" >发布</el-button>
                    <el-button type="danger" size="mini" >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-container">
            <el-pagination :current-page="listQuery.page" :page-size="listQuery.limit" :total="total" layout="total, sizes, prev, pager, next, jumper" @current-change='handleCurrentChange'></el-pagination>
        </div>
        <el-dialog title="修改" :visible.sync="dialogFormVisible">
            <el-form :model='temp' label-position='left' label-width='70' style="width:400px; margin-left:50px;" >
                <el-form-item prop="title" label="标题">
                    <el-input v-model="temp.title"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model='temp' label-position='left' label-width='70' style="width:400px; margin-left:50px;" >
                <el-form-item prop="timestamp" label="日期">
                    <el-input v-model="temp.timestamp"></el-input>
                </el-form-item>
            </el-form>
            <el-form :model='temp' label-position='left' label-width='70' style="width:400px; margin-left:50px;" >
                <el-form-item prop="importance" label="重要性">
                    <el-input v-model="temp.importance"></el-input>
                </el-form-item>
            </el-form>
            <div class="dialog-footer" slot="footer">
                <el-button @click="dialogFormVisible=false">取消</el-button>
                <el-button @click="updateData">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {fetchList} from '@/api/article'

export default {
    data() {
        return {
            importanceOptions: [1,2,3],
            total: 0,
            listLoading: false,
            dialogFormVisible: false,            
            temp: { // 弹窗里的表单model
                id: null,
                importance: 1,
                remark: '',
                timestamp: new Date(),
                title: '',
                type: '',
                status: 'published',
            },
            list: [
                
            ],
            listQuery: {
                title: undefined,
                importance: undefined,
                type: undefined,
                sort: '+id',
                page: 1,
                limit: 20,
            },

        }
    },
    created() {
        // this.listLoading = true;
        this.getList();
    },
    methods: {
        getList() {
            this.listLoading = true;
            fetchList(this.listQuery).then(response => {
                this.list = response.data.items;
                this.total = response.data.total;
                setTimeout(()=>{
                    this.listLoading = false;
                },2000)
            })
            // setTimeout(()=>{
            //     this.listLoading = false;
            // },2000)
        },
        handleUpdate(row) {
            // console.log(row)
            this.temp = Object.assign({}, row);
            this.dialogFormVisible = true;
            // Object.assign(this.temp, row);
            // console.log(this.temp)
        },
        updateData() {
            this.dialogFormVisible = false;
        },
        handleCurrentChange(page) {
            this.listQuery.page = page;
            this.getList();
        },
        handleFilter() {
            this.listQuery.page = 1;
            this.getList();
        },
    }
}
</script>

<style>

</style>
