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
            if(element[1] < this.array[i][1]) {
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
    }
  }

  var pq = new PriorityQueue();
  pq.enqueue(["Google", 2]);
  pq.enqueue(["Bing", 3]);
  pq.enqueue(["Microsoft", 1]);
  pq.enqueue(["Apple", 2]);

  pq.print()
  pq.dequeue()
  pq.print()
  pq.front()
  