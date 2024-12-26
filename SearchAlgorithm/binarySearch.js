// Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't', in the array.return -1 if the target element is not found
//  arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
//  arr = [-5, 2, 4, 6, 10], t = 6 -> Should return 3
//  arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1

// Pseudocode
// If the array is empty, return -1 as the element cannot be found
// If the array has elements, find the middle element in the array, If target is equal to the middle element, return the middle element index
// if target is less than the middle element, binary search left half of the array
// if target is greater  than the middle element, binary search right half of the array

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))

// Big O = O(logn)