const sequenceSum = (begin, end, step) => {
    if (begin > end){
        return 0;
    }
    let ans = begin;
    let count = begin;
    while (count + step <= end){
        count += step;
        ans += count;
    }
    return ans;
  };