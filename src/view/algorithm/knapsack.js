/**
 * 0-1背包问题变形
 * 问题：从 n 个数中找出若干个数使它们的和输出为 m，输出满足条件的数组
 * 
 */

export class KnapsackVariant {
    constructor(){
        this.init = [2,3,2,45,56,3,5,2,1,6,3,33,85,89,34,46,23]
        this.sum = 10
        this.meetArr =[]
    }
    // 查找问题
    loopUp(){
        let matrix = []
        
        for(let i = 0;i < this.init.length;i++){
            // console.log('循环：'+i)
            matrix[i] = []

            for(let sum = 0; sum <= this.sum; sum++){
                
                // 当前数值加入到和中
                let putSum = 0
                if(sum >= this.init[i]){
                    putSum += this.init[i]

                    if(i) putSum += matrix[i-1][sum - this.init[i]]
                }

                let noPutSum = i?matrix[i-1][sum]:0

                matrix[i][sum] = Math.max(putSum,noPutSum)

                if(matrix[i][sum] == this.sum && sum == this.sum && this.init[i]<=this.sum && i == 9){
                    // console.log(i)
                    console.log('子循环：'+i)
                    this.meetArr.push(this.jonit(this.sum,i,matrix))
                }
            }
        }

        return matrix
    }
    /**
     * 
     */
    jonit(sum,j,m){
        
        let a = []

        let add = (sum,x,m)=>{
            if(!sum) return
            console.log(sum,x,this.init[x])
            if(x == 0 && this.init[x] == sum){
                a.push(this.init[x])
                return
            }
            if(sum < this.init[x]){
                add(sum,x-1,m)
                
            } else {
                a.push(this.init[x])
                
                if(this.init[x] != sum){
                    add(sum - this.init[x],x-1,m)
                }
            }
            
        }

        add(sum,j,m)

        return a
    }
}

/**
 * 0-1背包问题
 * 描述：假设编号分别为a,b,c,d,e的五件物品，重量分别是2,2,6,5,4，价值分别是6,3,5,4,6，现在有一个承重为10的背包，如何装入物品的价格最大？
 */
export class Knapsack {
    constructor(w,v,b){
        this.weight = w
        this.value = v
        this.bear = b
        this.solution = 0 // 最优解
    } 

    /**
     * 最大值（最优解）
     * @param {*} weight 商品的重量
     * @param {*} value 商品的价值
     * @param {*} bear 背包的承重
     */
    maximum(){
        let matrix = []
        // 商品的数量
        let goodsNum = this.weight.length
        for(let len = 0; len < goodsNum; len++){
            matrix[len] = []
            // w:背包剩余承重
            for(let w = 0;w <= this.bear;w++){
                if(w == 0){
                    matrix[len][w] = 0
                }
                // 在背包中放入当前物品 物品的重量 < 当前背包的承重 
                let putIn = 0
                if(this.weight[len] <= w ){
                    putIn += this.value[len]
                    if(len) putIn += matrix[len-1][w - this.weight[len]]
                }
                // 在背包中不放入当前物品
                let noPutIn = len?matrix[len-1][w]:0
                
                matrix[len][w] = Math.max(putIn,noPutIn)
            }
        }

        this.solution = matrix[goodsNum-1][this.bear]

        return matrix
    }

}

