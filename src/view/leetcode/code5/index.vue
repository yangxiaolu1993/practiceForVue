<template>
  <div class="leetcode leetcode-code5">
    <h3 class="leetcode-tip">LC 5：最长回文子串</h3>

    <div class="lc-chunk">
      <div class="chunk-title">描述</div>
      <div>给你一个字符串 s，找到 s 中最长的回文子串。</div>
    </div>

    <div class="lc-chunk">
      <div class="chunk-title">名词解释</div>
      <div>
        回文子串：字符串正序读的结果与倒序读的结果一样，例如“上海自来水来自海上”
      </div>
    </div>

    <div class="lc-chunk">
      <div class="chunk-title">知识点</div>
      <div>
        回文子串：字符串正序读的结果与倒序读的结果一样，例如“上海自来水来自海上”
      </div>
    </div>
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
    let s = "mqizdjrfqtmcsruvvlhdgzfrmxgmmbguroxcbhalzggxhzwfznfkrdwsvzhieqvsrbyedqxwmnvovvnesphgddoikfwuujrhxwcrbttfbmlayrlmpromlzwzrkjkzdvdkpqtbzszrngczvgspzpfnvwuifzjdrmwfadophxscxtbavrhfkadhxrmvlmofbzqshqxazzwjextdpuszwgrxirmmlqitjjpijptmqfbggkwaolpbdglmsvlwdummsrdyjhmgrasrblpjsrpkkgknsucsshjuxunqiouzrdwwooxclutkrujpfebjpoodvhknayilcxjrvnykfjhvsikjabsdnvgguoiyldshbsmsrrlwmkfmyjbbsylhrusubcglaemnurpuvlyyknbqelmkkyamrcmjbncpafchacckhymtasylyfjuribqxsekbjkgzrvzjmjkquxfwopsbjudggnfbuyyfizefgxamocxjgkwxidkgursrcsjwwyeiymoafgyjlhtcdkgrikzzlenqgtdukivvdsalepyvehaklejxxmmoycrtsvzugudwirgywvsxqapxyjedbdhvkkvrxxsgifcldkspgdnjnnzfalaslwqfylmzvbxuscatomnmgarkvuccblpoktlpnazyeazhfucmfpalbujhzbykdgcirnqivdwxnnuznrwdjslwdwgpvjehqcbtjljnxsebtqujhmteknbinrloregnphwhnfidfsqdtaexencwzszlpmxjicoduejjomqzsmrgdgvlrfcrbyfutidkryspmoyzlgfltclmhaeebfbunrwqytzhuxghxkfwtjrfyxavcjwnvbaydjnarrhiyjavlmfsstewtxrcifcllnugldnfyswnsewqwnvbgtatccfeqyjgqbnufwttaokibyrldhoniwqsflvlwnjmffoirzmoxqxunkuep";
    let s1 = "12324114321";
    let s2 = "bb";
    console.log(this.isPalindromeMid(s1));
    // console.log(this.solve(s2));
  },
  methods: {

    /**
     * 方案一：执行没问题，但在 LC 中提交显示“超出时间限制...”，添加 && maxL.length < (s.length - 1 - n1)
     */
    solve(s) {
      if (s == "") return s;
      let n1 = 0;
      let n2 = s.length - 1;
      let maxL = s.substring(n1, 1);

      while (n1 < s.length - 1 && maxL.length <= (s.length - 1 - n1)) {
        
        if (s[n2] == s[n1]) {
          let sChild = s.substring(n1, n2 + 1);

          if (this.isPalindrome(sChild)){
            if(maxL.length < sChild.length) maxL = sChild;
            n1 += 1;
            n2 = s.length - 1;
          } else {
            n2 -= 1;
          }
        } else {
          n2 -= 1;
        }
      }

      return maxL;
    },

    /**
     * 方案二：
     */
    solveMid(s){
      if(s.length == 1) return s

      let n1 = 1

      // let newS = 
      // let isA = this.isPalindromeMid(s.substring())


    },
    /**
     * 判断当前字符串是否是回文字符串
     * 思路一：将字符串反转，判断两个字符串是否一样
     */
    isPalindrome(s) {
      var reverseS = s.split("").reverse().join("");
      return s == reverseS;
    },

    /**
     * 判断当前字符串是否是回文字符串
     * 思路二：若是回文字符串，会有一个中间位置，两边的内容是一致的，所以获取到字符串的中间位置，向两边循环，若不一致则为false
     */
    isPalindromeMid(s){
      let n1 = 0
      let n2 = 0
      let mid = ~~(s.length / 2)
      
      if(s.length%2){
        // 奇数
        n1 = mid - 1
        n2 = n1+2
      }else{
        // 偶数
        n1 = mid - 1
        n2 = mid
      }
    
      for(let i = n1;i<mid;i++){
        if(s[n1] !== s[n2]){
          return false
        }

        n1 -= 1
        n2 += 1
      }

      return true
     
    }
  },
};
</script>

<style lang="scss">
@import "_scss/leetcode/index.scss";
</style>
