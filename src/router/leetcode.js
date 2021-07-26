

/**
 * leetcode 相关路由配置
 */
import LeetCode from '@/view/leetcode/home.vue'
import Linked from '@/view/leetcode/linkedlist.vue'
import Graph from '@/view/leetcode/graph.vue'
import Tree from '@/view/leetcode/tree.vue'

const files = require.context('../view/leetcode', true, /index\.vue$/);
const importAll = context => {
    const map = {}

    for (const key of context.keys()) {
        const keyArr = key.split('/')
        keyArr.shift() // 移除.
        // map[keyArr.join('.').replace(/\.vue$/g, '')] = context(key).default
        map[keyArr[0]] = context(key).default
    }
    return map
}
let map = importAll(files)
// 转换字符串为首字母大写
const titleCase = (str) => {
    var arr = str.split(" ");
    for(var i = 0;i < arr.length;i++){
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr.join(" ");
}

const leetCodeRoutes = [
    {
        path: '/leetcode',
        name: 'LeetCode',
        component: LeetCode,
        meta: {
          title: 'LeetCode'
        }
      },
      {
        path: '/linked',
        name: 'Linked',
        component: Linked,
        meta: {
            title: 'LeetCode'
          }
      },
      {
        path: '/graph',
        name: 'Graph',
        component: Graph,
        meta: {
            title: '图论'
          }
      },
      {
        path: '/tree',
        name: 'Tree',
        component: Tree,
        meta: {
            title: '树'
          }
      },
]

for(let key in map){
    leetCodeRoutes.push({
        path: `/${key}`,
        name: `${titleCase(key)}`,
        component: map[key],
        meta: {
          title: 'LeetCode'
        }
    })
}




export default leetCodeRoutes


