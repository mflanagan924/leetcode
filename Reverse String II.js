function reverseStr(s, k){
    if (s.length < k){
        return s.split("").reverse().join("");
    }
    if (s.length >= k && s.length < 2*k){
        var chunks = [];
        for (var i = 0, charsLength = s.length; i < charsLength; i += k) {
            chunks.push(s.substring(i, i + k));
        }
        chunks[0] = chunks[0].split("").reverse().join("");
        return chunks.join("");
    }
    if (s.length >= 2*k){
        var chunks2 = [];
        for (var j = 0, charsLength2 = s.length; j < charsLength2; j += k) {
            chunks2.push(s.substring(j, j + k));
        }
        for (let k = 0; k < chunks2.length; k+=2){
            chunks2[k] = chunks2[k].split("").reverse().join("");
        }
        return chunks2.join("");
    }
}