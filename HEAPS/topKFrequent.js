class PriorityQueue {
    constructor() {
      this.array = []
    }
    enqueue(element) {
      if (this.isEmpty())
        this.array.push(element)
      else {
        var added = false
        for (var i=0 ; i<this.array.length; i++){
            if(element[1] > this.array[i][1]) {
              this.array.splice(i, 0, element)
              added = true
              break
            }
        }
        if (!added)
          this.array.push(element)
      }
    }

    dequeue() {
      let pop = this.array.shift()
      return pop[0]
    }


    front() {
      return this.array && this.array[0]
    }
    size() {
      return this.array.length
    }
    isEmpty() {
      return this.array.length === 0;
    }
    print() {
        console.log(this.array)
        return this.array
    }
  }

  var topKFrequent = function(nums, k) {
    let hashMap={};
    let result=[];
    
    // frequeny counter map
    for(let num of nums){
        if(hashMap[num]){
            hashMap[num]++;
        }else{
            hashMap[num]=1;
        }
    }
    
    let hashArray = Object.entries(hashMap); // Object.entries coverts object to array of arrays for sort
    
    // Use pq to sort by number of occurances
    let pq = new PriorityQueue()
    for (let arr of hashArray) {
        console.log(arr)
        pq.enqueue(arr)

    }
    
    let arr = pq.print()

    // get the k most frequent ones , and push it to the final result
    arr.slice(0,k).forEach(element=> result.push(parseInt(element[0])));
    
    console.log('TOP K FREQUENT', result)
    return result
};

topKFrequent([1,1,1,2,2,3], 2)