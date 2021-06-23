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
    let s1 = "babadcbbd";
    // console.log(this.isPalindrome(s1));
    console.log(this.solve(s));
  },
  methods: {

    /**
     * 方案一：执行没问题，但在 LC 中提交显示“超出时间限制...”
     */
    solve(s) {
      if (s == "") return s;
      let n1 = 0;
      let n2 = s.length - 1;
      let maxL = s.substring(n1, 1);

      while (n1 < s.length - 1) {
        
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
     * 判断当前字符串是否是回文字符串
     * 思路一：将字符串反转，判断两个字符串是否一样
     */
    isPalindrome(s) {
      var reverseS = s.split("").reverse().join("");
      return s == reverseS;
    },
  },
};
</script>

<style lang="scss">
@import "_scss/leetcode/index.scss";
</style>
