const getEdges = (idx, edge) => {
    const edges = []
    for(let i=0; i<edge.length; i++){
        if(idx === i) continue
        if(edge[i]===0) continue
        edges.push(i)
    }
    return edges
}

const buildAdjList = (edges, n=edges.length) => {
    const adjList = Array.from({length: n}, () => [])
    console.log(adjList)
    for (let i=0; i < edges.length; i++){
        adjList[i].push(...getEdges(i, edges[i]))
    }
    return adjList
}

const dfs = (node, adjList, visited) => {
      visited[node] = true;
      for (let neighbor of adjList[node]){
          if(!visited[neighbor]){
              visited[neighbor] = true;
              dfs(neighbor, adjList, visited)
          }
      }
}

const findCircleNum = (isConnected) => {
    const adjList = buildAdjList(isConnected)
    const visited = {}
    let provinces =0

    for (let vertex = 0; vertex < adjList.length; vertex++){
        if(!visited[vertex]){
            provinces++
            dfs(vertex, adjList, visited)
        }
    }
    return provinces 
}

let isConnected = [[1, 1, 0], [1,1,0], [0,0,1]]

console.log(findCircleNum(isConnected))