function processLogs(logs, threshold) {
    // Write your code here
    let map = new Map()
    logs.forEach((log, index) => {
        let l = log.split(" ")
        console.log(l[0])
        console.log(l[1])
        map.set(l[0], map.get(l[0]) ? map.get(l[0]) + 1 : 1)
        if (l[0] != l[1]) {
            map.set(l[1], map.get(l[1]) ? map.get(l[1]) + 1 : 1);
        }
    })
    console.log(map)
}

const logs = [ '1 2 50', '1 7 70', '1 3 20', '2 2 17' ]

processLogs(logs, 2)