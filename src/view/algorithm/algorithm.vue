<template>
  <div class="algorithm">
    
  </div>
</template>

<script>
import Heap from './heap'
import {Knapsack,KnapsackVariant } from './knapsack'
export default {
  name: 'algorithm',
  data () {
    return {
      data:[
            {
                name: 'a',
                children: [
                    { name: 'b', children: [{ name: 'e' }] },
                    { name: 'c', children: [{ name: 'f' }] },
                    { name: 'd', children: [{ name: 'g' }] },
                ],
            },
            {
                name: 'a2',
                children: [
                    { name: 'b2', children: [{ name: 'e2' }] },
                    { name: 'c2', children: [{ name: 'f2' }] },
                    { name: 'd2', children: [{ name: 'g2' }] },
                ],
            }
        ]
    }
  },
  mounted(){
    this.init()
    
    // 堆化
    this.heapify()
    // console.log(this.dakaer(['1','3'],['a','b']))

    // const map1 = this.makeCountMap([2,1,3,5,4,2,3])

    // console.log(this.solveTopK())

    // 背包问题
    let weight = [4, 5, 6, 2, 2]
    let value = [6, 4, 5, 3, 6]

    // let backPack = new Knapsack(weight, value, 10)
    // backPack.maximum()

    let a = new KnapsackVariant()
    console.log(a.loopUp())
    console.log(a.meetArr)
  },
  methods:{

    init(){
        let names = ["iPhone X", "iPhone XS"]

        let colors = ["黑色", "白色"]

        let storages = ["64g", "256g"]

        let combine = function (...chunks) {
            
            // chunks =>  [names,colors,storages]

            let res = []

            let helper = function (chunkIndex, prev) {
                let chunk = chunks[chunkIndex]
                let isLast = chunkIndex === chunks.length - 1
                for (let val of chunk) {
                    let cur = prev.concat(val)
                    if (isLast) {
                        // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
                        // let diff = arr1.filter(function (val) { return arr2.indexOf(val) === -1 })
                        res.push(cur)
                    } else {
                        helper(chunkIndex + 1, cur)
                    }
                }
            }

            // 从属性数组下标为 0 开始处理
            // 并且此时的 prev 是个空数组
            helper(0, [])

            return res
        }

        console.log(combine(names, colors, storages))

    },

    // 深度遍历 dfs, 使用递归
    dfs(data) {
        const result = [];
        data.forEach(item => {
            const map = data => {
                result.push(data.name);
                data.children && data.children.forEach(child => map(child));
            }
            map(item);
        })
        return result.join(',');
    },

    // 广度遍历 BFS, 创建一个执行队列, 当队列为空的时候则结束
    bfs(data) {
        let result = [];
        let queue = data;
        while (queue.length > 0) {
            [...queue].forEach(child => {
                queue.shift();
                result.push(child.name);
                child.children && (queue.push(...child.children));
            });
        }
        return result.join(',');
    },
    // 笛卡尔积
    dakaer(){
        return Array.prototype.reduce.call(arguments,function(a, b) {
            var ret = [];
            a.forEach(function(a) {
                b.forEach(function(b) {
                    ret.push(a.concat([b]));
                });
            });
            return ret;
        }, [[]]);
    },
    makeCountMap(nums) {
        let map = new Map()
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            let count = map.get(num)
            console.log(num,count)
            if (count) {
            map.set(num, count + 1)
            } else {
            map.set(num, 1)
            }
        }
        return map
    },
    // 构建大顶堆求 Top K 问题
    solveTopK(){
        let getLeastNumbers = function(arr, k) {
            // 从 arr 中取出前 k 个数，构建一个大顶堆
            let heap = [,], i = 0
            while(i < k) {
            heap.push(arr[i++]) 
            }
            buildHeap(heap, k)
            
            console.log(heap)
            // 从 k 位开始遍历数组
            for(let i = k; i < arr.length; i++) {
                if(heap[1] > arr[i]) {
                    // 替换并堆化
                    heap[1] = arr[i]
                    heapify(heap, k, 1)
                }
            }
            
            // 删除heap中第一个元素
            heap.shift()
            return heap
        };

        // 原地建堆，从后往前，自上而下式建大顶堆
        let buildHeap = (arr, k) => {
            console.log(arr)
            if(k === 1) return
            // 从最后一个非叶子节点开始，自上而下式堆化
            for(let i = Math.floor(k/2); i>=1 ; i--) {
                console.log('原地件堆',k,i)
                heapify(arr, k, i)
            }
        }

        // 堆化
        let heapify = (arr, k, i) => {
            console.log('循环',arr,i)
            // 自上而下式堆化
            while(true) {
                let maxIndex = i
                if(2*i <= k && arr[2*i] > arr[i]) {
                    maxIndex = 2*i
                    console.log(maxIndex)
                }
                if(2*i+1 <= k && arr[2*i+1] > arr[maxIndex]) {
                    maxIndex = 2*i+1
                    console.log(maxIndex)
                }
                
                if(maxIndex !== i) {
                    swap(arr, i, maxIndex)
                    i = maxIndex
                } else {
                    break
                }
            }
        }

        // 交换
        let swap = (arr, i , j) => {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }

        let arr = [4,6,7,23,]
        
        return getLeastNumbers(arr,4)
    },

    //构建二叉堆（最大堆/最小堆）
    heapify(){
        let arr = [2,1,3,5,4,2,3]
        let arr1 = [23,7,6,4]
        const heap = new Heap(arr1)
        const minHeap = heap.minHeapify();
        const maxHeap = heap.maxHeapify()
        console.log('minHeap: ', minHeap) 
        console.log('maxHeap: ', maxHeap); 
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/algorithm/algorithm.scss';
</style>
