function hammingDistance(x, y) {
  if (x.length !== y.length) {
    console.log("Strings must be of the same length");
  }

  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
}

console.log(hammingDistance("hello", "h3ll0"));

//The hamming distance between two integers is the number of positions at which the
// corresponding bits are different

//Given two integers x and y, return the hamming distance between them

function hammingDistanceNum(x, y) {
  x = x.toString(2);
  y = y.toString(2);

  if (x.length < y.length) {
    while (x.length !== y.length) x = "0" + x;
    // console.log('y is '+y.length)
  } else {
    while (x.length !== y.length) y = "0" + y;
    // console.log('x is '+ x.length)
  }

  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
}

console.log(hammingDistanceNum(1, 4));
console.log(hammingDistanceNum(4, 1));
