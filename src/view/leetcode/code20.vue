

<template>
  <div class="linked">
    <h3>leetcode 20 </h3>
  </div>
</template>

<script>
export default {
  name: "LeetCode",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    let res = this.solve('{[]}')
    console.log(res)
  },
  methods: {
    solve(s){
        // 数组如果是基数的话，直接返回false
        if(s.length % 2 == 1) return false  
        let valid = []
        for(let i=0;i<s.length;i++){
            const custom = s[i]
            const prev = valid[valid.length-1]
            if(custom == '(' || custom=='{' || custom=='['){
                valid.push(custom)
            } else if(
                (custom == ')' && prev == '(') || 
                (prev == '{' && custom=='}') || 
                (prev == '[' && custom==']')
                ){
                valid.pop()
            } else {
                return false
            }
        }

        return valid.length == 0

    }
  }
};
</script>