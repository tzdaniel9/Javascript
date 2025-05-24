// An integer is a palindrome when it reads the same forward and backward

// Input: x = 121 ----->>>>> Output: true
// Input: x = 10 ----->>>>> Output: false

const isPalindrome = (x) => {
  return x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(121);
console.log(res);

// 121 => '121' => ["1","2","1"] => ["1","2","1"] => "121"

const isPalindrome = (x) => {
  return x < 0 ? fakse : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(121);
console.log(res);
