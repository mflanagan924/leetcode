function friend(friends) {
	let ans = [];
	for (let i = 0; i < friends.length; i++) {
		if (friends[i].length === 4) {
			ans.push(friends[i]);
		}
	}
	return ans;
}