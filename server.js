const tossCoin = ()=> {
	return Math.floor(Math.random() * 6) + 1;
};

console.log('Starting program');

const promise = new Promise((fulfill, reject)=> {
	const n = tossCoin();
	if (n === 6) {
		fulfill(n);
	} else {
		reject(n);
	}
	console.log("Done with the promise call");
});

promise.then((toss)=> {
	console.log("Yaaaay - it was a six: " + toss);
}).catch((toss)=> {
	console.log("Uh no, no 6 this time round: " + toss);
});
console.log("Promise program over");