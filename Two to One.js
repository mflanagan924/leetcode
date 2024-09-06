function longest(s1, s2) {
    let s3 = s1 + s2;
    s3 = s3.split("");
    let unique = [... new Set(s3)];
    return unique.sort().join("");
  }
  