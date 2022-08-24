
var RandomizedSet = function() {
    this.map = {};
    this.values = [];
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] !== undefined) return false;
    this.map[val] = this.values.length;
    this.values.push(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] === undefined) return false;
    const idx = this.map[val];
    delete this.map[val];
    const last = this.values.pop();
    if (this.values.length === idx) return true;
    this.map[last] = idx;
    this.values[idx] = last;
    return true
};

RandomizedSet.prototype.getRandom = function() {
    if (this.values.length === 0) return null;
    return this.values[Math.floor(Math.random() * this.values.length)];
};

const RS = new RandomizedSet()
console.log(RS.insert(1))
console.log(RS.insert(2))
console.log(RS.insert(3))
console.log(RS.insert(4))
console.log(RS.getRandom())
console.log(RS.map)
console.log(RS.values)