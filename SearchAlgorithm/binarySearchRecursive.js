// Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't', in the array.return -1 if the target element is not found
//  arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
//  arr = [-5, 2, 4, 6, 10], t = 6 -> Should return 3
//  arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1

// Tips for recursive solution
// figure out how to break down the problem into smaller vesrions of the same problem
// Identify the base case for recursion

// Pseudocode
// If the array is empty, return -1 as the element cannot be found
// If the array has elements, find the middle element in the array, If target is equal to the middle element, return the middle element index
// if target is less than the middle element, binary search left half of the array
// if target is greater  than the middle element, binary search right half of the array

function binarySearchRecursion(arr, target) {
    return binarySearchRecursion(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex){
    if (leftIndex < rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }

    if(target < arr[middleIndex]) {
       return search(arr, target, leftIndex, middleIndex - 1)
    } else {
       return search(arr, target, middleIndex + 1, rightIndex)
    }
}

console.log(binarySearchRecursion([-5, 2, 4, 6, 10], 10))
// console.log(binarySearchRecursion([-5, 2, 4, 6, 10], 6))
// console.log(binarySearchRecursion([-5, 2, 4, 6, 10], 20))

// Big O = O(logn)