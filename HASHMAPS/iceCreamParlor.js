var distinctCost = (m, costs) => {
    let map = new Map()
    for (var i=0 ; i<costs.length; i++){
        map.set(costs[i], i)
    }
    for (var i=0; i<costs.length; i++) {
        let k = m - costs[i]
        if (map.has(k))
            return [i, map.get(k)]

    }
    console.log(map)
    return null
}

var distinctCost2 = (m, costs) => {
    let map = new Map()
    for (var i=0; i<costs.length; i++) {
        let k = m - costs[i]
        if (map.has(k))
            return [i, map.get(k)]
        map.set(k, i)

    }
    return null
}

console.log(distinctCost(7, [2, 3, 4, 1, 7]))