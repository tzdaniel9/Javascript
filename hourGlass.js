const s = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];


let sumArray = [];
let i = 0;
let j = 0;
let x = 0;


while (x < 16) {
  if (x == 4 || x == 8 || x == 12) {
    i++;
    j=0;
  }

  const sum = s[i][j] + s[i][j + 1] + s[i][j + 2] + s[i + 1][j + 1] + s[i + 2][j] + s[i + 2][j + 1] + s[i + 2][j + 2];
  sumArray.push(sum);
  j++;
  x++;
}

console.log(Math.max(...sumArray));


/**
 * 1.Create maxSum variable to -63
 * 2.Loop through rows (until 4)
 *  a.loop through columns (until 4)
 *      i. Create top Variable for the sum of top hour glass value
 *      ii. Create middle variable for the middle value
 *      iii. Create bottom variable for the sum of bottom values
 *      iv. Find the max of the maxSum or the top, middle, bottom (added up)
 * 3.Return maxSum
 */

function hourGlass(s){
    let maxSum = -63
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            let top = s[i][j] + s[i][j+1] + s[i][j+2]
            console.log(s[i][j], s[i][j+1], s[i][j+2])
            let mid = s[i+1][j+1]
            console.log('  ' + s[i+1][j+1] + '  ')
            let bot = s[i+2][j] + s[i+2][j+1] + s[i+2][j+2]
            console.log(s[i+2][j], s[i+2][j+1], s[i+2][j+2])
            console.log('\n')
            let currentSum = top + mid + bot
            maxSum = Math.max(maxSum, currentSum)
        }
    }
    return maxSum
}

console.log(hourGlass(s));
console.log(Math.max(...sumArray));


