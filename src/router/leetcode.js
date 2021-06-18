

/**
 * leetcode 相关路由配置
 */
import LeetCode from '@/view/leetcode/index.vue'
import Linked from '@/view/leetcode/linkedlist.vue'

const files = require.context('../view/leetcode', true, /code[0-9]{1,4}\.vue$/);
const importAll = context => {
    const map = {}

    for (const key of context.keys()) {
        const keyArr = key.split('/')
        keyArr.shift() // 移除.
        map[keyArr.join('.').replace(/\.vue$/g, '')] = context(key).default
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


