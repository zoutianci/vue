import Mock from 'mockjs';
import {param2Obj} from '@/utils'

const List = [];
const count = 100;
const baseContent = '<p>我是测试数据我是测试数据</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3';

for (let i=0; i<count; i++) {
    List.push(Mock.mock({
        id: '@increment', //@开头 表示使用内部语法
        timestamp: +Mock.Random.date('T'),
        author: '@first',
        reviewer: '@first',
        title: '@title(5,10)',
        content_short: '我是测试数据',
        content: baseContent,
        importance: '@integer(1,3)',
        'type|1': ['CN', 'US', 'JP', 'EU'],
        'status|1': ['published', 'draft', 'deleted'],
        display_time: '@datetime',
        comment_disabled: true,
        pageviews: '@integer(300, 5000)',
        image_uri ,
    }))
}

export default {
    getList: (config) => {
        console.log(config);
        const {importance, type, title, page=1, limit=20, sort} =  param2Obj(config.url);
        console.log(importance, type, title, page, limit, sort);

        let mockList = List.filter(item => {
            console.log(item.importance, importance)
            if (importance && item.importance !== +importance) return false;//+可以立即转换为正整数
            if(type && item.type !== type) return false;
            if (title&& item.title.indexOf(title) < 0) return false;
            return true;
        })
        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

        return {
            total: mockList.length,
            items: pageList,
            // items: [
            //     {
            //         id: 1,
            //         timestamp: '两小时前',
            //         title: 'zk最帅',
            //         author: 'zk女粉丝',
            //         pageviews: '9999',
            //     },
            //     {
            //         id: 2,
            //         timestamp: '两小时前',
            //         title: 'zk最帅22',
            //         author: 'zk女粉丝',
            //         pageviews: '9999',
            //     },
            // ],
            // total: 2,
        }
    }
}

