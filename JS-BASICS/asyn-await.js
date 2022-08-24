async function sleep(time = 1) {
	const sleepMilliseconds = time * 1000
	
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Slept for: ${sleepMilliseconds}ms`)
		}, sleepMilliseconds)
	})
}

// RUNNING ASYNC AWAIT IN PARALLEL
async function main() {
	// 1. 
	console.time('main')

	// 2.
	const [firstCall, secondCall, thirdCall] = await Promise.all([
		sleep(1), 
		sleep(2),
		sleep(3)
	])
	console.log(`First call: ${firstCall}`)
	console.log(`Second call: ${secondCall}`)
	console.log(`Third call: ${thirdCall}`)

	// 3.
	console.timeEnd('main')
}

main()

// RUNNNIN ASYNC AWAIT IN SERIES

async function main2() {
	// 1. 
	console.time('main2')

	// 2.
	console.log(await sleep(1))
	console.log(await sleep(2))
	console.log(await sleep(3))

	// 3.
	console.timeEnd('main2')
}

// main2()