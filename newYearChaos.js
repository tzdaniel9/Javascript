q = [1, 2, 3, 4, 5, 6, 7, 8];
//can only bribe 2 people

function minimumBribes(q) {
  let bribe = 0;
  let chaotic = false;

  //iterate over the array from the last element
  for (let i = q.length; i >= 0; i--) {
    //if the current element is more than 2 positions ahead of its original position the array is too chatic
    if (q[i] - (i + 1) > 2) {
      chaotic = true;
      break;
    }
    //otherwise, iterate over the elements in front of the current element
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      // if an element infront of the current element is greater than the current element, increment the number of bribes
      if (q[j] > q[i]) bribe++;
    }
  }
  console.log(chaotic ? "Too chaotic" : bribe);
}

