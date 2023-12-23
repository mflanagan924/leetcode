function isPathCrossing(path) {
    let mainArray = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < path.length; i++) {
        let subArray = [x, y];

        if (path[i] === "N") {
            y++;
        } else if (path[i] === "S") {
            y--;
        } else if (path[i] === "E") {
            x++;
        } else if (path[i] === "W") {
            x--;
        }

        if (mainArray.some(pos => pos[0] === x && pos[1] === y)) {
            return true; // Path crosses itself
        }

        mainArray.push(subArray);
    }

    return false; // Path does not cross itself
}