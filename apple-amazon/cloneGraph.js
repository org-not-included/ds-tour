/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// {
//   val: 1,
//   neighbors: [ { val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] } ]
// }
// [
//   { val: 2, neighbors: [ [Object], [Object] ] },
//   { val: 4, neighbors: [ [Object], [Object] ] }
// ]
var cloneGraph = function(node) {
    let visited = {}

    function dfs(node){
        if (!node) return node
        if (!!visited[node.val]) return visited[node.val]

        let root = new Node(node.val)
        visited[node.val] = root

        for (let neighbor of node.neighbors){
            root.neighbors.push(dfs(neighbor))
        }
        return root
    }
    return dfs(node)
    
};