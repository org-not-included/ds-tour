const twocity = (costs) => {
    costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]))
    let sum = 0
    let cap = costs.length/2
    let A = 0
    let B = 0
    for (var i=0 ; i<costs.length; i++) {
        cityAcost = costs[i][0]
        cityBcost = costs[i][1]

        if (cityAcost <= cityBcost){
            if (A<cap){
                sum += cityAcost
                A++
            } else { 
                sum += cityBcost
                B++
            }
        } else {
            if (B<cap){
                sum += cityBcost
                B++
            } else {
                sum+= cityAcost
                A++
            }
        }
    }
    return sum
}

console.log(twocity([[10,20],[30,200],[400,50],[30,20]]))