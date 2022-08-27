function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)))

// bfs traversal path with queue
 const bfs_traversal = (root) => {
    let levels = []
    let queue = [root]
    while(queue.length !== 0){
        let level = []
        const levelLength = queue.length
        for (var i=0; i<levelLength; i++){
            const node = queue.shift()
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            level.push(node.val)
        }
        levels.push(level)
    } 
    return levels
}

// dfs traversal path with stack
const dfs_traversal = (root) => {
    if (root === null) return null
    let stack = [root]
    let dfsPath = []
    while (stack.length !== 0) {
        const node = stack.pop()
        dfsPath.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return dfsPath
}

console.log('BFS Traversal', bfs_traversal(root))
console.log('DFS Traversal', dfs_traversal(root))

// The DFS or Depth First Search is used in different places. Some common uses are −
// If we perform DFS on unweighted graph, then it will create minimum spanning tree for all pair shortest path tree
// We can detect cycles in a graph using DFS. If we get one back-edge during BFS, then there must be one cycle.
// Using DFS we can find path between two given vertices u and v.
// We can perform topological sorting is used to scheduling jobs from given dependencies among jobs. Topological sorting can be done using DFS algorithm.
// Using DFS, we can find strongly connected components of a graph. If there is a path from each vertex to every other vertex, that is strongly connected.

// Like DFS, the BFS (Breadth First Search) is also used in different situations. These are like below −
// In peer-to-peer network like bit-torrent, BFS is used to find all neighbor nodes
// Search engine crawlers are used BFS to build index. Starting from source page, it finds all links in it to get new pages
// Using GPS navigation system BFS is used to find neighboring places.
// In networking, when we want to broadcast some packets, we use the BFS algorithm.
// Path finding algorithm is based on BFS or DFS.
// BFS is used in Ford-Fulkerson algorithm to find maximum flow in a network.