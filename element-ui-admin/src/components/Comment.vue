<template>
    <div>
        <comment-form @addComment111="addComment"></comment-form>
        <comment-list :list1="list"></comment-list>
        <pagination :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage"></pagination>
    </div>
</template>

<script>
import CommentForm from './commentForm.vue'
import CommentList from './CommentList'
import pagination from './pagination'
export default {
    data () {
        return {
            list: [],
            // pagenation组件无法独立
            pagesize: 3,
            totalData: [],
            totalCount: 0,
            currentPage: 1,
        }
    },
    components: {
        CommentForm,
        CommentList,
        pagination,
    },
    methods: {
        addComment(msg) {
            console.log(msg);
            this.totalData.push({text:msg});
            this.totalCount = this.totalData.length;
            // this.list.push(msg);
            // this.list = this.totalData;
            console.log(parseInt(this.totalData.length));
            if(parseInt(this.totalData.length) <= parseInt(this.pagesize)) {
                this.list = this.totalData;
            }else{
                this.list = this.totalData.slice(this.totalCount-this.pagesize);
            }
            this.list.reverse();
        },
        turnPage(curr) {
            console.log('turnpage执行'+curr);
        }
    }
}
</script>

<style>

</style>
