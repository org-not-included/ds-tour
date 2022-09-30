/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity === undefined ? null : capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   if(!this.map.has(key)) return -1;
   let value = this.map.get(key)
   this.map.delete(key)
   this.map.set(key, value)
   return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
        this.map.delete(this.map.keys().next().value);
    }
    return this.map
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lru = new LRUCache(2)
console.log(lru.put(1, 5))
console.log(lru.put(2, 6))
console.log(lru.get(1))
console.log(lru.put(3, 7))
