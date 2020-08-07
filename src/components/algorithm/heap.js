
/**
 * 二叉树
 * 堆化  最大堆&最小堆
 */
class MinHeap {
    constructor(initArr) {
      // index为0时赋值null,便于计算子节点index和父节点index的关系
      this.heap = [null]
    }
  
    insert(node) {
      this.heap.push(node);
      if (this.heap.length > 1) {
        let current = this.heap.length - 1;
        // ->> heapifyUp
        while (current > 1 &&
          this.heap[Math.floor(current / 2)] > this.heap[current]) {
          // 交换当前节点和父节点
          [this.heap[Math.floor(current / 2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current / 2)]];
          current = Math.floor(current / 2);
        }
        // <<- heapifyUp
      }
    }
  
    /** 删除堆顶元素 */
    remove() {
      let smallest = this.heap[1];
      if (this.heap.length > 2) {
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.splice(this.heap.length - 1);
        if (this.heap.length === 3) {
          if (this.heap[1] > this.heap[2]) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
          }
          return smallest;
        }
        // ->> heapifyDown
        let current = 1;
        let leftChildIndex = current * 2;
        let rightChildIndex = current * 2 + 1;
  
        while (
          this.heap[leftChildIndex] &&
          this.heap[rightChildIndex] &&
          (this.heap[current] > this.heap[leftChildIndex] ||
            this.heap[current] > this.heap[rightChildIndex])) {
          if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
            [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
            current = leftChildIndex;
          } else {
            [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
            current = rightChildIndex;
          }
  
          leftChildIndex = current * 2;
          rightChildIndex = current * 2 + 1;
          // <<- heapifyDown
        }
      } else if (this.heap.length === 2) {
        this.heap.splice(1, 1);
      } else {
        return null;
      }
  
      return smallest;
    }
  }

  /**
   * 堆化
   * 将一个无序的二叉堆，整理成有序顶堆
   * 最大顶堆、最小顶堆
   */
  class Heap {
    constructor(initarr){
       
        this.heap = initarr
    }
    
    /**
     * 最小堆
     */
    minHeapify(){

        const cHeap = [].concat(this.heap)

        if(!cHeap.length) return false
        if(cHeap.length == 1) return cHeap

        // 获取最后一个非叶子节点
        let lastNode = Math.floor((cHeap.length - 1 ) / 2)
        for(let j = lastNode;j>=0;j--){
            this.heapify(cHeap,j,'min')
        }

        return cHeap
    }

    /**
     * 最大堆
     * @param {*} 
     */
    maxHeapify(){    
        const cHeap = [].concat(this.heap)  
        if(!cHeap.length) return false
        if(cHeap.length == 1) return cHeap

        // 获取最后一个非叶子节点
        let lastNode = Math.floor((cHeap.length - 1 ) / 2)
        for(let j = lastNode;j>=0;j--){
            this.heapify(cHeap,j,'max')
        }

        return cHeap
    }

    // 堆化
    heapify(arr,curNode,type){
        
        let i = curNode

        while(true){

            let maxIndex = i

            let leftLeaf = i * 2 + 1 // 左子树
            let rightLeaf = i * 2 + 2 // 右子树
            
            // 存在左子树 并且 小于父节点
           
            let compL = type == 'max' ? arr[i] < arr[leftLeaf] : arr[i] > arr[leftLeaf]

            if(arr[leftLeaf] && compL){
                maxIndex = leftLeaf
            }

            let compR = type == 'max' ? arr[maxIndex] < arr[leftLeaf] : arr[i] > arr[leftLeaf]

            if(arr[rightLeaf] && compR){
                maxIndex = rightLeaf
            }

            if(maxIndex != i) {
                this.swap(arr,i,maxIndex)
                i = maxIndex
            }else{
                break
            }
        }
    }
    // 交换
    swap(arr,i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
  }

  console.log(typeof Heap)
  export default Heap