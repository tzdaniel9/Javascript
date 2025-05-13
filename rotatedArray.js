/**
 * 1.create rotate array variable
 * 2.loop through 'a' array starting at 0 until d
 *      a. push the current index value to roatedArray.
 * 3.Loop through 'a' array starting at 0 until d
 *      a. Push the current index value to rotatedArray
 * 4.return rotatedArray
 */
 a = [1, 2, 3, 4, 5];


function rotLeft(a, d) {
  let rotatedArray = [];
  for (let i = d; i < a.length; i++) {
    rotatedArray.push(a[i])
  }
  for(let i = 0; i < d; i++){
      rotatedArray.push(a[i])
  }
  return rotatedArray
}

console.log(rotLeft(a, 4))
