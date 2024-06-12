function symmetricPoint(p, q) {
    let x = p[0] - q[0];
    let y = p[1] - q[1];
    return [q[0] - x, q[1] - y];
  }