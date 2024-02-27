function partition(s){
    const partitions = [];

    function backtrack(start, currentPartition) {
        if (start === s.length) {
            partitions.push(currentPartition.slice());
            return;
        }

        for (let i = start; i < s.length; i++) {
            const substring = s.substring(start, i + 1);
            currentPartition.push(substring);
            backtrack(i + 1, currentPartition);
            currentPartition.pop();
        }
    }

    backtrack(0, []);
    let ans = [];
    for (let i = 0; i < partitions.length; i++){
        let count = 0;
        for (let j = 0; j < partitions[i].length; j++){
            let x = partitions[i][j];
                        if (partitions[i][j] === x.split("").reverse().join("")){
                count++;
            }
        }
        if (count === partitions[i].length){
                ans.push(partitions[i]);
            }
    }
    return ans;
}
