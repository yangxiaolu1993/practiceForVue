<template>
  <div class="home">
    <h2>自定义npm引用</h2>

    <div>
      数据结构常用的类型：数组、栈、队列、链表、树、图、堆、散列标
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      arr:[1,2,3,4]
    }
  },
  mounted(){
    // code 26
    // let nums = [1,1,2]
    // let len = this.code26(nums)
    // console.log(this.code7(123))


    let num = 123.12
    // console.log(~~num)

    let arr = [0,2,3,4,6,4,3,2]
    console.log(this.code852(arr))

    // code 13
    console.log('==== code 13 =====')
    console.log(this.code13('III'))
  },

  methods:{
    /**
     * leetcode 26:删除有序数组中的重复项
     * 结题思路：双指针
     */
    code26(nums){
      if(nums.length == 0|| nums.length == 1) return nums.length

      let pi = 0
      let pj = 0
      while(pj < nums.length){
        console.log(nums[pi],nums[pj])
        if(nums[pi] != nums[pj]){
          pi += 1
          nums[pi] = nums[pj] 
        } 
        pj += 1
      }


      return pi+1
    },
    /**
     * leetcode 1:两数之和
     * 哈希表（散列表）
     */
    code1(nums,target){
      let pi = 0
      let pj = 1

      while(pi < nums.length){
        if(nums[pi]+nums[pj] == target){
          return [pi,pj]
        }

        if(pj < nums.length){
          pj+=1
        } else {
          pi += 1
          pj = pi +1
        }

      }

      return []
    },
    /**
     * leetcode 7:整数反转
     * 知识点：按位取反 2个关键操作：
     * 1、 ~-1 ==> 0 ,在使用 indexOf 查找字符串时，可以通过 if(~str.indexof('a)){}
     * 2、使用 ~~ 代替 Math.floor() 向下取整 ，~~的运行速度要快很多
     */
    code7(x){
      let rev = 0;
      while (x !== 0) {
          const digit = x % 10;
          
          x = ~~(x / 10);
          rev = rev * 10 + digit;
          if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
              return 0;
          }
      }
      return rev;

    },
    code7_self(x){
      let rev = Math.abs(x)

      let f = x<0?1:-1

      let revs = Number(rev.toString().split('').reverse().join(''))

      if(revs>Math.pow(2, 31)-1) return 0

      return (-1)*f*revs
    },

    /**
     * leetcode 852:山脉数组的峰顶索引
     * 知识点 二分法查找
     */
    code852(arr){
      // let caps = []

      // for(let i = 1;i<arr.length-1;i++){
      //   if(arr[i-1] < arr[i] && arr[i] > arr[i+1]){
      //     caps.push(i)
      //   }
      // }
      // if(caps.length == 1) return caps[0]

      let tag = 0,left = 1,right = arr.length-2;

      while(left <= right ){
          let mid = ~~((left + right)/2)
          if(arr[mid] > arr[mid + 1]){
              tag = mid
              right = mid - 1
          } else {
              left = mid + 1
          }
      }

      return tag
    },

    /**
     * leetcode 13:罗马数字转整数
     * 知识点 
     * 例子 输入"MCMXCIV"=>1994  解释 M = 1000, CM = 900, XC = 90, IV = 4.
     */
    code13(s){
        let sum = []
        let inter = 1
        let value = {
          'I':1,
          'V':5,
          'X':10,
          'L':50,
          'C':100,
          "D":500,
          "M":1000
        }

        let copy = s.split('')

        for(let i=0;i<copy.length;i+=inter){
          let a = `${copy[i]}${copy[i+1]}`
          
          if(a == 'IV' || a == 'IX' || a == 'XL' || a == 'CD' || a == 'CM' || a == 'XC'){
            inter = 2
            sum.push(value[copy[i+1]] - value[copy[i]])
          } else {
            inter = 1
            sum.push(value[copy[i]])
          }
          
        }
        return sum.reduce((prev,curr) => prev+curr)
    },
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/algorithm/algorithm.scss';
</style>


<style scoped>
h2{
  margin: 10px 0;
}
</style>