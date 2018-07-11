<template>
    <div>
        <comment-item v-for="(item, index) in list1" :key="index" :content="item"></comment-item>
        <div v-if="list1.length==0" class="empty-msg">当前没有评论</div>
    </div>
</template>

<script>
import commentItem from './CommentItem'
export default {
    props: {
        'list1': Array,
       
    },
    components: {
        commentItem,
    }
}
</script>

<style>

</style>
