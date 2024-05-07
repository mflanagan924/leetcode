function removeOrAdd (string) {
	let arr = string.split(" ");
	for (let i = 0; i < arr.length; i++){
	    if (arr[i][arr[i].length - 1] !== "!"){
	        arr[i] += "!";
	    } else if (arr[i][arr[i].length - 1] === "!" && arr[i][arr[i].length - 2] !== "!"){
	        arr[i] = arr[i].substring(0, arr[i].length - 1);
	    }
	}
	return arr.join(" ");
}