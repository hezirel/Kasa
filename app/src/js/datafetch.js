
async function cache() { 
	let ret = await fetch("../data.json");
	return ret;
}

export default cache;