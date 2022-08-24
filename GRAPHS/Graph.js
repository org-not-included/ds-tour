class Graph {
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map()
        // this.stack = new Array(noOfVertices)
    }

    // add vertices to the graph
    addVertices(vertices) {
        for (var i = 1; i <= vertices; i++) {
            this.AdjList.set(i, []);  // initialize the adjacent list with a null array
        }
    }

    // add edge to the graph
    addEdge(v, w) {
        this.AdjList.get(v).push(w); // get the list for vertex v and put the vertex w denoting edge between v and w
        this.AdjList.get(w).push(v);  // Since graph is undirected, add an edge from w to v also
    }

    // get isolated sets
    getAllConnections(){
        var isVisited = new Boolean(this.noOfVertices);
        let connectionsList = new Map()
        for(var i=1 ; i<=this.noOfVertices; i++) {
            // console.log(this.AdjList.get(i))
            if(!isVisited[i]){
                let connection = this.dfs(i, isVisited, new Array())
                connectionsList.set(i, connection)
            }
        }
        console.log(connectionsList)
        return connectionsList
    }

    dfs(index, isVisited, connectionList) {
        isVisited[index] = true;
        connectionList.push(index)
        for (let vertex of this.AdjList.get(index)){
            if(!isVisited[vertex]){
               this.dfs(vertex, isVisited, connectionList)
            }
        }
        return connectionList
    }

}

const costEvaluation = (n, connections) => {
    // Using the above implemented graph class
    var g = new Graph(n)
    // var vertices = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    
    // adding vertices
    g.addVertices(n)

    // console.log(g)
    // console.log('-----------------------')

    // adding edges
    for (var i=0; i<connections.length; i++)
        g.addEdge(connections[i][0], connections[i][1])
    
    console.log('GRAPH IS: ', g)
    // console.log('-----------------------')

    var connectionsList = g.getAllConnections()
    let total = 0
    for (var list of connectionsList.values()) {
        total = total + Math.ceil(Math.sqrt(list.length))
        n = n - list.length
    }
    return total + n
}

var nodes = 10
var connections = [[1,2], [1,3], [2,4], [3,5], [7,8]]
console.log('EFFIECINCY IS:', costEvaluation(nodes, connections))